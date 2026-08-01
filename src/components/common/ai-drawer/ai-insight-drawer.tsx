"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Bot,
  Copy,
  Check,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  Database,
  Brain,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AIInsightCardContext {
  page?: string;
  section?: string;
  card?: string;
  title: string;
  type?: string;
  category?: string;
  indicator?: string;
  country?: string;
  year?: string;
  score?: string | number;
  rank?: string;
  trend?: string;
  metadata?: Record<string, any>;
}

export function openAIDrawer(context: AIInsightCardContext) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-ai-drawer", { detail: context }));
  }
}

export function GlobalAIDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<AIInsightCardContext | null>(null);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<AIInsightCardContext>) => {
      if (e.detail) {
        setContext(e.detail);
        setIsOpen(true);
      }
    };

    window.addEventListener("open-ai-drawer" as any, handleOpen);
    return () => {
      window.removeEventListener("open-ai-drawer" as any, handleOpen);
    };
  }, []);

  return (
    <AIInsightDrawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      context={context}
    />
  );
}

export interface AIInsightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  context: AIInsightCardContext | null;
}

export function AIInsightDrawer({
  isOpen,
  onClose,
  context,
}: AIInsightDrawerProps) {
  const [content, setContent] = useState<string>("");
  const [sources, setSources] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // In-memory cache to avoid duplicate API calls
  const cacheRef = useRef<Map<string, { content: string; sources: string[] }>>(
    new Map()
  );

  const selectedYear = context?.year || "2025";
  const title = context?.title || "AI Insight Analysis";

  // Formulate dynamic question for Gemini API based on card context
  const buildQuestion = (customPrompt?: string) => {
    if (customPrompt) return customPrompt;
    if (!context) return "Provide a sovereign AI intelligence analysis.";

    const { title, type, category, indicator, metadata } = context;

    if (title.toLowerCase().includes("overall global score")) {
      return `Provide a comprehensive sovereign AI intelligence analysis for India's Overall Global Score of 71.8 across 85+ global indicators. Explain: 1. What Overall Score represents 2. How it is calculated 3. Why India's score is 71.8 4. Which categories contributed most (Technology, Economy, Digital Gov) 5. Which categories reduced the score (Governance, Press Freedom, Health) 6. Expected future movement over 2026-2030.`;
    }

    if (title.toLowerCase().includes("global rank snapshot")) {
      return `Provide an AI intelligence analysis for India's Global Rank Snapshot (Rank #38 out of 193 economies). Explain: 1. Why India is ranked at #38 2. Peer countries ranked above and below India 3. Biggest positive ranking drivers 4. Expected rank trajectory over the next few years towards top 20.`;
    }

    if (type === "category" || category) {
      const catName = category || title;
      return `Provide a detailed AI intelligence breakdown for India's performance in category '${catName}'. Explain: 1. What this category measures 2. India's current score & global rank 3. Major indicators included in this domain 4. Why India ranks at this position 5. Key strengths 6. Bottlenecks & areas for improvement 7. Comparison with top performing benchmark countries 8. Historical trend (2020-2025) 9. Future outlook and strategic recommendations.`;
    }

    if (type === "kpi" || indicator) {
      const indName = indicator || title;
      const rank = metadata?.rank ? ` (Rank: ${metadata.rank})` : "";
      const score = metadata?.score ? ` (Score: ${metadata.score})` : "";
      return `Provide a detailed AI intelligence briefing for the indicator '${indName}'${rank}${score}. Explain performance drivers, global peer comparison, historical trajectory, and strategic recommendations for India.`;
    }

    return `Provide an AI intelligence briefing for '${title}' (${type || "metric"} milestone). Value/Details: ${metadata?.value || metadata?.description || title}. Explain historical context, underlying factors, global comparative benchmarks, and key policy takeaways for India.`;
  };

  const fetchInsight = async (forceRefresh = false, customQuestion?: string) => {
    if (!context) return;

    const cacheKey = `${context.title}_${selectedYear}_${customQuestion || "default"}`;

    if (!forceRefresh && cacheRef.current.has(cacheKey)) {
      const cached = cacheRef.current.get(cacheKey)!;
      setContent(cached.content);
      setSources(cached.sources);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    const question = buildQuestion(customQuestion);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          selectedYear,
          selectedCountry: context.country || "India",
          pageContext: "dashboard",
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const resData = await res.json();
      const text =
        resData.content ||
        resData.response ||
        resData.summary ||
        "No response generated.";
      const srcList = resData.sources || [
        "Gemini AI Core Engine",
        "IndiaLens Intelligence Graph",
      ];

      cacheRef.current.set(cacheKey, { content: text, sources: srcList });
      setContent(text);
      setSources(srcList);
    } catch (err: any) {
      console.error("AI Insight Drawer API error:", err);
      setError(
        "Failed to connect to AI engine. Please retry or check your network connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && context) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("ai-drawer-open");
      fetchInsight();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.body.classList.remove("ai-drawer-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("ai-drawer-open");
    }
  }, [isOpen, context]);

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    fetchInsight(true, suggestionText);
  };

  // Dynamic prompt recommendations based on context
  const getSuggestions = () => {
    const t = context?.title.toLowerCase() || "";
    if (t.includes("score") || t.includes("rank")) {
      return [
        "What are the top 3 policy changes to reach Top 20?",
        "Compare India's trajectory with China and USA",
        "Which pillars had the highest rank volatility?",
      ];
    }
    if (t.includes("tech") || t.includes("innovation") || t.includes("ai")) {
      return [
        "What is India's 2030 forecast for AI readiness?",
        "Explain the impact of DPI (UPI & Aadhaar) on this ranking",
        "How can private R&D spending be doubled?",
      ];
    }
    return [
      "What is India's 2030 vision for this indicator?",
      "Compare India's performance with G20 peer averages",
      "Explain key historical inflection points between 2020 and 2025",
    ];
  };

  // Simple markdown formatting renderer
  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-base font-extrabold text-foreground mt-4 mb-1.5 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-4 rounded bg-primary inline-block" />
            {line.replace("### ", "").replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li
            key={idx}
            className="ml-4 list-disc text-xs sm:text-sm my-1 text-muted-foreground leading-relaxed"
          >
            {formatBold(line.substring(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li
            key={idx}
            className="ml-4 list-decimal text-xs sm:text-sm my-1 text-muted-foreground leading-relaxed"
          >
            {formatBold(line.replace(/^\d+\.\s/, ""))}
          </li>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={idx}
            className="pl-3 border-l-2 border-primary text-xs italic text-primary/90 my-2 bg-primary/5 p-2 rounded-r-xl"
          >
            {formatBold(line.replace("> ", ""))}
          </blockquote>
        );
      }
      if (!line.trim()) return <div key={idx} className="h-2" />;
      return (
        <p key={idx} className="text-xs sm:text-sm text-foreground/90 leading-relaxed my-1">
          {formatBold(line)}
        </p>
      );
    });
  };

  const formatBold = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  if (!isOpen || !context) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Full-Screen Drawer Experience (Hides Global Navbar, Full UI Focus) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 w-full h-full bg-background backdrop-blur-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto"
        >
          {/* Header Container */}
          <div className="space-y-4 max-w-5xl mx-auto w-full">
            {/* Sticky Header with Back Button */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60 sticky top-0 bg-background/95 backdrop-blur-md z-10">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-secondary text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary/80 border border-border cursor-pointer transition-colors"
                aria-label="Back to page"
              >
                <ArrowLeft className="w-4 h-4 text-primary" />
                <span>Back</span>
              </button>

              <div className="text-center px-3 flex-1 max-w-lg mx-auto">
                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-primary flex items-center justify-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-primary" />
                  <span>AI Insights</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h2 className="text-xs sm:text-sm md:text-base font-bold text-foreground tracking-tight line-clamp-1">
                  {title}
                </h2>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => fetchInsight(true)}
                  disabled={isLoading}
                  title="Regenerate AI Analysis"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all disabled:opacity-50 cursor-pointer border border-border"
                >
                  <RefreshCw
                    className={cn("w-4 h-4", isLoading && "animate-spin text-primary")}
                  />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border"
                  aria-label="Close AI Drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Context Badge Sub-header */}
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-card border border-border/60 text-xs font-semibold">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold uppercase text-[10px]">
                {context.type || "Metric Analysis"}
              </span>
              <span className="text-muted-foreground">• Year: {selectedYear}</span>
              {context.category && (
                <span className="text-muted-foreground">• Pillar: {context.category}</span>
              )}
              {context.metadata?.rank && (
                <span className="text-emerald-400 font-bold ml-auto">
                  Rank: {context.metadata.rank}
                </span>
              )}
            </div>

            {/* AI Output Content Area */}
            <div className="space-y-4 pt-1">
              {isLoading ? (
                /* Loading Animated Skeleton */
                <div className="space-y-4 p-4 rounded-2xl bg-card/60 border border-border/40">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>Gemini AI Engine is synthesizing intelligence...</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-4 bg-muted/80 rounded-lg w-3/4 animate-pulse" />
                    <div className="h-3 bg-muted/60 rounded-lg w-full animate-pulse" />
                    <div className="h-3 bg-muted/60 rounded-lg w-5/6 animate-pulse" />
                    <div className="h-3 bg-muted/60 rounded-lg w-4/5 animate-pulse" />
                    <div className="h-12 bg-muted/40 rounded-xl w-full animate-pulse mt-4" />
                  </div>
                </div>
              ) : error ? (
                /* Error Fallback */
                <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive text-xs space-y-2">
                  <p className="font-bold">{error}</p>
                  <button
                    onClick={() => fetchInsight(true)}
                    className="px-3 py-1.5 rounded-xl bg-destructive text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Retry Analysis
                  </button>
                </div>
              ) : (
                /* AI Markdown Rendered Content */
                <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60 space-y-2 shadow-xs max-h-[50vh] overflow-y-auto pr-2 scrollbar-none">
                  {renderMarkdown(content)}
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions & Related Prompts */}
          <div className="pt-5 mt-5 border-t border-border/40 space-y-4">
            {/* Suggested Related Insights */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary" /> Suggested Related Insights:
              </span>
              <div className="flex flex-col gap-1.5">
                {getSuggestions().map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isLoading}
                    className="text-left px-3 py-1.5 rounded-xl bg-card border border-border/60 text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-all flex items-center justify-between group disabled:opacity-50 cursor-pointer"
                  >
                    <span className="truncate">{suggestion}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between pt-1">
              {sources.length > 0 && (
                <div className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate max-w-[220px]">
                    Sources: {sources.slice(0, 2).join(", ")}
                  </span>
                </div>
              )}

              <button
                onClick={handleCopy}
                disabled={!content || isLoading}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-secondary text-foreground hover:bg-primary/10 hover:text-primary border border-border text-xs font-bold transition-all ml-auto disabled:opacity-50 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Briefing</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
