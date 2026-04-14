import { FadeUp } from "../ui/FadeUp";
import { Copy, Cpu, Download, Layers, Palette, Sparkles } from "lucide-react";

interface FeaturesProps {
  comingSoonAi: boolean;
}

export function Features({ comingSoonAi }: FeaturesProps) {
  const features = [
    {
      icon: <Palette className="w-5 h-5 text-blue-500" />,
      title: "No-code WebGL effects",
      desc: "Create particle systems, fluid simulations, and post-processing effects without writing a single line of shader code."
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: "Layer-based canvas",
      desc: "Familiar Figma-like interface. Organize your scene, adjust blending modes, and stack modifiers effortlessly."
    },
    {
      icon: <Download className="w-5 h-5 text-blue-500" />,
      title: "Export anywhere",
      desc: "Export standalone components to React, Framer, Webflow, or directly drop in plain HTML/JS."
    },
    {
      icon: <Copy className="w-5 h-5 text-blue-500" />,
      title: "35+ built-in effects",
      desc: "From chromatic depths to volumetric lighting—start with our library of production-ready presets."
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      title: "Lightweight runtime",
      desc: "Our embeddable engine is heavily optimized. Zero bloated dependencies footprint on your precious page load."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Everything you need to build stunning web visuals
            </h2>
            <p className="text-lg text-zinc-400">
              Stop fighting with boilerplate. Start shaping ideas visually.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <FadeUp key={idx} delay={0.1 * (idx + 1)}>
              <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors h-full">
                <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}

          {/* AI Feature block */}
          {comingSoonAi && (
            <FadeUp delay={0.6}>
              <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-colors h-full relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Coming Soon
                </div>
                <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 group-hover:border-blue-500/50 transition-colors flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI design generation</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Describe what you want to see. Our custom LLM builds the node graph and configures the shader parameters automatically.
                </p>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
