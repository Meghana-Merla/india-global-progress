import { NextResponse } from "next/server";
import { generateAIIntelligence, AIChatRequest } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AIChatRequest;

    if (!body || !body.question || typeof body.question !== "string") {
      return NextResponse.json(
        { error: "Question field is required and must be a string." },
        { status: 400 }
      );
    }

    const aiResponse = await generateAIIntelligence({
      question: body.question.trim(),
      selectedYear: body.selectedYear || "2025",
      selectedCountry: body.selectedCountry || "India",
      comparisonCountry: body.comparisonCountry || "USA",
      pageContext: body.pageContext || "ai-insights",
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
