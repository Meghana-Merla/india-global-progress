"use client";

import React from "react";
import { motion } from "framer-motion";
import { AICapabilityItem } from "./ai-data";
import { cn } from "@/lib/utils";

export interface AICardProps {
  item: AICapabilityItem;
  className?: string;
}

export function AICard({ item, className }: AICardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn(
        "glass-card-hover p-5 flex items-start gap-4 border border-border/50 shadow-soft relative overflow-hidden group select-none rounded-2xl",
        className
      )}
    >
      {/* Background Subtle Gradient Highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />

      {/* Icon Container */}
      <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-primary shadow-glow text-white group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          {item.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
