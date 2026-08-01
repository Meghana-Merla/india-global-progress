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
        className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-7 rounded-full bg-gradient-primary text-white font-semibold shadow-glow hover:scale-[1.02] hover:shadow-lg transition-all duration-300 gap-2 group select-none"
      >
        <span>{primaryText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>

      {/* Secondary CTA */}
      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-7 rounded-full border border-border/80 bg-background/60 backdrop-blur-md text-foreground font-semibold hover:bg-secondary hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 gap-2 group select-none"
      >
        <GitCompare className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-200" />
        <span>{secondaryText}</span>
      </Link>
    </motion.div>
  );
}
