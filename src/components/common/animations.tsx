"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 20,
  className = "",
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: distance }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = "",
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
        exit: {
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
