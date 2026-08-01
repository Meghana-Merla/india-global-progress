import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { ReportsPage } from "@/components/reports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports Center | IndiaLens AI",
  description: "Generate, preview and export professional intelligence reports for India's global rankings",
};

export default function ReportsRoute() {
  return (
    <AppShell>
      <PageContainer>
        <ReportsPage />
      </PageContainer>
    </AppShell>
  );
}
