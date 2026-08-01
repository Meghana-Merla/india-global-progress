"use client";

import React from "react";
import { motion } from "framer-motion";
import { KPICardData } from "@/data/mock";
import { KPICard } from "./kpi-card";

import { AIInsightCardContext } from "@/components/common/ai-drawer";

export interface KPIGridProps {
  cards?: KPICardData[];
  onSelectCard?: (context: AIInsightCardContext) => void;
}

export function KPIGrid({ cards = [], onSelectCard }: KPIGridProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {cards.map((card) => (
        <KPICard key={card.id} card={card} onSelectCard={onSelectCard} />
      ))}
    </motion.div>
  );
}
