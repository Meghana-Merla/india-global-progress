import { AppShell, PageContainer } from "@/components/layouts";
import { Hero } from "@/components/common/hero";
import { OverviewSection } from "@/components/common/dashboard-preview";

export default function Home() {
  return (
    <AppShell>
      <PageContainer>
        <Hero />
        <OverviewSection />
      </PageContainer>
    </AppShell>
  );
}
