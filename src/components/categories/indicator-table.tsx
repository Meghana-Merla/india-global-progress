"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Minus,
  Database,
  ArrowUpDown,
  CheckCircle2,
} from "lucide-react";
import { CategoryIndicator } from "./category-data";
import { cn } from "@/lib/utils";

export interface IndicatorTableProps {
  indicators: CategoryIndicator[];
  categoryTitle?: string;
  className?: string;
  highlightedIndicatorId?: string | null;
}

export function IndicatorTable({
  indicators,
  categoryTitle = "Category",
  className,
  highlightedIndicatorId,
}: IndicatorTableProps) {
  const [search, setSearch] = useState("");
  const [trendFilter, setTrendFilter] = useState("all");
  const [sortField, setSortField] = useState<"rank" | "score" | "name">("score");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredIndicators = useMemo(() => {
    return indicators
      .filter((ind) => {
        const matchesSearch =
          search.trim() === "" ||
          ind.name.toLowerCase().includes(search.toLowerCase()) ||
          ind.source.toLowerCase().includes(search.toLowerCase());

        const matchesTrend =
          trendFilter === "all" || ind.trend === trendFilter;

        return matchesSearch && matchesTrend;
      })
      .sort((a, b) => {
        let valA: any = a[sortField];
        let valB: any = b[sortField];

        if (typeof valA === "string") {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }

        if (sortOrder === "asc") {
          return valA > valB ? 1 : -1;
        } else {
          return valA < valB ? 1 : -1;
        }
      });
  }, [indicators, search, trendFilter, sortField, sortOrder]);

  const toggleSort = (field: "rank" | "score" | "name") => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder(field === "rank" ? "asc" : "desc");
    }
  };

  return (
    <div id="indicator-explorer-table" className={cn("glass-card p-6 rounded-2xl border border-border/60 shadow-lg space-y-6", className)}>
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
              <Database className="w-3.5 h-3.5" /> INDICATOR EXPLORER
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {categoryTitle} Indicators Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Detailed international metrics, source attributions, global ranks, and trend movements.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/60 text-muted-foreground">
            Showing <strong className="text-foreground">{filteredIndicators.length}</strong> of {indicators.length} Indicators
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
        {/* Search */}
        <div className="lg:col-span-8 relative flex items-center">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search indicator name or source organization..."
            className="w-full bg-background/80 text-foreground placeholder:text-muted-foreground/60 text-xs font-medium py-2.5 pl-10 pr-8 rounded-xl border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Trend Filter */}
        <div className="lg:col-span-4 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded-xl border border-border/60">
          <Filter className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-medium text-muted-foreground shrink-0">Movement:</span>
          <select
            value={trendFilter}
            onChange={(e) => setTrendFilter(e.target.value)}
            className="flex-1 bg-transparent text-foreground text-xs font-semibold focus:outline-none cursor-pointer truncate"
            aria-label="Filter Trend Movement"
          >
            <option value="all">All Movements</option>
            <option value="up">Improving (Upward)</option>
            <option value="down">Declining (Downward)</option>
            <option value="neutral">Stable / Neutral</option>
          </select>
        </div>
      </div>

      {/* Indicator Table */}
      <div className="overflow-x-auto rounded-xl border border-border/60 bg-background/40">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30 text-muted-foreground font-bold tracking-wider uppercase text-[10px]">
              <th
                onClick={() => toggleSort("name")}
                className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Indicator Name</span>
                  <ArrowUpDown className="w-3 h-3 text-muted-foreground/70" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("rank")}
                className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Global Rank</span>
                  <ArrowUpDown className="w-3 h-3 text-muted-foreground/70" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("score")}
                className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Score (0-100)</span>
                  <ArrowUpDown className="w-3 h-3 text-muted-foreground/70" />
                </div>
              </th>
              <th className="py-3.5 px-4">Source Organization</th>
              <th className="py-3.5 px-4">Edition Year</th>
              <th className="py-3.5 px-4 text-right">Trend / Momentum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 font-medium">
            {filteredIndicators.length > 0 ? (
              filteredIndicators.map((ind) => {
                const isHighlighted = highlightedIndicatorId === ind.id;
                return (
                  <tr
                    key={ind.id}
                    id={`indicator-row-${ind.id}`}
                    className={cn(
                      "transition-all duration-300 group",
                      isHighlighted
                        ? "bg-primary/20 border-y-2 border-primary/80 shadow-md ring-2 ring-primary/40 font-bold"
                        : "hover:bg-primary/5 font-medium"
                    )}
                  >
                    {/* Indicator Name */}
                    <td className="py-3.5 px-4 text-foreground font-semibold group-hover:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <span>{ind.name}</span>
                        {isHighlighted && (
                          <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full bg-primary text-primary-foreground shadow-xs animate-pulse">
                            Selected
                          </span>
                        )}
                      </div>
                    </td>

                  {/* Rank */}
                  <td className="py-3.5 px-4 font-extrabold text-foreground">
                    #{ind.rank}{" "}
                    <span className="text-[10px] text-muted-foreground font-normal">
                      / {ind.totalCountries}
                    </span>
                  </td>

                  {/* Score */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-secondary/80 rounded-full h-2 overflow-hidden border border-border/40">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${ind.score}%` }}
                        />
                      </div>
                      <span className="font-bold text-foreground">{ind.score}</span>
                    </div>
                  </td>

                  {/* Source */}
                  <td className="py-3.5 px-4 text-muted-foreground font-medium">
                    {ind.source}
                  </td>

                  {/* Year */}
                  <td className="py-3.5 px-4 text-muted-foreground">
                    {ind.year}
                  </td>

                  {/* Trend */}
                  <td className="py-3.5 px-4 text-right">
                    {ind.trend === "up" && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {ind.change}
                      </span>
                    )}
                    {ind.trend === "down" && (
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <TrendingDown className="w-3.5 h-3.5" />
                        {ind.change}
                      </span>
                    )}
                    {ind.trend === "neutral" && (
                      <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <Minus className="w-3.5 h-3.5" />
                        {ind.change}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })
            ) : (
              <tr>
                <td colSpan={6} className="py-12 text-center text-muted-foreground">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Database className="w-8 h-8 text-muted-foreground/40 mb-1" />
                    <p className="font-semibold text-sm">No indicators match search term &quot;{search}&quot;</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
