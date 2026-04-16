"use client";

import { useState } from "react";
import Link from "next/link";
import { Hexagon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WaitlistPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [designType, setDesignType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", { email, designType });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col justify-center items-center p-6 selection:bg-indigo-500/30 selection:text-zinc-950 dark:selection:text-white font-geist-sans relative transition-colors duration-300">
      {/* Background glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,102,241,0.1), transparent)"
        }}
      />
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group z-20">
        <span className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors text-sm font-medium">
          ← Back to home
        </span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Hexagon className="w-7 h-7 text-indigo-500 dark:text-indigo-400" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white mb-3">
            Join the AI Waitlist
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Be one of the first to access our upcoming LLM-powered WebGL design generator.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-2xl transition-colors duration-300">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-indigo-500" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-white mb-2">You're in.</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
                We'll notify you via email the moment AI generation is ready for early access.
              </p>
              <Button href="/" variant="secondary" className="w-full">
                Return home
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="designType" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  What kind of designs do you make? <span className="text-zinc-400 dark:text-zinc-600">(Optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="designType"
                    value={designType}
                    onChange={(e) => setDesignType(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  >
                    <option value="" disabled className="text-zinc-400 dark:text-zinc-500">Select an option...</option>
                    <option value="ui_designer">UI / Product Designer</option>
                    <option value="frontend_dev">Frontend Developer</option>
                    <option value="creative_director">Creative Director</option>
                    <option value="hobbyist">Hobbyist / Other</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full h-12 mt-4 text-base shadow-lg shadow-indigo-500/20 dark:shadow-none">
                Join the waitlist
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
