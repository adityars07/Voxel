import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AiTeaser } from "@/components/sections/AiTeaser";
import { Showcase } from "@/components/sections/Showcase";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { SHOW_AI_FEATURE } from "@/lib/config";

export default function LandingPage() {
  return (
    <div className="bg-zinc-950 text-zinc-400 selection:bg-indigo-500/30 selection:text-white font-geist-sans">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        
        {SHOW_AI_FEATURE && <AiTeaser />}
        
        <Showcase />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
