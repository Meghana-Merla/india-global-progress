"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layouts";
import { CategoryCard } from "./category-card";
import { categoriesData, CategoryItem } from "./category-data";
import { cn } from "@/lib/utils";

export interface CategoriesPreviewProps {
  categories?: CategoryItem[];
  className?: string;
}

export function CategoriesPreview({
  categories = categoriesData,
  className,
}: CategoriesPreviewProps) {
  return (
    <Section id="categories-preview" className={cn("relative overflow-hidden", className)}>
      {/* Section Header */}
      <SectionHeading
        badge="CATEGORIES"
        title="Explore Global Indicators"
        description="Browse India's performance across major global categories."
        align="left"
      />

      {/* Grid of 10 Category Cards */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
    </Section>
  );
}
