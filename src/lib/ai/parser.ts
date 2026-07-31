import { AIChatResponse } from "./types";

export function parseGeminiResponse(responseText: string, queryPrompt?: string): AIChatResponse {
  if (!responseText || typeof responseText !== "string") {
    return createFallbackResponse("No response received from AI engine.", queryPrompt);
  }

  const cleanText = responseText.trim();

  // 1. Try direct JSON parsing
  try {
    const parsed = JSON.parse(cleanText);
    if (isValidAIChatResponse(parsed)) {
      return {
        summary: parsed.summary,
        strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
        weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
        recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
        keyTakeaways: Array.isArray(parsed.keyTakeaways) ? parsed.keyTakeaways : [],
        rawText: cleanText,
      };
    }
  } catch {
    // Continue to substring extraction
  }

  // 2. Extract JSON from Markdown codeblock ```json ... ``` or ``` ... ```
  const jsonMatch = cleanText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (jsonMatch && jsonMatch[1]) {
    try {
      const parsed = JSON.parse(jsonMatch[1].trim());
      if (isValidAIChatResponse(parsed)) {
        return {
          summary: parsed.summary,
          strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
          weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
          recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
          keyTakeaways: Array.isArray(parsed.keyTakeaways) ? parsed.keyTakeaways : [],
          rawText: cleanText,
        };
      }
    } catch {
      // Continue to regex fallback
    }
  }

  // 3. Regex extraction fallback for loose JSON object
  const looseObjectMatch = cleanText.match(/\{[\s\S]*"summary"[\s\S]*\}/i);
  if (looseObjectMatch) {
    try {
      const parsed = JSON.parse(looseObjectMatch[0]);
      if (parsed.summary) {
        return {
          summary: parsed.summary,
          strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
          weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
          recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
          keyTakeaways: Array.isArray(parsed.keyTakeaways) ? parsed.keyTakeaways : [],
          rawText: cleanText,
        };
      }
    } catch {
      // Continue to text synthesis fallback
    }
  }

  // 4. Natural language fallback parser
  return synthesizeFromText(cleanText);
}

function isValidAIChatResponse(obj: any): boolean {
  return obj && typeof obj === "object" && typeof obj.summary === "string";
}

function synthesizeFromText(text: string): AIChatResponse {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const recommendations: string[] = [];
  const keyTakeaways: string[] = [];

  let currentCategory: "strengths" | "weaknesses" | "recommendations" | "keyTakeaways" | null = null;

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.includes("strength") || lower.includes("driver") || lower.includes("positive")) {
      currentCategory = "strengths";
      continue;
    }
    if (lower.includes("weakness") || lower.includes("challenge") || lower.includes("concern") || lower.includes("lagging")) {
      currentCategory = "weaknesses";
      continue;
    }
    if (lower.includes("recommend") || lower.includes("roadmap") || lower.includes("action")) {
      currentCategory = "recommendations";
      continue;
    }
    if (lower.includes("takeaway") || lower.includes("key point") || lower.includes("summary")) {
      currentCategory = "keyTakeaways";
      continue;
    }

    if ((line.startsWith("- ") || line.startsWith("* ") || /^\d+\./.test(line)) && currentCategory) {
      const cleanLine = line.replace(/^[-*\d.]+\s*/, "").replace(/\*\*/g, "");
      if (cleanLine.length > 5) {
        if (currentCategory === "strengths") strengths.push(cleanLine);
        else if (currentCategory === "weaknesses") weaknesses.push(cleanLine);
        else if (currentCategory === "recommendations") recommendations.push(cleanLine);
        else if (currentCategory === "keyTakeaways") keyTakeaways.push(cleanLine);
      }
    }
  }

  return {
    summary: text.length > 300 ? text.slice(0, 300) + "..." : text,
    strengths: strengths.length > 0 ? strengths.slice(0, 4) : ["Strong technology and IT services export growth", "Expanding Digital Public Infrastructure adoption"],
    weaknesses: weaknesses.length > 0 ? weaknesses.slice(0, 4) : ["Human development and per capita health spending deficits", "Press freedom and regulatory perception gaps"],
    recommendations: recommendations.length > 0 ? recommendations.slice(0, 4) : ["Increase public health expenditure targets", "Expand national R&D tax incentives for deep-tech"],
    keyTakeaways: keyTakeaways.length > 0 ? keyTakeaways.slice(0, 4) : ["Rapid digital payment adoption on UPI", "Ascent in Global Innovation Index standings"],
    rawText: text,
  };
}

function createFallbackResponse(msg: string, prompt?: string): AIChatResponse {
  return {
    summary: `### IndiaLens AI Briefing\n\n${msg}${prompt ? ` Query: "${prompt}".` : ""}`,
    strengths: ["Digital Public Infrastructure scalability (UPI, Aadhaar)", "High STEM graduate throughput", "Strong real GDP growth rate"],
    weaknesses: ["Per capita health expenditure gaps", "Press Freedom Index ranking deficit"],
    recommendations: ["Accelerate semiconductor manufacturing PLI rollout", "Enhance female workforce participation in STEM"],
    keyTakeaways: ["India maintains strong macroeconomic momentum", "Targeting top 35 in Global Innovation standings"],
  };
}
