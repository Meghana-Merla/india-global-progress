"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { TimelineEvent, timelineEventsMock, TrendYear } from "@/data/mock/trends";
import { Calendar, Sparkles, Milestone, ArrowUpRight, Award, Activity } from "lucide-react";

export interface TrendTimelineProps {
  events?: TimelineEvent[];
  startYear?: TrendYear;
  endYear?: TrendYear;
}

export function TrendTimeline({
  events = timelineEventsMock,
  startYear = "2020",
  endYear = "2025",
}: TrendTimelineProps) {
  // Filter events within selected range
  const filteredEvents = events.filter((ev) => {
    const y = parseInt(ev.year);
    return y >= parseInt(startYear) && y <= parseInt(endYear);
  });

  return (
    <GlassCard hoverEffect className="p-6 border border-border/60 space-y-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <Milestone className="w-3.5 h-3.5" /> CHRONOLOGICAL TIMELINE ({startYear}–{endYear})
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
            Policy Milestones & Strategic Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Key national initiatives, reforms, and technological inflection points shaping India's global standings
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-background/60 px-3 py-1.5 rounded-xl border border-border/60 self-start md:self-auto">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{filteredEvents.length} Historical Benchmark Milestones</span>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative pt-4 pb-2">
        {/* Central / Left Vertical Spine Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-indigo-500 to-emerald-500 rounded-full opacity-60 -translate-x-1/2" />

        <div className="space-y-8 sm:space-y-12">
          {filteredEvents.map((event, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start"
              >
                {/* Center Node Badge on Spine */}
                <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-primary shadow-glow flex items-center justify-center text-primary font-black text-xs">
                    {event.year.slice(2)}
                  </div>
                </div>

                {/* Timeline Card Container */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven
                      ? "sm:mr-auto sm:pr-6 sm:text-right"
                      : "sm:ml-auto sm:pl-6 sm:text-left"
                  }`}
                >
                  <div className="p-5 rounded-2xl bg-card/90 border border-border/70 shadow-xl space-y-3 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                    {/* Top Badges */}
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <span className="px-3 py-1 rounded-xl bg-gradient-primary text-white text-xs font-black shadow-xs">
                        {event.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        {event.impactBadge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs font-bold text-primary/90 mt-0.5">
                        {event.subtitle}
                      </p>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>

                    {/* Bottom Stats & Category Pills */}
                    <div
                      className={`pt-3 border-t border-border/40 flex flex-wrap items-center gap-2 text-[11px] font-medium text-muted-foreground ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-semibold">
                        {event.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        {event.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
