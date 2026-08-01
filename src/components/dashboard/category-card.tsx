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
import { CategoryData } from "@/data/mock";

import { AIInsightCardContext } from "@/components/common/ai-drawer";

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
  onSelectCard?: (context: AIInsightCardContext) => void;
}

export function CategoryCard({ category, onSelectCard }: CategoryCardProps) {
  const IconComponent = iconMap[category.iconName] || TrendingUp;

  const handleClick = () => {
    onSelectCard?.({
      title: category.name,
      type: "category",
      category: category.name,
      country: "India",
      metadata: {
        rank: category.globalRank,
        score: category.overallScore,
        indicatorCount: category.indicatorCount,
        description: category.description,
      },
    });
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
      }}
      onClick={handleClick}
      className="bg-card text-card-foreground border border-border hover:border-primary/40 p-5 rounded-xl flex flex-col justify-between group cursor-pointer transition-all duration-200 shadow-xs relative overflow-hidden"
    >
      {/* Header: Icon & Category Name */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-200">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <span className="text-[11px] text-muted-foreground font-normal">
              {category.indicatorCount} Indicators
            </span>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
          {category.globalRank}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed font-normal">
        {category.description}
      </p>

      {/* Progress & Score Bar */}
      <div className="space-y-1.5 pt-3 border-t border-border/60">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-muted-foreground">Index Score</span>
          <span className="text-foreground font-semibold">{category.overallScore} / 100</span>
        </div>

        {/* Progress Indicator Bar */}
        <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${category.progressPercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-primary"
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
