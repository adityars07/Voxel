"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? "border-b border-zinc-200 dark:border-zinc-800/60" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Note: In PRD, Logo SVG wordmark or bold text "Voxel" in white */}
          <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">Voxel</span>
        </Link>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">How it works</Link>
          <Link href="#showcase" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Showcase</Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Pricing</Link>
        </div>

        {/* Right: CTA group */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="secondary" href="/login" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="primary" href="/waitlist">
            Get early access
          </Button>
        </div>
      </div>
    </nav>
  );
}
