"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CategoryItem } from "./category-data";
import { cn } from "@/lib/utils";

import { openAIDrawer } from "@/components/common/ai-drawer";

export interface CategoryCardProps {
  category: CategoryItem;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = category.icon;

  const handleClick = () => {
    openAIDrawer({
      page: "Home",
      section: "Explore Categories",
      card: category.title,
      title: category.title,
      type: "category",
      category: category.title,
      country: "India",
      year: "2025",
      metadata: {
        description: category.description,
        count: category.count,
      },
    });
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={handleClick}
      className={cn(
        "glass-card-hover p-6 flex flex-col justify-between border border-border/50 shadow-soft relative overflow-hidden group select-none cursor-pointer rounded-2xl min-h-[230px]",
        className
      )}
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300 pointer-events-none" />

      {/* Top Header: Gradient Icon & Indicator Count */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div
            className={cn(
              "flex items-center justify-center w-11 h-11 rounded-xl shadow-glow text-white group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br",
              category.gradient || "from-primary to-primary/80"
            )}
          >
            <Icon className="w-5 h-5" />
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/40 group-hover:text-foreground transition-colors">
            {category.count}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-foreground tracking-tight mb-1.5 group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {category.description}
        </p>
      </div>

      {/* Bottom Footer: Explore Arrow Link */}
      <div className="mt-5 pt-3 border-t border-border/30 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
        <span>Explore</span>
        <div className="w-6 h-6 rounded-full bg-secondary/60 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
