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
} from "lucide-react";

export interface CategoryItem {
  id: string;
  title: string;
  count: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  href?: string;
}

export const categoriesData: CategoryItem[] = [
  {
    id: "economy",
    title: "Economy",
    count: "16 Indicators",
    description: "GDP growth, inflation, export value, ease of business & global trade metrics.",
    icon: TrendingUp,
    gradient: "from-blue-600 to-blue-700",
    href: "/categories/economy",
  },
  {
    id: "society",
    title: "Society",
    count: "12 Indicators",
    description: "Human development, demographic trends, quality of life & social wellbeing.",
    icon: Users,
    gradient: "from-yellow-500 to-amber-600",
    href: "/categories/society",
  },
  {
    id: "governance",
    title: "Governance",
    count: "10 Indicators",
    description: "Rule of law, corruption perception, government effectiveness & democracy index.",
    icon: Building2,
    gradient: "from-indigo-600 to-purple-700",
    href: "/categories/governance",
  },
  {
    id: "technology",
    title: "Technology & Innovation",
    count: "15 Indicators",
    description: "R&D expenditure, AI readiness, patent applications & global innovation rank.",
    icon: Cpu,
    gradient: "from-purple-600 to-violet-600",
    href: "/categories/technology",
  },
  {
    id: "education",
    title: "Education",
    count: "11 Indicators",
    description: "Literacy rates, higher ed rankings, STEM graduates & educational index.",
    icon: GraduationCap,
    gradient: "from-cyan-600 to-teal-600",
    href: "/categories/education",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    count: "13 Indicators",
    description: "Life expectancy, healthcare coverage, WHO global health security index.",
    icon: Activity,
    gradient: "from-green-600 to-emerald-600",
    href: "/categories/healthcare",
  },
  {
    id: "environment",
    title: "Environment",
    count: "14 Indicators",
    description: "Renewable energy adoption, climate risk, air quality & forest coverage.",
    icon: Leaf,
    gradient: "from-emerald-600 to-teal-700",
    href: "/categories/environment",
  },
  {
    id: "safety",
    title: "Safety",
    count: "9 Indicators",
    description: "Global peace index, cyber security readiness & public safety scores.",
    icon: ShieldCheck,
    gradient: "from-red-600 to-rose-700",
    href: "/categories/safety",
  },
  {
    id: "equality",
    title: "Equality",
    count: "8 Indicators",
    description: "Gender parity index, income distribution & global social mobility rank.",
    icon: Scale,
    gradient: "from-purple-600 to-indigo-600",
    href: "/categories/equality",
  },
  {
    id: "digital-government",
    title: "Digital Government",
    count: "10 Indicators",
    description: "UN E-Government index, digital public infrastructure & online services.",
    icon: Laptop,
    gradient: "from-indigo-600 to-blue-600",
    href: "/categories/digital-government",
  },
];
