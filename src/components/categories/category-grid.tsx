"use client";

import React from "react";
import { motion } from "framer-motion";
import { CategoryCard } from "./category-card";
import { CategoryDetailData } from "./category-data";
import { SearchX, Layers } from "lucide-react";

export interface CategoryGridProps {
  categories: CategoryDetailData[];
  selectedCategoryId?: string;
  onSelectCategory: (category: CategoryDetailData) => void;
  onResetFilters?: () => void;
  className?: string;
}

export function CategoryGrid({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onResetFilters,
  className,
}: CategoryGridProps) {
  if (categories.length === 0) {
    return (
      <div className="glass-card p-12 text-center rounded-2xl border border-border/60 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground mb-1">
          <SearchX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-foreground">
          No categories match the filter parameters
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
          We couldn&apos;t find any development categories matching your active search or filter selection.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-2 px-4 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
    >
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          category={cat}
          isSelected={selectedCategoryId === cat.id}
          onClick={() => onSelectCategory(cat)}
        />
      ))}
    </motion.div>
  );
}
