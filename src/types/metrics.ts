export interface HistoricalDataPoint {
  year: number;
  value: number;
}

export interface ProgressMetric {
  id: string;
  category: "Economy" | "Technology" | "Infrastructure" | "Sustainability" | "Education";
  name: string;
  value: number;
  unit: string;
  year: number;
  globalRank?: number;
  previousRank?: number;
  historicalData?: HistoricalDataPoint[];
}
