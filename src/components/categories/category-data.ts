import {
  TrendingUp,
  Users,
  Building2,
  Cpu,
  GraduationCap,
  Activity,
  Leaf,
  ShieldCheck,
  Scale,
  Laptop,
  LucideIcon,
  HelpCircle,
} from "lucide-react";
import { CATEGORIES_MOCK_DATA, CategoryDetailData } from "@/data/mock/categories";

export * from "@/data/mock/categories";

// Icon resolution helper for Lucide icons
export const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Building2,
  Cpu,
  GraduationCap,
  Activity,
  Leaf,
  ShieldCheck,
  Scale,
  Laptop,
};

export function getCategoryIcon(iconName: string): LucideIcon {
  return CATEGORY_ICON_MAP[iconName] || HelpCircle;
}

export function getCategoryById(id: string): CategoryDetailData | undefined {
  return CATEGORIES_MOCK_DATA.find((c) => c.id === id);
}
