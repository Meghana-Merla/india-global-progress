"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HighlightItem,
  recentHighlightsData,
} from "./dashboard-data";
import {
  TrendingUp,
  TrendingDown,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface RecentHighlightsProps {
  highlights?: HighlightItem[];
}

export function RecentHighlights({
  highlights = recentHighlightsData,
}: RecentHighlightsProps) {
  const [filter, setFilter] = useState<"all" | "improvement" | "decline">("all");

  const filtered = highlights.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Clock className="w-4 h-4" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Recent Highlights & Index Releases
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Timeline of global index updates and ranking revisions for India
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border self-start sm:self-auto shadow-xs">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-3 py-1 text-xs font-semibold rounded-lg transition-all",
              filter === "all"
                ? "bg-primary text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Updates ({highlights.length})
          </button>
          <button
            onClick={() => setFilter("improvement")}
            className={cn(
              "px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1",
              filter === "improvement"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-muted-foreground hover:text-emerald-500"
            )}
          >
            <TrendingUp className="w-3 h-3" />
            Gains
          </button>
          <button
            onClick={() => setFilter("decline")}
            className={cn(
              "px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1",
              filter === "decline"
                ? "bg-rose-600 text-white shadow-xs"
                : "text-muted-foreground hover:text-rose-500"
            )}
          >
            <TrendingDown className="w-3 h-3" />
            Declines
          </button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 space-y-5 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-border/60">
        {filtered.map((item, idx) => {
          const isImprovement = item.type === "improvement";
          const isDecline = item.type === "decline";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-3.5 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center transition-all group-hover:scale-125 z-10",
                  isImprovement && "border-emerald-500 bg-emerald-500/20 text-emerald-500",
                  isDecline && "border-rose-500 bg-rose-500/20 text-rose-500",
                  !isImprovement && !isDecline && "border-primary bg-primary/20 text-primary"
                )}
              >
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isImprovement && "bg-emerald-500",
                    isDecline && "bg-rose-500",
                    !isImprovement && !isDecline && "bg-primary"
                  )}
                />
              </div>

              {/* Card Container */}
              <div className="glass-card-hover p-4 sm:p-5 rounded-2xl border border-border/50 transition-all space-y-3">
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground">
                      {item.publisher}
                    </span>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Shift Badge */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border",
                        isImprovement && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                        isDecline && "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
                        !isImprovement && !isDecline && "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                      )}
                    >
                      {isImprovement ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {item.changeBadge}
                    </span>

                    {/* Rank Badge */}
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-secondary text-foreground border border-border/60">
                      {item.currentRank}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
