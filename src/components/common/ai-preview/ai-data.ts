import { FileText, GitCompare, TrendingUp, Compass, LucideIcon } from "lucide-react";

export interface AICapabilityItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export const aiCapabilities: AICapabilityItem[] = [
  {
    id: "smart-summaries",
    title: "Smart Summaries",
    description: "Generate concise summaries of India's performance across global reports.",
    icon: FileText,
    badge: "Auto Generated",
  },
  {
    id: "country-comparison",
    title: "Country Comparison",
    description: "Explain differences between India and any selected country in depth.",
    icon: GitCompare,
    badge: "40+ Economies",
  },
  {
    id: "trend-analysis",
    title: "Trend Analysis",
    description: "Identify historical improvements and declines over multi-year trajectories.",
    icon: TrendingUp,
    badge: "Predictive",
  },
  {
    id: "policy-recommendations",
    title: "Policy Recommendations",
    description: "Suggest focus areas based on global ranking trends and benchmark gaps.",
    icon: Compass,
    badge: "Actionable",
  },
];
