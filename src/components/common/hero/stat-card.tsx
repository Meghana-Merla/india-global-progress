"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  change?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  icon: Icon,
  change,
  className,
}: StatCardProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "glass-card-hover p-6 flex flex-col justify-between relative overflow-hidden group select-none",
        className
      )}
    >
      {/* Top Row: Icon & Badge */}
      <div className="flex items-center justify-between mb-4">
        {Icon && (
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {change && (
          <span className="text-[11px] font-semibold text-muted-foreground bg-secondary/80 px-2.5 py-0.5 rounded-full border border-border/40">
            {change}
          </span>
        )}
      </div>

      {/* Main Metric Value */}
      <div>
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {value}
        </div>
        <div className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
          {label}
        </div>
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/15 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
