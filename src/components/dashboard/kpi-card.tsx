"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { KPICardData } from "@/data/mock";
import { cn } from "@/lib/utils";

import { AIInsightCardContext } from "@/components/common/ai-drawer";

export interface KPICardProps {
  card: KPICardData;
  onSelectCard?: (context: AIInsightCardContext) => void;
}

export function KPICard({ card, onSelectCard }: KPICardProps) {
  const isUp = card.direction === "up";
  const isDown = card.direction === "down";

  // Generate simple SVG path for sparkline points
  const minVal = Math.min(...card.sparkline);
  const maxVal = Math.max(...card.sparkline);
  const range = maxVal - minVal || 1;
  const width = 80;
  const height = 24;

  const points = card.sparkline
    .map((val, idx) => {
      const x = (idx / (card.sparkline.length - 1)) * width;
      // Invert Y axis for SVG (higher rank number is lower on chart or vice versa)
      const normalized = (val - minVal) / range;
      const y = isDown ? 4 + normalized * (height - 8) : height - 4 - normalized * (height - 8);
      return `${x},${y}`;
    })
    .join(" ");

  const handleClick = () => {
    onSelectCard?.({
      title: card.title,
      type: "kpi",
      indicator: card.title,
      country: "India",
      metadata: {
        rank: card.rank,
        score: card.score,
        trend: card.trend,
        source: card.source,
      },
    });
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
      }}
      onClick={handleClick}
      className="bg-card text-card-foreground border border-border hover:border-primary/40 p-5 rounded-xl flex flex-col justify-between group cursor-pointer transition-all duration-200 shadow-xs"
    >
      {/* Top Header: Title & Source Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-medium text-muted-foreground">
          {card.title}
        </span>
        <span className="text-[10px] font-medium text-muted-foreground px-2 py-0.5 rounded-md bg-secondary border border-border">
          {card.source}
        </span>
      </div>

      {/* Center: Rank & Sparkline */}
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <div>
          <div className="text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {card.rank}
          </div>
          <div className="text-xs font-normal text-muted-foreground mt-0.5">
            {card.score}
          </div>
        </div>

        {/* Small Sparkline SVG Placeholder */}
        <div className="flex flex-col items-end gap-1">
          <svg width={width} height={height} className="overflow-visible opacity-80 group-hover:opacity-100 transition-opacity">
            <polyline
              fill="none"
              stroke={isUp ? "#22C55E" : isDown ? "#EF4444" : "#7C3AED"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>

      {/* Bottom: Trend Badge & Arrow */}
      <div className="flex items-center justify-between pt-3 border-t border-border/60">
        <span className="text-[11px] text-muted-foreground font-normal">Recent Trend</span>
        <div
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md border",
            isUp && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
            isDown && "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
            !isUp && !isDown && "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20"
          )}
        >
          {isUp && <TrendingUp className="w-3.5 h-3.5" />}
          {isDown && <TrendingDown className="w-3.5 h-3.5" />}
          {!isUp && !isDown && <Minus className="w-3.5 h-3.5" />}
          <span>{card.trend}</span>
        </div>
      </div>
    </motion.div>
  );
}
