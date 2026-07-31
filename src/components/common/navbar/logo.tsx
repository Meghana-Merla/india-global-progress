import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("flex items-center gap-3 group focus:outline-none", className)}
    >
      {/* Brand Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-primary shadow-glow group-hover:scale-105 transition-transform duration-300">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        {/* Animated Pulse Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-300 border-2 border-background rounded-full animate-pulse" />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-bold text-base md:text-lg tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
          IndiaLens <span className="text-primary font-extrabold">AI</span>
        </span>
        <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground tracking-wider uppercase leading-tight mt-1">
          Global Intelligence Dashboard
        </span>
      </div>
    </Link>
  );
}
