import Image from "next/image";
import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SHOW_AI_FEATURE } from "@/lib/config";
import { HERO } from "@/lib/copy";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12), transparent)"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {SHOW_AI_FEATURE && (
          <FadeUp delay={0.1}>
            <Badge variant="accent" className="mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {HERO.BADGE}
            </Badge>
          </FadeUp>
        )}

        <FadeUp delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-950 dark:text-white max-w-3xl mx-auto text-balance">
            {HERO.HEADING}
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-4 text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {HERO.SUBHEADING}
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="mt-8">
          <div className="flex gap-3 justify-center flex-wrap">
            <Button variant="primary" href="/editor" className="h-12 px-6 text-base">
              {HERO.CTA_PRIMARY}
            </Button>
            <Button variant="secondary" href="#showcase" className="h-12 px-6 text-base">
              {HERO.CTA_SECONDARY}
            </Button>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-3 font-medium">
            {HERO.SUB_NOTE}
          </p>
        </FadeUp>

        {/* Hero Visual */}
        <FadeUp delay={0.5} className="mt-16 w-full max-w-5xl mx-auto">
          <div className="rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 overflow-hidden ring-1 ring-indigo-500/20 shadow-[0_0_80px_rgba(99,102,241,0.08)]">
            <div className="h-10 border-b border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-950 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <div className="mx-auto text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                canvas.scene
              </div>
            </div>
            <div className="aspect-[16/9] w-full bg-white dark:bg-zinc-950 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/images/hero_editor.png" 
                alt="Voxel Editor Interface Preview" 
                fill 
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
