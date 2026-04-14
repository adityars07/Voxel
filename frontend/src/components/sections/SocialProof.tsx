import { FadeUp } from "../ui/FadeUp";
import { Command, Hexagon, Box, Circle, Triangle } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp delay={0.2} className="flex flex-col items-center">
          <p className="text-sm font-medium text-zinc-500 mb-8 text-center text-balance">
            Trusted by 5,000+ designers at companies like
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {/* Using lucide icons as sleek placeholder logo stand-ins */}
            <div className="flex items-center gap-2 text-zinc-400">
              <Command className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">Superlinear</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Triangle className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">Vercel</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Hexagon className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">Figma</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Box className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">Framer</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-zinc-400">
              <Circle className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">GitHub</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
