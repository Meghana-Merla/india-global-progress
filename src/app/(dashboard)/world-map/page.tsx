import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { MapPage } from "@/components/maps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive World Map | IndiaLens AI",
  description: "Visualize India's global rankings geographically across international peers",
};

export default function WorldMapRoute() {
  return (
    <AppShell>
      <PageContainer>
        <MapPage />
      </PageContainer>
    </AppShell>
  );
}
