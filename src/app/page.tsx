import { AppShell, PageContainer } from "@/components/layouts";
import { Hero } from "@/components/common/hero";

export default function Home() {
  return (
    <AppShell>
      <PageContainer>
        <Hero />
      </PageContainer>
    </AppShell>
  );
}
