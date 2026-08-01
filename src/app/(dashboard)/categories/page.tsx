import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { CategoriesPage } from "@/components/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Categories | IndiaLens AI",
  description:
    "Explore India's performance across every major international development category using interactive analytics and AI-powered insights.",
};

export default function CategoriesRoute() {
  return (
    <AppShell>
      <PageContainer>
        <CategoriesPage />
      </PageContainer>
    </AppShell>
  );
}
