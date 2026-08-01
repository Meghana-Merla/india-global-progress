import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { AboutPage } from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IndiaLens AI | Sovereign Global Intelligence",
  description:
    "Learn about IndiaLens AI, its mission, technology stack, Gemini AI capabilities, and sovereign data intelligence framework",
};

export default function AboutRoute() {
  return (
    <AppShell>
      <PageContainer>
        <AboutPage />
      </PageContainer>
    </AppShell>
  );
}
