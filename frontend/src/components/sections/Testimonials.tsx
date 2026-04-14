import { FadeUp } from "../ui/FadeUp";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Voxel completely eliminated the boundary between our design mockups and frontend implementation. It's magic.",
      name: "Sarah Chen",
      role: "Lead Creative Developer",
      company: "Studio Null"
    },
    {
      quote: "I've tried learning GLSL five times and failed. With Voxel, I built a 3D fluid hero section for a client in an afternoon.",
      name: "Marcus Dubois",
      role: "Freelance Designer",
      company: "Independent"
    },
    {
      quote: "The React Three Fiber exports are spot-on. It generates clean, optimized code that drops straight into our Next.js stack.",
      name: "Alex V.",
      role: "Frontend Engineer",
      company: "Hyperion"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <FadeUp key={idx} delay={0.1 * idx}>
              <div className="h-full p-8 rounded-2xl bg-black border border-zinc-900 shadow-sm flex flex-col">
                <Quote className="w-8 h-8 text-zinc-800 mb-6" />
                <p className="text-zinc-300 mb-8 leading-relaxed flex-1">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-sm">
                    {test.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{test.name}</div>
                    <div className="text-zinc-500 text-xs">{test.role}, {test.company}</div>
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
