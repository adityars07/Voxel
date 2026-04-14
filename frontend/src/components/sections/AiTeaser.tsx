import { FadeUp } from "../ui/FadeUp";
import { ArrowUp, Sparkles } from "lucide-react";

export function AiTeaser() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-y border-zinc-900">
      {/* Decorative accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Coming in Fall 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Meet your AI design co-pilot.
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Why tweak parameters endlessly? Soon, you'll be able to describe the visual feel you want in plain text. Our proprietary LLM analyzes your prompt, constructs the WebGL node graph, and instantly renders the scene—fully editable if you need to refine it.
            </p>
            <button className="px-6 py-3.5 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
              Join the AI Waitlist
            </button>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl relative">
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-zinc-800 shrink-0" />
                <div className="bg-zinc-900 p-4 rounded-xl rounded-tl-sm text-sm text-zinc-300 w-full font-mono">
                  Create a dark animated hero with glowing particles and a slow rotation effect. Match the brand color #3B82F6.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-blue-600 shrink-0 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-blue-950/30 p-4 rounded-xl rounded-tl-sm border border-blue-900/50 w-full relative h-[140px] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                  </div>
                  {/* Pseudo code indicator */}
                  <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-blue-400 font-bold">
                    Rendering graph...
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Describe your design..." 
                disabled
                className="w-full bg-black border border-zinc-800 rounded-lg py-4 pl-4 pr-12 text-zinc-500 font-mono text-sm focus:outline-none"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-zinc-500">
                <ArrowUp className="w-4 h-4" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
