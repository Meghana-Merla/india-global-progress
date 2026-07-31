"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Scale,
  Landmark,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { CategoryData } from "./dashboard-data";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Scale,
  Landmark,
};

export interface CategoryCardProps {
  category: CategoryData;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.iconName] || TrendingUp;

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
      }}
      className="glass-card-hover p-5 flex flex-col justify-between group cursor-pointer border border-border/50 relative overflow-hidden"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

      {/* Header: Icon & Category Name */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <span className="text-[11px] text-muted-foreground font-medium">
              {category.indicatorCount} Indicators
            </span>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-secondary text-foreground border border-border/60">
          {category.globalRank}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
        {category.description}
      </p>

      {/* Progress & Score Bar */}
      <div className="space-y-1.5 pt-2 border-t border-border/30">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-muted-foreground">Overall Index Score</span>
          <span className="text-foreground font-bold">{category.overallScore} / 100</span>
        </div>

        {/* Progress Indicator Bar */}
        <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${category.progressPercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-primary"
          />
        </div>
      </div>

      {/* Explore Link Arrow */}
      <div className="mt-3 flex items-center justify-end text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity gap-1">
        <span>Explore Category</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </motion.div>
  );
}
