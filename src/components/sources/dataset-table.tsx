"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  RefreshCw,
  Database,
  Calendar,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { DATASET_EXPLORER_MOCK, DatasetItem } from "./source-data";
import { cn } from "@/lib/utils";
import { openAIDrawer } from "@/components/common/ai-drawer";

export interface DatasetTableProps {
  initialDatasets?: DatasetItem[];
  className?: string;
}

export function DatasetTable({
  initialDatasets = DATASET_EXPLORER_MOCK,
  className,
}: DatasetTableProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Extract unique categories & statuses for dropdown filters
  const categories = useMemo(() => {
    const set = new Set(initialDatasets.map((d) => d.category));
    return Array.from(set).sort();
  }, [initialDatasets]);

  const statuses = useMemo(() => {
    const set = new Set(initialDatasets.map((d) => d.status));
    return Array.from(set).sort();
  }, [initialDatasets]);

  // Filter datasets
  const filteredDatasets = useMemo(() => {
    return initialDatasets.filter((item) => {
      const matchesSearch =
        search.trim() === "" ||
        item.indicator.toLowerCase().includes(search.toLowerCase()) ||
        item.source.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || item.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [initialDatasets, search, categoryFilter, statusFilter]);

  const resetTableFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    setStatusFilter("All");
  };

  return (
    <div className={cn("glass-card p-6 rounded-2xl border border-border/60 shadow-lg space-y-6", className)}>
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
              <Database className="w-3.5 h-3.5" /> REPOSITORY INVENTORY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Dataset Explorer
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Searchable catalog of international indicators, sync cadence, and historical scope.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/60 text-muted-foreground">
            Showing <strong className="text-foreground">{filteredDatasets.length}</strong> of {initialDatasets.length} Datasets
          </span>
        </div>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
        {/* Search Input */}
        <div className="lg:col-span-6 relative flex items-center">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dataset, indicator name, or organization..."
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

        {/* Category Dropdown */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded-xl border border-border/60">
          <SlidersHorizontal className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-medium text-muted-foreground shrink-0">Category:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="flex-1 bg-transparent text-foreground text-xs font-semibold focus:outline-none cursor-pointer truncate"
            aria-label="Filter by Category"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status Dropdown */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded-xl border border-border/60">
          <Filter className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-medium text-muted-foreground shrink-0">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="flex-1 bg-transparent text-foreground text-xs font-semibold focus:outline-none cursor-pointer truncate"
            aria-label="Filter by Status"
          >
            <option value="All">All Statuses</option>
            {statuses.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dataset Table */}
      <div className="overflow-x-auto rounded-xl border border-border/60 bg-background/40">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30 text-muted-foreground font-bold tracking-wider uppercase text-[10px]">
              <th className="py-3.5 px-4">Indicator</th>
              <th className="py-3.5 px-4">Source</th>
              <th className="py-3.5 px-4">Frequency</th>
              <th className="py-3.5 px-4">Coverage</th>
              <th className="py-3.5 px-4">Years Available</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 font-medium">
            {filteredDatasets.length > 0 ? (
              filteredDatasets.map((ds) => (
                <tr
                  key={ds.id}
                  onClick={() =>
                    openAIDrawer({
                      page: "Sources",
                      section: "Dataset Table",
                      card: ds.indicator,
                      title: ds.indicator,
                      type: "dataset",
                      category: ds.category,
                      country: "Global / India",
                      year: "2025",
                      metadata: {
                        source: ds.source,
                        frequency: ds.frequency,
                        coverage: ds.coverage,
                        status: ds.status,
                      },
                    })
                  }
                  className="hover:bg-primary/5 transition-colors group cursor-pointer"
                >
                  {/* Indicator Column */}
                  <td className="py-3.5 px-4 text-foreground font-semibold group-hover:text-primary transition-colors">
                    {ds.indicator}
                  </td>

                  {/* Source Column */}
                  <td className="py-3.5 px-4 text-muted-foreground font-medium">
                    {ds.source}
                  </td>

                  {/* Frequency Column */}
                  <td className="py-3.5 px-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 text-primary/70 shrink-0" />
                      {ds.frequency}
                    </span>
                  </td>

                  {/* Coverage Column */}
                  <td className="py-3.5 px-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Globe className="w-3 h-3 text-emerald-500/70 shrink-0" />
                      {ds.coverage}
                    </span>
                  </td>

                  {/* Years Available Column */}
                  <td className="py-3.5 px-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-500/70 shrink-0" />
                      {ds.years}
                    </span>
                  </td>

                  {/* Category Column */}
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-[11px] font-semibold">
                      {ds.category}
                    </span>
                  </td>

                  {/* Status Column */}
                  <td className="py-3.5 px-4 text-right">
                    {ds.status === "Active Sync" && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active Sync
                      </span>
                    )}
                    {ds.status === "Verified" && (
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        Verified
                      </span>
                    )}
                    {ds.status === "Scheduled" && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[11px] font-bold inline-flex items-center gap-1.5 ml-auto">
                        <Clock className="w-3 h-3 text-amber-400" />
                        Scheduled
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-muted-foreground">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Database className="w-8 h-8 text-muted-foreground/40 mb-1" />
                    <p className="font-semibold text-sm">No datasets matching filter parameters</p>
                    <button
                      onClick={resetTableFilters}
                      className="mt-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20 text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      Clear Filters
                    </button>
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
