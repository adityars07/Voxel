"use client";

import { useState } from "react";
import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { PRICING } from "@/lib/copy";
import { Check } from "lucide-react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col items-center text-center mb-16">
          <Badge variant="default" className="mb-6">
            {PRICING.LABEL}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white mb-8">
            {PRICING.HEADING}
          </h2>

          <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-lg">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${!isYearly ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${isYearly ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"}`}
            >
              Yearly <span className="text-indigo-500 dark:text-indigo-400 ml-1 text-xs">-20%</span>
            </button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 flex-wrap">
          {PRICING.TIERS.map((tier, idx) => {
            const isPro = tier.highlight;
            const price = isYearly && tier.price !== "$0" 
              ? `$${Math.round(parseInt(tier.price.replace("$", "")) * 0.8)}` 
              : tier.price;

            return (
              <FadeUp key={idx} delay={idx * 0.08}>
                <div className={`h-full flex flex-col p-6 rounded-xl transition-all duration-300 ${
                  isPro 
                    ? "bg-white dark:bg-zinc-900 border border-indigo-500/40 ring-1 ring-indigo-500/20 shadow-xl" 
                    : "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{tier.name}</h3>
                    {isPro && <Badge variant="accent">Most Popular</Badge>}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">{tier.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">{price}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm">/month</span>
                  </div>

                  <Button 
                    variant={isPro ? "primary" : "secondary"} 
                    className="w-full mb-8"
                  >
                    {tier.cta}
                  </Button>

                  <div className="flex-1 space-y-4">
                    {tier.features.map((feat, f) => (
                      <div key={f} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 items-start">
                        <Check className="w-4 h-4 shrink-0 text-zinc-400 dark:text-zinc-500 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
