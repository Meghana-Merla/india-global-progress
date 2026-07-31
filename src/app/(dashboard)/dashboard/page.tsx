import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { DashboardPage } from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | IndiaLens AI",
  description: "Global Intelligence Dashboard for India's International Rankings & Indicators",
};

export default function DashboardRoute() {
  return (
    <AppShell>
      <PageContainer>
        <DashboardPage />
      </PageContainer>
    </AppShell>
  );
}
