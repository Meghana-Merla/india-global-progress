import {
  LucideIcon,
  Home,
  LayoutDashboard,
  Layers,
  GitCompare,
  Globe,
  TrendingUp,
  Sparkles,
  FileText,
  Database,
  Info,
  Mail,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
  disabled?: boolean;
}

export const navigationItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Categories", href: "/categories", icon: Layers },
  { title: "Compare", href: "/compare", icon: GitCompare },
  { title: "World Map", href: "/world-map", icon: Globe },
  { title: "Trends", href: "/trends", icon: TrendingUp },
  { title: "AI Insights", href: "/ai-insights", icon: Sparkles, badge: "AI" },
  { title: "Reports", href: "/reports", icon: FileText },
  { title: "Sources", href: "/sources", icon: Database },
  { title: "About", href: "/about", icon: Info },
  { title: "Contact", href: "/contact", icon: Mail },
];
