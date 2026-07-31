import { QueryClient } from "@tanstack/react-query";

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
};
