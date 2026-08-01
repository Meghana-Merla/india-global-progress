import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { TrendPage } from "@/components/trends";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historical Trends | IndiaLens AI",
  description: "Multi-year historical trends, category comparative benchmarks, AI insights, and policy timeline for India",
};

export default function TrendsRoute() {
  return (
    <AppShell>
      <PageContainer>
        <TrendPage />
      </PageContainer>
    </AppShell>
  );
}
