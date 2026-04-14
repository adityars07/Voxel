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

export const COMING_SOON = true;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-geist-sans">
      <Navbar />
      
      <main>
        <Hero comingSoonAi={COMING_SOON} />
        <SocialProof />
        <Features comingSoonAi={COMING_SOON} />
        <HowItWorks />
        
        {COMING_SOON && <AiTeaser />}
        
        <Showcase />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
