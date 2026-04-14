import { FadeUp } from "../ui/FadeUp";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Open the canvas",
      desc: "Start with a blank slate or drop in a base 3D model. The interface stays out of your way."
    },
    {
      number: "02",
      title: "Layer motion & effects",
      desc: "Stack post-processing algorithms visually. Tweak values in real-time until it feels perfect."
    },
    {
      number: "03",
      title: "Export & embed",
      desc: "Copy the runtime snippet or export a fully typed React component directly into your codebase."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              From idea to live in minutes
            </h2>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-zinc-800" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <FadeUp key={idx} delay={0.2 * idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center mb-8 text-lg font-bold text-white shadow-xl shadow-black">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
