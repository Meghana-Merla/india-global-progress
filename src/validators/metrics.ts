import { z } from "zod";

export const metricFilterSchema = z.object({
  category: z.enum(["Economy", "Technology", "Infrastructure", "Sustainability", "Education"]).optional(),
  year: z.number().int().optional(),
  search: z.string().optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(20),
});

export type MetricFilterInput = z.infer<typeof metricFilterSchema>;
