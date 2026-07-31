import { AppShell, PageContainer } from "@/components/layouts";
import { Hero } from "@/components/common/hero";
import { OverviewSection } from "@/components/common/dashboard-preview";
import { WhyPlatform } from "@/components/common/why-platform";
import { CategoriesPreview } from "@/components/common/categories-preview";
import { AIPreview } from "@/components/common/ai-preview";
import { DataSources } from "@/components/common/data-sources";

export default function Home() {
  return (
    <AppShell>
      <PageContainer>
        <Hero />
        <OverviewSection />
        <WhyPlatform />
        <CategoriesPreview />
        <AIPreview />
        <DataSources />
      </PageContainer>
    </AppShell>
  );
}
