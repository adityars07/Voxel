import Image from "next/image";
import { FadeUp } from "../ui/FadeUp";
import { Badge } from "../ui/Badge";
import { SHOWCASE } from "@/lib/copy";

export function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12">
            <Badge variant="default" className="mb-6">
              {SHOWCASE.LABEL}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {SHOWCASE.HEADING}
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASE.ITEMS.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.08} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4 overflow-hidden relative border border-zinc-200 dark:border-zinc-700/50 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors duration-200">
                <div className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white px-1">
                {item.title}
              </h3>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
