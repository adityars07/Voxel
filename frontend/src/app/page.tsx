'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers, Hexagon, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30 overflow-hidden font-geist-sans selection:text-blue-200">
      {/* Subtle Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Hexagon className="w-5 h-5 text-black" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight">Voxel</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/inspiration" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Inspiration</Link>
          <Link href="/login" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Sign In</Link>
          <Link 
            href="/editor" 
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            Launch Editor
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-5xl mx-auto px-8 pt-32 pb-40 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">The Future of WebGL</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
        >
          SCULPT YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">DIGITAL DREAMS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          A minimalist, professional-grade shader editor for creators. 
          Build complex WebGL effects in real-time with an intuitive no-code interface.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/editor" 
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-lg font-black rounded-2xl hover:bg-zinc-100 transition-all shadow-2xl shadow-blue-500/20"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/inspiration" className="px-8 py-4 bg-white/5 border border-white/10 text-lg font-bold rounded-2xl hover:bg-white/10 transition-colors">
            View Showcases
          </Link>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full text-left">
          {[
            { icon: <Zap />, title: "Instant Feedback", desc: "See your shader changes live at 60FPS with zero compile delay." },
            { icon: <Layers />, title: "No-Code Nodes", desc: "Tweak complex uniforms via visual controllers and custom math nodes." },
            { icon: <Hexagon />, title: "Ready for R3F", desc: "Export clean React Three Fiber code ready to drop into any project." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/[0.07] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/40 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-white/5 text-center text-white/20 text-sm font-medium">
        &copy; 2026 Voxel Studio. Built with React Three Fiber.
      </footer>
    </div>
  );
}
