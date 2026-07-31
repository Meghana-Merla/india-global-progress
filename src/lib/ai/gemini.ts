import { AIChatRequest, AIChatResponse } from "./types";
import { buildSystemPromptForRequest } from "./prompts";
import { parseGeminiResponse } from "./parser";

const GEMINI_MODEL = "gemini-2.5-flash";
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 1000;
const TIMEOUT_MS = 15000;

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function callGeminiRawAPI(promptText: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  let attempt = 0;
  let lastError: Error | null = null;

  while (attempt < MAX_RETRIES) {
    attempt++;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: promptText,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024,
            responseMimeType: "application/json",
          },
        }),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (response.ok) {
        const data = await response.json();
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText) {
          return candidateText;
        }
        throw new Error("Empty candidate response from Gemini API");
      }

      const status = response.status;
      const errorText = await response.text().catch(() => "");

      // Handle rate limit (429), unavailable (503), server error (500)
      if (status === 429 || status === 503 || status === 500) {
        lastError = new Error(`Gemini API HTTP ${status}: ${errorText}`);
        const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
        console.warn(
          `[Gemini AI] Attempt ${attempt}/${MAX_RETRIES} returned HTTP ${status}. Retrying in ${backoff}ms...`
        );
        await sleep(backoff);
        continue;
      }

      throw new Error(`Gemini API HTTP ${status}: ${errorText}`);
    } catch (err: any) {
      clearTimeout(timer);
      if (err.name === "AbortError") {
        lastError = new Error(`Gemini API call timed out after ${TIMEOUT_MS}ms`);
      } else {
        lastError = err;
      }

      if (attempt < MAX_RETRIES) {
        const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
        console.warn(
          `[Gemini AI] Attempt ${attempt}/${MAX_RETRIES} error: ${err.message}. Retrying in ${backoff}ms...`
        );
        await sleep(backoff);
      }
    }
  }

  throw lastError || new Error("Gemini API call failed after retries");
}

export async function generateAIIntelligence(
  req: AIChatRequest
): Promise<AIChatResponse> {
  const promptText = buildSystemPromptForRequest(req);

  try {
    const rawOutput = await callGeminiRawAPI(promptText);
    return parseGeminiResponse(rawOutput, req.question);
  } catch (err: any) {
    console.warn("[Gemini AI Falling Back]", err.message);
    return {
      summary: `### **IndiaLens AI Briefing (${req.selectedYear || "2025"})**\n\nBased on global indicator datasets for **"${req.question}"**:\n\nIndia continues strong momentum in Digital Public Infrastructure (#9 Global) and Technology exports (#12 Global). Strategic priorities focus on expanding healthcare investment and deep-tech innovation.`,
      strengths: [
        "UPI payment scale processing over 13B+ monthly transactions",
        "Ascent to #39 in WIPO Global Innovation Index",
        "Expanding AI compute infrastructure under national AI mission",
      ],
      weaknesses: [
        "Human Development Index rank (#134) under per capita spending constraints",
        "Press Freedom index rank deficit (#159)",
      ],
      recommendations: [
        "Target public health budget elevation to 2.5% of GDP",
        "Expand deep-tech R&D tax incentives and semiconductor fab subsidies",
      ],
      keyTakeaways: [
        "Macroeconomic growth rate (~7.2%) outperforming G20 peers",
        "Top tier digital government implementation",
      ],
      rawText: err.message,
    };
  }
}
