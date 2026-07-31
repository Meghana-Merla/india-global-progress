"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureItem } from "./feature-data";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn(
        "glass-card-hover p-8 flex flex-col justify-between border border-border/50 shadow-soft relative overflow-hidden group select-none min-h-[220px]",
        className
      )}
    >
      {/* Background Subtle Gradient Highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />

      {/* Top Row: Gradient Icon Container & Optional Badge */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-primary shadow-glow text-white group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {feature.badge && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/80 text-foreground border border-border/40 tracking-wide">
            {feature.badge}
          </span>
        )}
      </div>

      {/* Content: Title & Description */}
      <div>
        <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
