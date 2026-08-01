import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { SourcesPage } from "@/components/sources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Sources & Provenance | IndiaLens AI",
  description:
    "Explore trusted international data sources, datasets catalog, normalization methodology, and data quality metrics for IndiaLens AI",
};

export default function SourcesRoute() {
  return (
    <AppShell>
      <PageContainer>
        <SourcesPage />
      </PageContainer>
    </AppShell>
  );
}
