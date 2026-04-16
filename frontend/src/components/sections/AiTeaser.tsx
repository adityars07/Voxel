"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { AI_TEASER } from "@/lib/copy";
import { Sparkles, Bot, ArrowRight } from "lucide-react";

export function AiTeaser() {
  const [promptIdx, setPromptIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % AI_TEASER.PROMPTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-zinc-900 border-y border-indigo-500/20 relative overflow-hidden transition-colors duration-300">
      {/* Background subtle radial glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06), transparent 60%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <FadeUp>
          <Badge variant="accent" className="mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {AI_TEASER.BADGE}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
            {AI_TEASER.HEADING}
          </h2>
          <div className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium mb-6">
            {AI_TEASER.SUBHEADING}
          </div>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-16">
            {AI_TEASER.BODY}
          </p>
        </FadeUp>

        <FadeUp delay={0.2} className="w-full max-w-3xl mx-auto mb-16">
          <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3">
            <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 items-center justify-center">
              <Bot className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            </div>
            
            <div className="flex-1 w-full relative h-[48px] sm:h-auto overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={promptIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-zinc-600 dark:text-zinc-300 font-mono left-0 absolute sm:relative w-full text-left truncate"
                >
                  {AI_TEASER.PROMPTS[promptIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            <button disabled className="shrink-0 w-full sm:w-auto px-4 py-2 bg-indigo-50 dark:bg-indigo-500/50 text-indigo-300 dark:text-white/50 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-default transition-none">
              Generate <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Example prompt pills underneath */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-mono text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-400 cursor-pointer transition-colors">
              Particle fog
            </span>
            <span className="px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-mono text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-400 cursor-pointer transition-colors">
              Glass distortion
            </span>
            <span className="px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-mono text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-400 cursor-pointer transition-colors">
              Animated gradient mesh
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="flex flex-col items-center gap-3">
          <Button variant="primary" href="/waitlist" className="h-12 px-8 text-base">
            {AI_TEASER.CTA}
          </Button>
          <p className="text-xs text-zinc-500">
            {AI_TEASER.CTA_SUB}
          </p>
          <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-4">
            {AI_TEASER.WAITLIST_COUNT}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
