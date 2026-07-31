"use client";

import React, { createContext, useContext, useState } from "react";
import { Year } from "@/data/mock";

interface YearContextType {
  selectedYear: Year;
  setSelectedYear: (year: Year) => void;
  availableYears: Year[];
}

const YearContext = createContext<YearContextType | undefined>(undefined);

export function YearProvider({ children }: { children: React.ReactNode }) {
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const availableYears: Year[] = ["2022", "2023", "2024", "2025"];

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear, availableYears }}>
      {children}
    </YearContext.Provider>
  );
}

export function useYear() {
  const context = useContext(YearContext);
  if (!context) {
    throw new Error("useYear must be used within a YearProvider");
  }
  return context;
}
