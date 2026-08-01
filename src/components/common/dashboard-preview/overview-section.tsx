"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Cpu,
  AlertCircle,
  Zap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layouts";
import { useState } from "react";
import { SnapshotCard, PreviewCardItem } from "./snapshot-card";
import { AIInsightDrawer, AIInsightCardContext } from "@/components/common/ai-drawer";

export const overviewCardsData: PreviewCardItem[] = [
  {
    id: "score",
    title: "Overall Global Score",
    type: "score",
    value: 71.8,
    badge: "Score 71.8",
    badgeVariant: "success",
    icon: Award,
    description: "Aggregated score across 85+ global indicators",
  },
  {
    id: "rank",
    title: "Global Rank Snapshot",
    type: "rank",
    value: "38",
    subValue: "/ 193",
    badge: "Top 20%",
    badgeVariant: "accent",
    icon: Trophy,
    trend: "+4 positions vs 2020",
  },
  {
    id: "strongest",
    title: "Strongest Category",
    type: "metric",
    value: "Technology & Innovation",
    badge: "Rank #12",
    badgeVariant: "success",
    icon: Cpu,
    description: "Driven by digital public infrastructure & fintech",
  },
  {
    id: "needs-improvement",
    title: "Needs Improvement",
    type: "metric",
    value: "Governance",
    badge: "Focus Area",
    badgeVariant: "warning",
    icon: AlertCircle,
    description: "Regulatory frameworks & ease of doing business",
  },
  {
    id: "most-improved",
    title: "Most Improved",
    type: "metric",
    value: "Digital Government",
    badge: "+18 Ranks",
    badgeVariant: "success",
    icon: Zap,
    description: "Highest rank jump recorded between 2021 & 2025",
  },
  {
    id: "latest-update",
    title: "Latest Update",
    type: "info",
    value: "Live Sync",
    badge: "Verified Data",
    badgeVariant: "default",
    icon: RefreshCw,
    description: "Data refreshed from trusted global sources.",
  },
];

export function OverviewSection() {
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [activeContext, setActiveContext] = useState<AIInsightCardContext | null>(null);

  const handleCardClick = (card: PreviewCardItem) => {
    setActiveContext({
      title: card.title,
      type: card.type,
      category: card.title.includes("Category") || card.title.includes("Improved") ? String(card.value) : undefined,
      country: "India",
      year: "2025",
      metadata: {
        value: card.value,
        badge: card.badge,
        description: card.description,
        trend: card.trend,
      },
    });
    setAiDrawerOpen(true);
  };

  return (
    <Section id="dashboard-preview">
      {/* Top Section Heading with View Full Dashboard Action */}
      <SectionHeading
        badge="KPI PREVIEW"
        title="India at a Glance"
        description="A quick overview of India's current global performance. Click any card to open AI Briefing."
        action={
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary border border-border/60 text-sm font-semibold transition-all duration-300 group"
          >
            <span>View Full Dashboard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        }
      />

      {/* Grid of Six Preview Cards */}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {overviewCardsData.map((card) => (
          <SnapshotCard
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </motion.div>

      {/* Reusable AI Insight Drawer */}
      <AIInsightDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
        context={activeContext}
      />
    </Section>
  );
}
