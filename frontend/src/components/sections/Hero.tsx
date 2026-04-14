import { FadeUp } from "../ui/FadeUp";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  comingSoonAi: boolean;
}

export function Hero({ comingSoonAi }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <FadeUp delay={0.1}>
        <h1 className="text-5xl sm:text-6xl md:text-[80px] font-bold tracking-tight leading-[1.05] text-white max-w-4xl mx-auto text-balance">
          Design the web with words.
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate no-code WebGL and motion design tool. Build stunning interactive experiences visually, and soon, generate them entirely with AI.
        </p>
      </FadeUp>

      <FadeUp delay={0.3} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/editor"
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors w-full sm:w-auto"
        >
          Start designing
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-md hover:bg-zinc-800 transition-colors w-full sm:w-auto"
        >
          <Play className="w-4 h-4 fill-current" />
          Watch demo
        </button>
      </FadeUp>

      {comingSoonAi && (
        <FadeUp delay={0.4} className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500 font-medium">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span>Coming soon: Generate designs with AI</span>
        </FadeUp>
      )}

      {/* Hero Visual Placeholder */}
      <FadeUp delay={0.5} className="mt-16 w-full max-w-5xl mx-auto">
        <div className="aspect-[16/9] w-full rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden relative flex flex-col">
          {/* Mock Browser/Editor Header */}
          <div className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
            <div className="mx-auto px-4 py-1 rounded bg-zinc-900 text-xs text-zinc-500 font-mono">
              canvas.scene
            </div>
          </div>
          {/* Mock Editor Canvas Body */}
          <div className="flex-1 bg-zinc-900 flex items-center justify-center p-8">
            {/* TODO: Replace with real mock screenshot or canvas using next/image */}
            <div className="text-zinc-600 font-mono text-sm border border-dashed border-zinc-700 p-8 rounded-lg">
              [ Editor Canvas Placeholder ]
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
