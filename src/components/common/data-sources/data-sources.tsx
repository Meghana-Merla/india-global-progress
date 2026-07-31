"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layouts";
import { SourceCard } from "./source-card";
import { trustedSources, DataSourceItem } from "./source-data";
import { cn } from "@/lib/utils";

export interface DataSourcesProps {
  sources?: DataSourceItem[];
  className?: string;
}

export function DataSources({
  sources = trustedSources,
  className,
}: DataSourcesProps) {
  return (
    <Section id="data-sources" className={cn("relative overflow-hidden", className)}>
      {/* Section Header */}
      <SectionHeading
        badge="TRANSPARENCY & ACCURACY"
        title="Trusted Global Data Sources"
        description="Every indicator displayed on this platform is collected from globally recognized organizations to ensure transparency, credibility, and accuracy."
        align="left"
      />

      {/* Grid of 11 Source Cards */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full"
      >
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </motion.div>
    </Section>
  );
}
