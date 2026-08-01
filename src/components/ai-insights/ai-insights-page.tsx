"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AIInsightCards } from "./ai-insight-cards";
import { AIChatInterface } from "./ai-chat-interface";
import { Sparkles, Brain, MessageSquare, FileText, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useYear } from "@/providers";

export function AIInsightsPage() {
  const searchParams = useSearchParams();
  const promptParam = searchParams.get("prompt");
  const { selectedYear, setSelectedYear, availableYears } = useYear();
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(promptParam);
  const [activeTab, setActiveTab] = useState<"chat" | "cards">("chat");

  useEffect(() => {
    if (promptParam) {
      setSelectedPrompt(promptParam);
      setActiveTab("chat");
    }
  }, [promptParam]);


  const handlePromptClick = (promptText: string) => {
    setSelectedPrompt(promptText);
    setActiveTab("chat");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Header */}
      <div className="space-y-2 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>IndiaLens AI Intelligence Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          AI <span className="text-gradient-primary">Insights</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          AI-generated intelligence for understanding India's global standing.
        </p>

        {/* Global Year Switcher Bar */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-card border border-border shadow-xs">
            <Calendar className="w-4 h-4 text-primary ml-2" />
            <span className="text-xs font-bold text-muted-foreground">Intelligence Edition:</span>
            <div className="flex items-center gap-1">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedYear === year
                      ? "bg-primary text-white shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center justify-center p-1 rounded-xl bg-card border border-border max-w-xs mx-auto shadow-xs">
        <button
          onClick={() => setActiveTab("chat")}
          className={cn(
            "flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5",
            activeTab === "chat"
              ? "bg-primary text-white shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>AI Chat</span>
        </button>
        <button
          onClick={() => setActiveTab("cards")}
          className={cn(
            "flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5",
            activeTab === "cards"
              ? "bg-primary text-white shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Reports (5)</span>
        </button>
      </div>

      {/* Main Dual Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 5 AI Report Cards */}
        <div
          className={cn(
            "lg:col-span-6 space-y-6",
            activeTab === "cards" ? "block" : "hidden lg:block"
          )}
        >
          <AIInsightCards onPromptClick={handlePromptClick} />
        </div>

        {/* Right Column: AI Chatbot Interface */}
        <div
          className={cn(
            "lg:col-span-6 space-y-6",
            activeTab === "chat" ? "block" : "hidden lg:block"
          )}
        >
          <AIChatInterface onSelectPrompt={selectedPrompt} />
        </div>
      </div>
    </div>
  );
}
