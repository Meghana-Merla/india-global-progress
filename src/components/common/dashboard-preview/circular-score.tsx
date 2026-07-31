"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CircularScoreProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularScore({
  score = 71.8,
  maxScore = 100,
  size = 96,
  strokeWidth = 8,
  className,
}: CircularScoreProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max(score / maxScore, 0), 1);
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div
      className={cn("relative flex items-center justify-center select-none", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-secondary/80"
          fill="transparent"
        />

        {/* Animated Gradient Progress Arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#score-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          strokeLinecap="round"
          fill="transparent"
        />

        {/* SVG Gradient Definition */}
        <defs>
          <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Score Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl sm:text-2xl font-black text-foreground tracking-tight leading-none">
          {score.toFixed(1)}
        </span>
        <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
          / 100
        </span>
      </div>
    </div>
  );
}
