"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
            <Hexagon className="w-5 h-5 text-black" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Voxel</span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="#changelog" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Changelog</Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md hover:bg-zinc-200 transition-colors"
          >
            Get early access
          </Link>
        </div>
      </div>
    </nav>
  );
}
