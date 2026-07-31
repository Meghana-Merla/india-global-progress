"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/layouts";
import { AICard } from "./ai-card";
import { aiCapabilities, AICapabilityItem } from "./ai-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AIPreviewProps {
  capabilities?: AICapabilityItem[];
  className?: string;
}

export function AIPreview({
  capabilities = aiCapabilities,
  className,
}: AIPreviewProps) {
  return (
    <Section id="ai-preview" className={cn("relative overflow-hidden", className)}>
      {/* Section Header */}
      <SectionHeading
        badge="INTELLIGENCE"
        title="AI-Powered Insights"
        description="Transform complex global datasets into clear, actionable insights using artificial intelligence."
        align="left"
      />

      {/* Main Grid: Left Abstract Visual + Right Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Column: Abstract AI Graphic with Floating Glass Cards & Glowing Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-xl p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-soft select-none"
        >
          {/* Background Animated Glowing Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-primary/30 via-purple-500/20 to-sky-500/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute top-8 right-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Central Rotating Abstract AI Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-primary/20 border-dashed animate-[spin_40s_linear_infinite] absolute" />
            {/* Inner Ring */}
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-purple-500/30 animate-[spin_25s_linear_infinite_reverse] absolute" />

            {/* Core Neural Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-primary shadow-glow flex flex-col items-center justify-center text-white z-10 relative transform hover:scale-105 transition-transform">
              <Bot className="w-10 h-10 sm:w-12 sm:h-12 mb-1 animate-bounce" />
              <span className="text-[10px] font-bold tracking-wider uppercase opacity-90">AI Engine</span>
            </div>
          </div>

          {/* Floating Glass Card 1: Top Left */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [-10, 6, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 left-4 sm:left-6 max-w-[210px] glass-card p-3 rounded-2xl border border-white/20 dark:border-white/10 shadow-soft text-xs z-20"
          >
            <div className="flex items-center gap-2 mb-1 text-primary font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Prompt</span>
            </div>
            <p className="text-muted-foreground text-[11px] leading-tight">
              &quot;Compare India vs UK in Innovation Index&quot;
            </p>
            <div className="mt-1.5 flex items-center gap-1 text-[10px] text-emerald-500 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              <span>Confidence: 98.4%</span>
            </div>
          </motion.div>

          {/* Floating Glass Card 2: Bottom Right */}
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: [10, -6, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 right-4 sm:right-6 max-w-[210px] glass-card p-3 rounded-2xl border border-white/20 dark:border-white/10 shadow-soft text-xs z-20"
          >
            <div className="flex items-center gap-2 mb-1 text-purple-500 font-semibold">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Live Insight</span>
            </div>
            <p className="text-foreground font-semibold text-[11px]">
              +12 Ranks in Digital Services
            </p>
            <span className="text-[10px] text-muted-foreground mt-0.5 block">
              Generated in 140ms
            </span>
          </motion.div>

          {/* Floating Glass Card 3: Top Right Pill */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-md border border-border/40 text-[11px] font-medium text-foreground z-20">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span>LLM Synthesis</span>
          </div>
        </motion.div>

        {/* Right Column: 4 Capability Cards + CTA Button */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {capabilities.map((item) => (
              <AICard key={item.id} item={item} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-6 rounded-xl font-semibold bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 mr-2" />
              Try AI Insights
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
