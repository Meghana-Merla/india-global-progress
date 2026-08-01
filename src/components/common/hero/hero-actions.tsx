"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitCompare } from "lucide-react";

export interface HeroActionsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function HeroActions({
  primaryText = "Explore Dashboard",
  primaryHref = "/dashboard",
  secondaryText = "Compare Countries",
  secondaryHref = "/compare",
}: HeroActionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto"
    >
      {/* Primary CTA */}
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium shadow-xs transition-all duration-200 gap-2 group select-none"
      >
        <span>{primaryText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>

      {/* Secondary CTA */}
      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-lg border border-border bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-all duration-200 gap-2 group select-none"
      >
        <GitCompare className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-200" />
        <span>{secondaryText}</span>
      </Link>
    </motion.div>
  );
}
