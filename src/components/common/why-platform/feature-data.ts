import { Database, Globe, Sparkles, TrendingUp, LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export const whyPlatformFeatures: FeatureItem[] = [
  {
    id: "unified-data",
    title: "Unified Global Data",
    description:
      "Access trusted indicators from organizations such as the World Bank, IMF, UN, WHO, UNESCO, OECD, WEF and more in one place.",
    icon: Database,
    badge: "85+ Data Sources",
  },
  {
    id: "compare-countries",
    title: "Compare Countries",
    description:
      "Compare India with any country across multiple indicators and discover strengths and weaknesses instantly.",
    icon: Globe,
    badge: "40+ Economies",
  },
  {
    id: "ai-insights",
    title: "AI Powered Insights",
    description:
      "Generate intelligent summaries, explanations, trend analysis and recommendations using AI.",
    icon: Sparkles,
    badge: "AI Analytics",
  },
  {
    id: "historical-trends",
    title: "Historical Trends",
    description:
      "Track how India's global rankings have changed over time with interactive visualizations.",
    icon: TrendingUp,
    badge: "2018–2025 Data",
  },
];
