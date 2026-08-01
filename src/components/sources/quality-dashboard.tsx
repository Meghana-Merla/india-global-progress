"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Activity,
  Globe,
  Calendar,
  RefreshCw,
  ShieldCheck,
  Award,
} from "lucide-react";
import { QUALITY_DASHBOARD_METRICS, QualityMetric } from "./source-data";
import { cn } from "@/lib/utils";

export interface QualityDashboardProps {
  metrics?: QualityMetric[];
  className?: string;
}

export function QualityDashboard({
  metrics = QUALITY_DASHBOARD_METRICS,
  className,
}: QualityDashboardProps) {
  // Map icon strings to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-amber-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-purple-400" />;
      case "ShieldCheck":
      default:
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header section badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Data Quality & System Integrity Overview
          </h2>
        </div>
      </div>

      {/* 6 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="glass-card-hover p-5 rounded-2xl border border-border/60 flex flex-col justify-between shadow-xs group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-secondary/80 border border-border/40 group-hover:scale-105 transition-transform">
                  {renderIcon(metric.iconName)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  {metric.badge}
                </span>
              </div>

              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                {metric.title}
              </h3>

              <div className="text-2xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                {metric.value}
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-3 pt-2.5 border-t border-border/30 leading-normal">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
