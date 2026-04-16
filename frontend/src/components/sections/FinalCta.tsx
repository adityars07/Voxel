import { FadeUp } from "../ui/FadeUp";
import { Button } from "../ui/Button";
import { FINAL_CTA } from "@/lib/copy";

export function FinalCta() {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6 text-balance">
            {FINAL_CTA.HEADING}
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed text-balance">
            {FINAL_CTA.SUBHEADING}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button variant="primary" href="/editor" className="h-12 px-8 text-base">
              {FINAL_CTA.CTA}
            </Button>
            <p className="text-sm text-zinc-500">
              {FINAL_CTA.SUB_NOTE}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
