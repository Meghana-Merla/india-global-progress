export interface AIChatRequest {
  question: string;
  selectedYear?: string;
  selectedCountry?: string;
  comparisonCountry?: string;
  pageContext?: "dashboard" | "compare" | "world-map" | "ai-insights" | string;
}

export interface AIChatResponse {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  keyTakeaways: string[];
  rawText?: string;
}

export type AIPromptCategory =
  | "summary"
  | "comparison"
  | "indicator-explanation"
  | "country-analysis"
  | "policy-recommendation"
  | "trend-analysis"
  | "general-chat";

