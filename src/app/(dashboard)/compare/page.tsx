import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { ComparePage } from "@/components/compare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Country Comparison | IndiaLens AI",
  description: "Cross-country comparative analysis and global rankings benchmark for India",
};

export default function CompareRoute() {
  return (
    <AppShell>
      <PageContainer>
        <ComparePage />
      </PageContainer>
    </AppShell>
  );
}
