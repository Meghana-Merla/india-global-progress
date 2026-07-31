"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Layers, Globe2, TrendingUp, LucideIcon } from "lucide-react";
import { StatCard } from "./stat-card";
import { StatsGrid } from "@/components/layouts";

export interface HeroStatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
  change?: string;
}

export const defaultHeroStats: HeroStatItem[] = [
  {
    value: "85+",
    label: "Global Indicators",
    icon: BarChart3,
    change: "Updated 2025",
  },
  {
    value: "10",
    label: "Categories",
    icon: Layers,
    change: "Comprehensive",
  },
  {
    value: "40+",
    label: "Countries",
    icon: Globe2,
    change: "Global Benchmarks",
  },
  {
    value: "2018–2025",
    label: "Historical Trends",
    icon: TrendingUp,
    change: "7-Year Dataset",
  },
];

export interface HeroStatsProps {
  stats?: HeroStatItem[];
  className?: string;
}

export function HeroStats({
  stats = defaultHeroStats,
  className,
}: HeroStatsProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
      className={className}
    >
      <StatsGrid columns={4}>
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            change={stat.change}
          />
        ))}
      </StatsGrid>
    </motion.div>
  );
}
