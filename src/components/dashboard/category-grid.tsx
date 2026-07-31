"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CategoryData } from "@/data/mock";
import { CategoryCard } from "./category-card";
import { Search, Layers, SlidersHorizontal } from "lucide-react";

export interface CategoryGridProps {
  categories?: CategoryData[];
  title?: string;
  subtitle?: string;
}

export function CategoryGrid({
  categories = [],
  title = "Category Overview",
  subtitle = "Performance across 10 strategic global evaluation pillars",
}: CategoryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rank" | "score" | "name">("score");

  const filteredCategories = categories
    .filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "score") return b.overallScore - a.overallScore;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rank") {
        const rankA = parseInt(a.globalRank.replace(/\D/g, "")) || 999;
        const rankB = parseInt(b.globalRank.replace(/\D/g, "")) || 999;
        return rankA - rankB;
      }
      return 0;
    });

  return (
    <div className="space-y-6">
      {/* Section Title & Search / Sort controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Layers className="w-4 h-4" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filter and Search controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search bar */}
          <div className="relative flex-1 sm:flex-initial min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-medium rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow-xs"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <SlidersHorizontal className="w-3.5 h-3.5 absolute left-3 text-muted-foreground pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "rank" | "score" | "name")}
              className="pl-8 pr-7 py-1.5 text-xs font-semibold rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer appearance-none shadow-xs"
            >
              <option value="score">Highest Score</option>
              <option value="rank">Best Rank</option>
              <option value="name">Alphabetical</option>
            </select>
            <div className="absolute right-2.5 pointer-events-none text-[10px] text-muted-foreground">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      {filteredCategories.length > 0 ? (
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5"
        >
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      ) : (
        <div className="p-8 text-center rounded-2xl bg-card border border-border text-muted-foreground text-sm">
          No categories match your search criteria.
        </div>
      )}
    </div>
  );
}
