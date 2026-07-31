"use client";

import React from "react";
import { DashboardHeader } from "./dashboard-header";
import { KPIGrid } from "./kpi-grid";
import { CategoryGrid } from "./category-grid";
import { RecentHighlights } from "./recent-highlights";
import { useYear } from "@/providers";
import { getDashboardData } from "@/data/mock";
import { Brain, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function DashboardPage() {
  const { selectedYear } = useYear();
  const data = getDashboardData(selectedYear);

  const handleRefresh = () => {
    console.log(`Refreshing IndiaLens AI dashboard data for ${selectedYear}...`);
  };

  const handleExport = () => {
    console.log(`Exporting IndiaLens AI report for ${selectedYear}...`);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* 1. Header Section */}
      <DashboardHeader
        onRefresh={handleRefresh}
        onExport={handleExport}
      />

      {/* 2. Key Performance Indicators Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            Key Strategic Indicators ({selectedYear})
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            Updated Real-time via Global APIs
          </span>
        </div>
        <KPIGrid cards={data.kpis} />
      </section>

      {/* AI Intelligence Spotlight Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/15 via-indigo-500/10 to-purple-500/15 border border-primary/30 p-6 sm:p-8 shadow-soft">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
              <Brain className="w-3.5 h-3.5" />
              <span>{data.aiSummary.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {data.aiSummary.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.aiSummary.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/ai-insights"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all shadow-xs"
            >
              <span>View Full AI Report</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Category Overview Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Category Performance Overview ({selectedYear})
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            10 Main Strategic Domains
          </span>
        </div>
        <CategoryGrid categories={data.categories} />
      </section>

      {/* 4. Recent Highlights Timeline */}
      <section className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            Recent Index Releases & News ({selectedYear})
          </h2>
        </div>
        <RecentHighlights highlights={data.highlights} />
      </section>
    </div>
  );
}
