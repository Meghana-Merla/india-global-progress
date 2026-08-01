import { NextResponse } from "next/server";
import {
  generateAIIntelligence,
  AIChatRequest,
  detectIntent,
  buildPromptForIntent,
} from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AIChatRequest;

    if (!body || !body.question || typeof body.question !== "string") {
      return NextResponse.json(
        { error: "Question field is required and must be a string." },
        { status: 400 }
      );
    }

    const question = body.question.trim();
    const selectedYear = body.selectedYear || "2025";
    const selectedCountry = body.selectedCountry || "India";
    const comparisonCountry = body.comparisonCountry || "USA";
    const pageContext = body.pageContext || "ai-insights";

    // 1. Detect Intent
    const intent = detectIntent(question, {
      pageContext,
      selectedCountry,
      comparisonCountry,
    });

    // 2 & 3. Build Intent-Specific Prompt with Relevant Dataset ONLY
    const { promptName, datasetNames } = buildPromptForIntent(intent, {
      question,
      selectedYear,
      selectedCountry,
      comparisonCountry,
      pageContext,
    });

    // 5. Console Logging in Development
    console.log("Detected intent:", intent);
    console.log("Selected prompt:", promptName);
    console.log("Included datasets:", datasetNames.join(", "));

    const aiResponse = await generateAIIntelligence({
      question,
      selectedYear,
      selectedCountry,
      comparisonCountry,
      pageContext,
    });

    return NextResponse.json(aiResponse);
  } catch (error: any) {
    console.error("[API /api/ai/chat Error]", error);
    return NextResponse.json(
      {
        error: "Internal server error processing AI request",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

