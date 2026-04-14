import { FadeUp } from "../ui/FadeUp";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Showcase() {
  const cards = [
    { title: "Fluid Distortion", category: "Post-Processing" },
    { title: "Volumetric Clouds", category: "Generative" },
    { title: "Neon Grid Synthwave", category: "Environment" },
    { title: "Particle Swarm", category: "Interactive Physics" }
  ];

  return (
    <section className="py-24 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Built with Voxel
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl">
            Explore what the community is building.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <FadeUp key={idx} delay={0.1 * idx} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-xl mb-4 overflow-hidden relative">
                {/* Visual Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-sm font-mono font-medium">
                  {/* TODO: Add next/image screenshots here */}
                  [ WebGL Canvas Placeholder ]
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1 scale-95 group-hover:scale-100 transition-transform">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg">{card.title}</h3>
                  <p className="text-zinc-500 text-sm font-medium">{card.category}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4} className="mt-16 flex justify-center">
          <Link href="/inspiration" className="px-6 py-3 border border-zinc-800 font-semibold text-white rounded-md hover:bg-zinc-900 transition-colors">
            View all inspiration
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
