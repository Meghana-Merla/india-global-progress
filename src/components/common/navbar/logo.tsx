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
      className={cn("flex items-center gap-2.5 group focus:outline-none", className)}
    >
      {/* Brand Icon Badge */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-purple-600/90 text-white shadow-sm group-hover:bg-purple-500 transition-all duration-200">
        <svg
          className="w-5 h-5 text-white"
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
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-semibold text-sm md:text-base tracking-tight leading-none text-slate-100 group-hover:text-purple-400 transition-colors">
          IndiaLens <span className="text-purple-500 font-bold">AI</span>
        </span>
        <span className="text-[10px] font-medium text-slate-400 tracking-wider leading-tight mt-0.5">
          Global Progress Platform
        </span>
      </div>
    </Link>
  );
}
