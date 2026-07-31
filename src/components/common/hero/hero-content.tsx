"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroActions } from "./hero-actions";

export interface HeroContentProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

export function HeroContent({
  badgeText = "INDIALENS AI PLATFORM",
  title = "India in the World",
  subtitle = "AI-powered Global Intelligence Dashboard for India's International Rankings across trusted global indicators covering economy, governance, technology, healthcare, education, sustainability, safety, equality and more.",
}: HeroContentProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Badge Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>{badgeText}</span>
      </motion.div>

      {/* Main Title Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
      >
        India in the <span className="text-gradient-primary">World</span>
      </motion.h1>

      {/* Subtitle Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8 md:mb-10 font-normal"
      >
        {subtitle}
      </motion.p>

      {/* Hero CTA Actions */}
      <HeroActions />
    </div>
  );
}
