"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";
import { YearProvider } from "./year-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <YearProvider>{children}</YearProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

export * from "./year-provider";
