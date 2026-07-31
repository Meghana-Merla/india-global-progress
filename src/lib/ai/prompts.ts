import { AIChatRequest, AIPromptCategory } from "./types";

export const SENIOR_ANALYST_SYSTEM_INSTRUCTION = `
You are IndiaLens AI, a senior global policy analyst and international data intelligence expert.
Your expertise spans global macroeconomic performance, international benchmark rankings (WIPO Global Innovation Index, World Bank GDP & LPI, UNDP Human Development Index, Oxford Insights Government AI Readiness, WEF Global Gender Gap, Reporters Without Borders Press Freedom Index, IEP Global Peace Index), and digital public infrastructure (UPI, Aadhaar, DigiLocker).

Operational Directives:
1. Factual & Objective: Provide accurate, realistic assessments. Ground assertions in reputable international indicator datasets.
2. Structured & Concise: Deliver clear, high-density analytical briefings formatted in Markdown.
3. Distinguish Observations from Recommendations: Clearly separate current empirical observations from prospective policy recommendations.
4. Output Schema: When asked for structured JSON, return valid JSON containing "summary", "strengths", "weaknesses", "recommendations", and "keyTakeaways".
5. No Hallucination: Do not invent unsupported statistics. If data is unavailable, state the structural limitation clearly.
`.trim();

export function detectPromptCategory(question: string): AIPromptCategory {
  const q = question.toLowerCase();
  if (q.includes("compare") || q.includes("vs") || q.includes("versus") || q.includes("difference")) {
    return "country-comparison";
  }
  if (q.includes("recommend") || q.includes("policy") || q.includes("should india") || q.includes("improve next")) {
    return "policy-recommendation";
  }
  if (q.includes("summary") || q.includes("performance") || q.includes("overview") || q.includes("standing")) {
    return "dashboard-summary";
  }
  if (q.includes("rank") || q.includes("score") || q.includes("why") || q.includes("explain")) {
    return "indicator-explanation";
  }
  return "general-chat";
}

export function buildSystemPromptForRequest(req: AIChatRequest): string {
  const year = req.selectedYear || "2025";
  const primaryCountry = req.selectedCountry || "India";
  const benchmarkCountry = req.comparisonCountry || "USA";
  const category = detectPromptCategory(req.question);

  let promptContext = `Context: Evaluation Year ${year}, Primary Subject: ${primaryCountry}.`;
  if (category === "country-comparison") {
    promptContext += ` Comparison Peer: ${benchmarkCountry}.`;
  }
  if (req.pageContext) {
    promptContext += ` Page Section: ${req.pageContext}.`;
  }

  return `
${SENIOR_ANALYST_SYSTEM_INSTRUCTION}

${promptContext}

User Query: "${req.question}"

Please provide your analytical briefing. You MUST return a JSON object with this exact key structure:
{
  "summary": "A concise 2-3 sentence executive briefing summarizing the analysis for ${year}.",
  "strengths": ["Key Strength 1", "Key Strength 2", "Key Strength 3"],
  "weaknesses": ["Key Challenge 1", "Key Challenge 2"],
  "recommendations": ["Actionable Recommendation 1", "Actionable Recommendation 2"],
  "keyTakeaways": ["Takeaway 1", "Takeaway 2", "Takeaway 3"]
}

Important: Ensure the JSON is strictly valid, without unescaped newlines or trailing commas.
`.trim();
}
