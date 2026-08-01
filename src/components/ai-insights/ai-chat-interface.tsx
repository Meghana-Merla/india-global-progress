"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useYear } from "@/providers";
import { ChatMessage, getAIData, fetchAIResponseByYear } from "@/data/mock";
import { Send, Sparkles, Bot, User, RefreshCw, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AIChatInterfaceProps {
  onSelectPrompt?: string | null;
}

export function AIChatInterface({ onSelectPrompt }: AIChatInterfaceProps) {
  const { selectedYear } = useYear();
  const yearData = getAIData(selectedYear);
  const suggestedPrompts = yearData.suggestedPrompts;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        `### **Welcome to IndiaLens AI Intelligence Hub (${selectedYear})** 🤖\n\nI am your AI assistant trained on India's international rankings, global indicators, and multi-year trajectory data.\n\nAsk me any question or pick a suggested topic below to get started!`,
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const processedPromptRef = useRef<string | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (onSelectPrompt && processedPromptRef.current !== onSelectPrompt) {
      processedPromptRef.current = onSelectPrompt;
      handleSendMessage(onSelectPrompt);
    }
  }, [onSelectPrompt]);


  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: text,
          selectedYear,
          selectedCountry: "India",
          pageContext: "ai-insights",
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const resData = await res.json();
      
      let formattedContent = resData.summary || "No summary response generated.";

      if (resData.strengths && resData.strengths.length > 0) {
        formattedContent += "\n\n### **Key Strengths**\n" + resData.strengths.map((s: string) => `- ${s}`).join("\n");
      }
      if (resData.weaknesses && resData.weaknesses.length > 0) {
        formattedContent += "\n\n### **Areas of Concern**\n" + resData.weaknesses.map((w: string) => `- ${w}`).join("\n");
      }
      if (resData.recommendations && resData.recommendations.length > 0) {
        formattedContent += "\n\n### **Strategic Recommendations**\n" + resData.recommendations.map((r: string) => `- ${r}`).join("\n");
      }
      if (resData.keyTakeaways && resData.keyTakeaways.length > 0) {
        formattedContent += "\n\n> " + resData.keyTakeaways.join(" • ");
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: formattedContent,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sources: ["Gemini 2.5 Flash Engine", `WIPO GII ${selectedYear}`, "World Bank LPI"],
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("AI chat API error:", err);
      // Fallback response with friendly retry message
      const fallbackText = await fetchAIResponseByYear(selectedYear, text);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: `${fallbackText}\n\n*(Notice: Live Gemini API connection encountered a transient rate limit/timeout. Displaying offline intelligence cached for ${selectedYear}.)*`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sources: [`IndiaLens Offline Intelligence (${selectedYear})`],
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content:
          `Chat history reset (${selectedYear} Edition). How can I assist you with India's global rankings intelligence?`,
        timestamp: "Just now",
      },
    ]);
  };

  // Simple Markdown renderer helper
  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-base font-extrabold text-foreground mt-2 mb-1">
            {line.replace("### ", "").replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        const text = line.substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-xs sm:text-sm my-0.5 leading-relaxed">
            {formatBold(text)}
          </li>
        );
      }
      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
        const text = line.substring(3);
        return (
          <li key={idx} className="ml-4 list-decimal text-xs sm:text-sm my-0.5 leading-relaxed">
            {formatBold(text)}
          </li>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote key={idx} className="pl-3 border-l-2 border-primary text-xs italic text-muted-foreground my-2">
            {formatBold(line.replace("> ", ""))}
          </blockquote>
        );
      }
      if (!line.trim()) return <div key={idx} className="h-1.5" />;
      return (
        <p key={idx} className="text-xs sm:text-sm leading-relaxed my-1">
          {formatBold(line)}
        </p>
      );
    });
  };

  // Helper to convert **text** to bold tags
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

  return (
    <div className="glass-card rounded-2xl border border-border/60 flex flex-col h-[640px] sm:h-[680px] overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-4 border-b border-border/40 flex items-center justify-between bg-card/80 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-primary text-white flex items-center justify-center shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-foreground flex items-center gap-1.5">
              <span>IndiaLens Assistant</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </h3>
            <span className="text-[10px] text-muted-foreground font-medium">
              Powered by IndiaLens AI Core Engine ({selectedYear} Edition)
            </span>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          title="Clear Chat History"
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Suggested Prompts Pills */}
      <div className="p-3 border-b border-border/30 bg-muted/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[11px] font-bold text-muted-foreground shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-primary" /> Prompts:
        </span>
        {suggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            disabled={isTyping}
            className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-white transition-all shrink-0 active:scale-95 disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Feed */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === "user";

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-3 max-w-[90%]", isUser ? "ml-auto flex-row-reverse" : "")}
            >
              {/* Avatar Icon */}
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5",
                  isUser
                    ? "bg-primary text-white"
                    : "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                )}
              >
                {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              {/* Message Content Bubble */}
              <div className="space-y-1">
                <div
                  className={cn(
                    "p-3.5 rounded-2xl border text-xs sm:text-sm shadow-xs",
                    isUser
                      ? "bg-primary text-white border-primary/20 rounded-tr-xs"
                      : "bg-card text-foreground border-border/60 rounded-tl-xs"
                  )}
                >
                  {isUser ? msg.content : renderMarkdown(msg.content)}
                </div>

                {/* Timestamp & Citation Sources */}
                <div
                  className={cn(
                    "text-[10px] text-muted-foreground flex items-center gap-2",
                    isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <span>{msg.timestamp}</span>
                  {msg.sources && (
                    <>
                      <span>•</span>
                      <span className="text-primary font-medium">
                        Sources: {msg.sources.join(", ")}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Animated Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 max-w-[80%]"
          >
            <div className="w-7 h-7 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="p-3 rounded-2xl bg-card border border-border/60 text-xs flex items-center gap-1.5 shadow-xs">
              <span className="text-muted-foreground font-semibold text-xs">
                IndiaLens AI is thinking
              </span>
              <div className="flex items-center gap-1 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Box Form */}
      <div className="p-3 border-t border-border/40 bg-card/95 backdrop-blur-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask IndiaLens AI anything about global rankings..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
            className="flex-1 pl-4 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs transition-all disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-2.5 rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-all active:scale-95 disabled:opacity-50 shrink-0"
            aria-label="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
