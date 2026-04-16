import { FadeUp } from "../ui/FadeUp";
import { TESTIMONIALS } from "@/lib/copy";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((test, idx) => (
            <FadeUp key={idx} delay={idx * 0.08}>
              <div className="h-full p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200">
                <p className="text-base text-zinc-600 dark:text-zinc-300 italic leading-relaxed mb-6 flex-1">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 font-medium text-xs border border-zinc-200 dark:border-zinc-700">
                    {test.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-950 dark:text-white">{test.name}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">{test.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
