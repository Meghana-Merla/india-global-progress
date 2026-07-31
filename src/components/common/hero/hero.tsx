"use client";

import React from "react";
import { HeroContent } from "./hero-content";
import { HeroStats } from "./hero-stats";
import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative py-12 md:py-20 lg:py-24 overflow-hidden w-full", className)}>
      {/* Background Ambient Radial Glow (No Images) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[800px] md:h-[450px] bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        {/* Top Hero Content & CTAs */}
        <HeroContent />

        {/* 4 Animated Stats Cards */}
        <HeroStats />
      </div>
    </section>
  );
}
