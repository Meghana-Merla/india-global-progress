"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  AlertTriangle,
  Send,
  CheckCircle2,
  Sparkles,
  User,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function ContactFormContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeParam === "bug") {
      setCategory("bug");
    } else if (typeParam === "anomaly") {
      setCategory("anomaly");
    } else if (typeParam === "feedback") {
      setCategory("feedback");
    }
  }, [typeParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Contact & <span className="text-gradient-primary">Support</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Have feedback, question, or found a data anomaly? Reach out directly or submit your query below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Creator & Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Creator Profile Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center text-xl font-black shadow-glow">
                MM
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground">Meghana Merla</h3>
                <p className="text-xs text-primary font-semibold">Creator & Lead Architect</p>
                <p className="text-[11px] text-muted-foreground">IndiaLens AI Intelligence Platform</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:meghana.merla@gmail.com"
                className="p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground">Email</div>
                    <div className="text-xs font-semibold text-foreground">meghana.merla@gmail.com</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/durga-naga-meghana-merla-9338b7320/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground">LinkedIn</div>
                    <div className="text-xs font-semibold text-foreground">Meghana Merla</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/Meghana-Merla/india-global-progress"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground">GitHub Repo</div>
                    <div className="text-xs font-semibold text-foreground">india-global-progress</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Report Data Anomaly Banner */}
          <div className="glass-card p-6 rounded-3xl border border-amber-500/30 bg-amber-500/5 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400">
              <ShieldAlert className="w-5 h-5" />
              <h4 className="font-bold text-sm text-foreground">Found a Data Anomaly?</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If you notice any mismatch between IndiaLens AI indicators and multilateral source briefs (World Bank, IMF, etc.), select "Bug Report" or "Data Anomaly" in the form to submit immediate feedback.
            </p>
          </div>
        </div>

        {/* Right Column: Send Feedback Form */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>Send Feedback or Report Issue</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground pt-1">
              Submit your inquiry or bug report. We appreciate community feedback to keep sovereign indicator data accurate.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold space-y-2 text-center animate-pulse">
              <CheckCircle2 className="w-8 h-8 mx-auto" />
              <h3 className="text-base font-bold text-foreground">Feedback Received!</h3>
              <p className="text-xs text-muted-foreground">
                Thank you for your message. We will review your inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Category / Inquiry Type</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer"
                >
                  <option value="general">General Inquiry</option>
                  <option value="bug">Bug Report</option>
                  <option value="anomaly">Data Anomaly</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="partnership">Research & Partnership</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your question, feedback, or data anomaly details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-primary text-white font-bold text-xs sm:text-sm shadow-glow hover:opacity-95 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Feedback</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading contact page...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
