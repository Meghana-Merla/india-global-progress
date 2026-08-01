import React from "react";
import { AppShell, PageContainer } from "@/components/layouts";
import { ContactPage } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support & Feedback | IndiaLens AI",
  description:
    "Get in touch with the IndiaLens AI team, submit feedback, report data anomalies, and connect with lead architect Meghana Merla",
};

export default function ContactRoute() {
  return (
    <AppShell>
      <PageContainer>
        <ContactPage />
      </PageContainer>
    </AppShell>
  );
}
