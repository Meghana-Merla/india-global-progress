"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, TrendingDown, Award, Crown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { TrendsPageSummary } from "@/data/mock/trends";
import { openAIDrawer } from "@/components/common/ai-drawer";

export interface TrendSummaryProps {
  summary: TrendsPageSummary;
  startYear: string;
  endYear: string;
}

export function TrendSummary({ summary, startYear, endYear }: TrendSummaryProps) {
  const cards = [
    {
      id: "improved",
      title: "Indicators Improved",
      value: summary.indicatorsImproved.toString(),
      badge: `+${summary.indicatorsImproved} Positive Trends`,
      badgeType: "positive" as const,
      icon: TrendingUp,
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: `Higher global standings recorded between ${startYear}–${endYear}`,
    },
    {
      id: "declined",
      title: "Indicators Declined",
      value: summary.indicatorsDeclined.toString(),
      badge: summary.indicatorsDeclined === 0 ? "Zero Core Regressions" : `${summary.indicatorsDeclined} Attention Needed`,
      badgeType: summary.indicatorsDeclined === 0 ? ("positive" as const) : ("negative" as const),
      icon: TrendingDown,
      iconBg: summary.indicatorsDeclined === 0 ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20",
      description: `Indicators requiring policy interventions over ${startYear}–${endYear}`,
    },
    {
      id: "avg-rank",
      title: "Average Global Rank",
      value: summary.averageGlobalRank,
      badge: `Top tier globally`,
      badgeType: "info" as const,
      icon: Award,
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      description: `Mean percentile rank across featured indicator evaluations`,
    },
    {
      id: "best-category",
      title: "Best Performing Category",
      value: summary.bestPerformingCategory.name,
      badge: `${summary.bestPerformingCategory.rank} (${summary.bestPerformingCategory.score})`,
      badgeType: "positive" as const,
      icon: Crown,
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description: `Highest rated national infrastructure domain`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            onClick={() =>
              openAIDrawer({
                page: "Trends",
                section: "Summary Metrics",
                card: card.title,
                title: card.title,
                type: "trend",
                country: "India",
                year: `${startYear}-${endYear}`,
                metadata: {
                  value: card.value,
                  badge: card.badge,
                  description: card.description,
                },
              })
            }
            className="cursor-pointer"
          >
            <GlassCard hoverEffect className="relative overflow-hidden group h-full flex flex-col justify-between p-5 border border-border/60 hover:border-primary/50 transition-all duration-300">
              {/* Top Row: Icon & Title */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {card.title}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* KPI Metric Value */}
                <div className="flex items-baseline gap-2 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {card.value}
                  </h2>
                </div>
              </div>

              {/* Bottom Row: Badge & Description */}
              <div className="pt-3 mt-2 border-t border-border/30">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      card.badgeType === "positive"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : card.badgeType === "negative"
                        ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                        : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                    }`}
                  >
                    {card.badgeType === "positive" ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : card.badgeType === "negative" ? (
                      <ArrowDownRight className="w-3 h-3" />
                    ) : null}
                    {card.badge}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 line-clamp-2">
                  {card.description}
                </p>
              </div>

              {/* Ambient Glow Gradient */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
