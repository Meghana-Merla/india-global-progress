"use client";

import React from "react";
import { motion } from "framer-motion";
import { CategoryDetailData, getCategoryIcon } from "./category-data";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  Database,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  category: CategoryDetailData;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function CategoryCard({
  category,
  isSelected,
  onClick,
  className,
}: CategoryCardProps) {
  const IconComponent = getCategoryIcon(category.iconName);

  // Circular Progress Calculation
  const radius = 22;
  const strokeWidth = 4.5;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (category.overallScore / 100) * circumference;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      onClick={onClick}
      className={cn(
        "glass-card-hover p-6 rounded-2xl border flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-md select-none transition-all duration-300",
        isSelected
          ? "border-primary ring-2 ring-primary/30 bg-primary/5"
          : "border-border/60 hover:border-primary/40",
        className
      )}
    >
      {/* Top Accent Line on Hover */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          category.gradient
        )}
      />

      <div>
        {/* Top Header: Icon & Circular Score Ring */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Icon Badge */}
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br p-0.5 shadow-sm group-hover:scale-105 transition-transform shrink-0",
                category.gradient
              )}
            >
              <div className="w-full h-full rounded-[10px] bg-background/90 backdrop-blur-sm flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
                {category.title}
              </h3>
              <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1 mt-0.5">
                <Database className="w-3 h-3 text-primary/80" />
                {category.indicatorCount} Indicators
              </span>
            </div>
          </div>

          {/* SVG Circular Progress Ring for Score */}
          <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
            <svg className="w-14 h-14 -rotate-90 transform">
              {/* Background Track */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                className="text-border/40"
                strokeWidth={strokeWidth}
                stroke="currentColor"
                fill="transparent"
              />
              {/* Animated Progress Arc */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                stroke={category.accentColor || "#3B82F6"}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xs font-extrabold text-foreground leading-none">
                {Math.round(category.overallScore)}
              </span>
              <span className="text-[9px] font-bold text-muted-foreground/80 leading-none mt-0.5">
                /100
              </span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {category.shortDescription}
        </p>

        {/* Rank & Trend Badges Row */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-background/50 border border-border/40 mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 block">
              Global Rank
            </span>
            <span className="text-sm font-extrabold text-foreground mt-0.5 inline-flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              #{category.globalRank} <span className="text-[10px] text-muted-foreground font-semibold">/ {category.totalCountries}</span>
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 block">
              Trend Movement
            </span>
            <div className="mt-0.5">
              {category.trendBadge.type === "up" && (
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-extrabold inline-flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {category.trendBadge.text}
                </span>
              )}
              {category.trendBadge.type === "down" && (
                <span className="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[11px] font-extrabold inline-flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {category.trendBadge.text}
                </span>
              )}
              {category.trendBadge.type === "neutral" && (
                <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50 text-[11px] font-extrabold inline-flex items-center gap-1">
                  <Minus className="w-3 h-3" />
                  {category.trendBadge.text}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Explore CTA */}
      <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary-foreground transition-colors">
        <span>Explore Category Deep-Dive</span>
        <div className="w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
