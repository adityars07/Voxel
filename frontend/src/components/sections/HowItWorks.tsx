import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { HOW_IT_WORKS } from "@/lib/copy";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-16 text-center">
            <Badge variant="default" className="mb-6">
              {HOW_IT_WORKS.LABEL}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {HOW_IT_WORKS.HEADING}
            </h2>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[16px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-zinc-300 dark:border-zinc-700" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between relative z-10">
            {HOW_IT_WORKS.STEPS.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 0.08} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold mb-6 ring-4 ring-zinc-50 dark:ring-zinc-950">
                  {idx + 1}
                </div>
                <div className="space-y-3 px-4 lg:px-0">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
