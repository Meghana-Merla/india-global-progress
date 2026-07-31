"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { KPICardData } from "@/data/mock";
import { cn } from "@/lib/utils";

export interface KPICardProps {
  card: KPICardData;
}

export function KPICard({ card }: KPICardProps) {
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

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
      }}
      className="glass-card-hover p-5 relative overflow-hidden flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Header: Title & Source Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
          {card.title}
        </span>
        <span className="text-[10px] font-medium text-muted-foreground/70 px-2 py-0.5 rounded-full bg-secondary/80 border border-border/50">
          {card.source}
        </span>
      </div>

      {/* Center: Rank & Sparkline */}
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {card.rank}
          </div>
          <div className="text-xs font-medium text-muted-foreground mt-0.5">
            {card.score}
          </div>
        </div>

        {/* Small Sparkline SVG Placeholder */}
        <div className="flex flex-col items-end gap-1">
          <svg width={width} height={height} className="overflow-visible opacity-80 group-hover:opacity-100 transition-opacity">
            <polyline
              fill="none"
              stroke={isUp ? "#10B981" : isDown ? "#EF4444" : "#F59E0B"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>

      {/* Bottom: Trend Badge & Arrow */}
      <div className="flex items-center justify-between pt-2 border-t border-border/30">
        <span className="text-[11px] text-muted-foreground">Recent Trend</span>
        <div
          className={cn(
            "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border shadow-2xs",
            isUp && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
            isDown && "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
            !isUp && !isDown && "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
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
