import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { MethodologyPage } from "@/components/methodology";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranking Methodology & Data Governance | IndiaLens AI",
  description:
    "Explore the data collection, normalization, percentile ranking methodology, and AI processing pipeline for IndiaLens AI",
};

export default function MethodologyRoute() {
  return (
    <AppShell>
      <PageContainer>
        <MethodologyPage />
      </PageContainer>
    </AppShell>
  );
}
