import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { FEATURES_SECTION } from "@/lib/copy";
import { SHOW_AI_FEATURE } from "@/lib/config";
import { Layers, Sparkles, Zap, Code2, Gauge, Bot } from "lucide-react";

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Gauge: <Gauge className="w-5 h-5" />,
    Bot: <Bot className="w-5 h-5" />
  };
  return icons[name] || <Layers className="w-5 h-5" />;
};

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-2xl mb-12">
            <Badge variant="default" className="mb-6">
              {FEATURES_SECTION.LABEL}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white mb-4">
              {FEATURES_SECTION.HEADING}
            </h2>
            <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {FEATURES_SECTION.SUBHEADING}
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES_SECTION.ITEMS.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.08}>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200 h-full flex flex-col space-y-3">
                <div className="text-zinc-500 dark:text-zinc-400 mb-3">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}

          {SHOW_AI_FEATURE && (
            <FadeUp delay={FEATURES_SECTION.ITEMS.length * 0.08}>
              <div className="bg-indigo-50/50 dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-500/40 rounded-xl p-6 ring-1 ring-indigo-500/20 relative overflow-hidden h-full flex flex-col space-y-3">
                <div className="absolute top-4 right-4">
                  <Badge variant="accent">{FEATURES_SECTION.AI_FEATURE.badge}</Badge>
                </div>
                <div className="text-indigo-500 dark:text-indigo-400 mb-3">
                  {getIcon(FEATURES_SECTION.AI_FEATURE.icon)}
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {FEATURES_SECTION.AI_FEATURE.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1 pr-12">
                  {FEATURES_SECTION.AI_FEATURE.desc}
                </p>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
