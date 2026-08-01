"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryDetailData, getCategoryIcon } from "./category-data";
import { CategoryAISummary } from "./category-ai-summary";
import {
  X,
  Award,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Database,
  Brain,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryDetailDrawerProps {
  category: CategoryDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryDetailDrawer({
  category,
  isOpen,
  onClose,
}: CategoryDetailDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!category) return null;

  const IconComponent = getCategoryIcon(category.iconName);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md transition-opacity"
          />

          {/* Right Slide-Over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-card border-l border-border/60 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-border/40 flex items-center justify-between gap-4 bg-background/50 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br p-0.5 shadow-sm shrink-0",
                    category.gradient
                  )}
                >
                  <div className="w-full h-full rounded-[10px] bg-background/90 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-foreground tracking-tight">
                    {category.title}
                  </h2>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mt-0.5">
                    <Database className="w-3.5 h-3.5 text-primary" />
                    {category.indicatorCount} Verified Indicators
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all cursor-pointer"
                title="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Overview & Key KPI Banner */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-background/60 border border-border/50">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Overall Category Score
                  </span>
                  <div className="text-3xl font-extrabold text-foreground tracking-tight">
                    {category.overallScore}{" "}
                    <span className="text-xs text-muted-foreground font-semibold">/ 100</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Global Position Rank
                  </span>
                  <div className="text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-1.5">
                    <Award className="w-6 h-6 text-amber-400 shrink-0" />
                    #{category.globalRank}{" "}
                    <span className="text-xs text-muted-foreground font-semibold">/ {category.totalCountries}</span>
                  </div>
                </div>
              </div>

              {/* Category Overview Paragraph */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Category Overview
                </h3>
                <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                  {category.overview}
                </p>
              </div>

              {/* Strengths & Areas for Improvement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Core Strengths ({category.strengths.length})
                  </h4>
                  <ul className="space-y-2 text-xs font-medium text-foreground/90">
                    {category.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas for Improvement */}
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Priority Improvement Areas
                  </h4>
                  <ul className="space-y-2 text-xs font-medium text-foreground/90">
                    {category.areasForImprovement.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top Indicators Preview */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>Top Category Indicators ({category.indicators.length})</span>
                </h3>

                <div className="space-y-2">
                  {category.indicators.map((ind) => (
                    <div
                      key={ind.id}
                      className="p-3 rounded-xl bg-background/50 border border-border/40 flex items-center justify-between text-xs gap-3"
                    >
                      <div className="flex-1 truncate">
                        <span className="font-semibold text-foreground block truncate">
                          {ind.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {ind.source} ({ind.year})
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 text-right">
                        <div>
                          <span className="font-bold text-foreground block">
                            #{ind.rank}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            Score: {ind.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Countries Ahead & Behind */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-primary" /> Benchmark Peer Countries
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Countries Ahead */}
                  <div className="p-3.5 rounded-xl bg-card border border-border/50 space-y-2">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">
                      Countries Directly Ahead
                    </span>
                    <div className="space-y-1.5">
                      {category.countriesAhead.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-xs font-semibold">
                          <span className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.name}</span>
                          </span>
                          <span className="text-muted-foreground">#{c.rank} ({c.score})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Countries Behind */}
                  <div className="p-3.5 rounded-xl bg-card border border-border/50 space-y-2">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">
                      Countries Directly Behind
                    </span>
                    <div className="space-y-1.5">
                      {category.countriesBehind.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-xs font-semibold">
                          <span className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.name}</span>
                          </span>
                          <span className="text-muted-foreground">#{c.rank} ({c.score})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Summary Box */}
              <CategoryAISummary category={category} />
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-border/40 bg-background/50 backdrop-blur-sm flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-muted-foreground font-medium">
                IndiaLens AI Data Transparency Verified
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
              >
                Close Drawer
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
