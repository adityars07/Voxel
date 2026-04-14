import { FadeUp } from "../ui/FadeUp";
import { Check } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      desc: "For hobbyists and learners exploring the WebGL space.",
      features: [
        "Unlimited public canvases",
        "Export to CodeSandbox",
        "Standard nodes & presets",
        "Community forum access"
      ],
      ctaText: "Get started",
      highlight: false
    },
    {
      name: "Pro",
      price: "$19",
      desc: "For freelancers and indie developers building production apps.",
      features: [
        "Unlimited private canvases",
        "Direct React/Webflow export",
        "Custom GLSL code nodes",
        "Priority email support",
        "AI Co-pilot access (Waitlist)"
      ],
      ctaText: "Start 14-day trial",
      highlight: true
    },
    {
      name: "Team",
      price: "$49",
      desc: "For agencies and design teams collaborating on visual assets.",
      features: [
        "Everything in Pro",
        "Shared team workspaces",
        "Version history & rollback",
        "Advanced performance profiler",
        "Custom embed domains"
      ],
      ctaText: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Simple, predictable pricing
          </h2>
          <p className="text-lg text-zinc-400">
            Start for free. Upgrade when you need production power.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <FadeUp key={idx} delay={0.1 * idx}>
              <div
                className={`h-full flex flex-col p-8 rounded-2xl border ${
                  tier.highlight 
                    ? "bg-zinc-950 border-white/20 shadow-2xl shadow-blue-500/10" 
                    : "bg-black border-zinc-900"
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4 text-zinc-400 text-sm h-10">{tier.desc}</div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-zinc-500 font-medium">/mo</span>
                </div>

                <button
                  className={`w-full py-3 rounded-md font-bold transition-colors mb-8 ${
                    tier.highlight
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {tier.ctaText}
                </button>

                <div className="flex-1 space-y-4">
                  {tier.features.map((feat, f) => (
                    <div key={f} className="flex gap-3 text-sm text-zinc-300">
                      <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-blue-400" : "text-zinc-500"}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
