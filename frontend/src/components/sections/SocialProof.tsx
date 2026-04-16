import { FadeUp } from "../ui/FadeUp";
import { SOCIAL_PROOF } from "@/lib/copy";

export function SocialProof() {
  return (
    <section className="py-10 border-y border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 flex-wrap">
            <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono uppercase tracking-wider">
              {SOCIAL_PROOF}
            </span>
            <div className="flex items-center gap-8 flex-wrap justify-center opacity-50 grayscale dark:invert-0 invert">
              {/* Box Placeholders for the PRD spec */}
              <div className="w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
              <div className="w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
              <div className="w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
              <div className="w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md hidden sm:block" />
              <div className="w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md hidden sm:block" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
