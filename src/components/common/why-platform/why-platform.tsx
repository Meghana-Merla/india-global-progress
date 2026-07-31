"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layouts";
import { FeatureCard } from "./feature-card";
import { whyPlatformFeatures, FeatureItem } from "./feature-data";
import { cn } from "@/lib/utils";

export interface WhyPlatformProps {
  features?: FeatureItem[];
  className?: string;
}

export function WhyPlatform({
  features = whyPlatformFeatures,
  className,
}: WhyPlatformProps) {
  return (
    <Section id="why-platform" className={cn("relative overflow-hidden", className)}>
      {/* Section Header */}
      <SectionHeading
        badge="THE PURPOSE"
        title="Why India Global Progress?"
        description="Global rankings are scattered across hundreds of reports published by trusted international organizations. This platform brings them together into one interactive experience to help everyone understand India's position in the world."
        align="left"
      />

      {/* Grid of 4 Feature Cards */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </motion.div>
    </Section>
  );
}
