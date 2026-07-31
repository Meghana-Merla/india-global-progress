"use client";

import React, { useState } from "react";
import { Download, RefreshCw, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export interface DashboardHeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
}

export function DashboardHeader({
  selectedYear,
  onYearChange,
  onRefresh,
  onExport,
}: DashboardHeaderProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const years = ["2025", "2024", "2023", "2022", "2021"];

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    if (onRefresh) onRefresh();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const handleExportClick = () => {
    if (onExport) onExport();
    setExportMessage("Exporting dashboard report...");
    setTimeout(() => {
      setExportMessage(null);
    }, 2500);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/40">
      {/* Title & Subtitle */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> LIVE INTELLIGENCE
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          IndiaLens AI <span className="text-gradient-primary">Dashboard</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Global Intelligence Dashboard for India's International Rankings & Indicators
        </p>
      </div>

      {/* Control Bar Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Year Selector */}
        <div className="relative flex items-center">
          <Calendar className="w-4 h-4 absolute left-3 text-muted-foreground pointer-events-none" />
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="pl-9 pr-8 py-2 text-sm font-semibold rounded-xl bg-card border border-border text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer shadow-sm appearance-none"
            aria-label="Select Year"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year} Edition
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none text-xs text-muted-foreground">
            ▼
          </div>
        </div>

        {/* Refresh Button */}
        <button
          onClick={handleRefreshClick}
          disabled={isRefreshing}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow-sm active:scale-95 disabled:opacity-70"
          title="Refresh Data"
          aria-label="Refresh Data"
        >
          <RefreshCw
            className={`w-4 h-4 text-primary ${isRefreshing ? "animate-spin" : ""}`}
          />
          <span className="hidden sm:inline">Refresh</span>
        </button>

        {/* Export Button */}
        <button
          onClick={handleExportClick}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all active:scale-95"
          title="Export Report"
          aria-label="Export Report"
        >
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Export Toast Notification */}
      {exportMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-2xl border border-white/20 flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-primary animate-bounce" />
          <span>{exportMessage}</span>
        </motion.div>
      )}
    </div>
  );
}
