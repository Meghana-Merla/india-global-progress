"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { DataSourceItem } from "./source-data";
import { cn } from "@/lib/utils";

export interface SourceCardProps {
  source: DataSourceItem;
  className?: string;
}

export function SourceCard({ source, className }: SourceCardProps) {
  const badgeColorMap: Record<string, string> = {
    economy: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    health: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    governance: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    technology: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    education: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    general: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  };

  const badgeStyle = badgeColorMap[source.categoryVariant || "general"];

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "glass-card-hover p-5 sm:p-6 flex flex-col justify-between border border-border/50 shadow-soft relative overflow-hidden group rounded-2xl select-none min-h-[170px]",
        className
      )}
    >
      {/* Top Accent Gradient Border Glow on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header: Organization Avatar / Badge & Category & External Link */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/80 border border-border/40 flex items-center justify-center font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
              {source.shortName || source.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
                {source.name}
              </h3>
            </div>
          </div>

          <a
            href={source.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors flex-shrink-0"
            title={`Visit ${source.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {source.description}
        </p>
      </div>

      {/* Bottom Footer: Category Badge & Status */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
        <span
          className={cn(
            "text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide",
            badgeStyle
          )}
        >
          {source.category}
        </span>
        <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          Verified Source
        </span>
      </div>
    </motion.div>
  );
}
