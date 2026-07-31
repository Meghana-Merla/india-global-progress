import { AppShell, PageContainer } from "@/components/layouts";
import { Hero } from "@/components/common/hero";
import { OverviewSection } from "@/components/common/dashboard-preview";
import { WhyPlatform } from "@/components/common/why-platform";

export default function Home() {
  return (
    <AppShell>
      <PageContainer>
        <Hero />
        <OverviewSection />
        <WhyPlatform />
      </PageContainer>
    </AppShell>
  );
}
