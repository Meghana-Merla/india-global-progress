import React, { Suspense } from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { AIInsightsPage } from "@/components/ai-insights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Insights | IndiaLens AI",
  description: "AI-generated intelligence, executive summaries, and interactive assistant for India's global rankings",
};

export default function AIInsightsRoute() {
  return (
    <AppShell>
      <PageContainer>
        <Suspense fallback={<div className="p-8 text-center text-muted-foreground font-semibold">Loading AI Insights...</div>}>
          <AIInsightsPage />
        </Suspense>
      </PageContainer>
    </AppShell>
  );
}

