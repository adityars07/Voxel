import { FadeUp } from "../ui/FadeUp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-32 bg-black border-t border-zinc-900 border-b relative overflow-hidden">
      {/* Background glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <FadeUp>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Start building. <br className="hidden sm:block" />
            <span className="text-zinc-500">No code required.</span>
          </h2>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-lg font-bold rounded-md hover:bg-zinc-200 transition-colors w-full sm:w-auto"
            >
              Get started free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-zinc-500 text-sm font-medium">
              No credit card required &middot; Free forever plan available
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
