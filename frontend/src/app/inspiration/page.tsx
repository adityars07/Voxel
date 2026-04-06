'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Maximize2, Heart, ArrowLeft, Filter, Sparkles } from 'lucide-react';

import { categories, inspirations, InspirationItem } from '../../data/inspirations';

export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredInspirations = activeCategory
    ? inspirations.filter((item: InspirationItem) => item.category === activeCategory)
    : inspirations;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-geist-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:rotate-12 transition-all duration-300">
            <Hexagon className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight">Voxel</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link 
            href="/editor" 
            className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/20"
          >
            Create Your Own
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto px-8 w-full max-w-[1600px] pt-12 pb-40">
        
        {/* Header - Left Aligned to match screenshot */}
        <div className="flex flex-col items-start mb-8 text-left">
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Inspiration</h1>
          <p className="text-sm text-zinc-400">
            Explore effects in action and remix them for your own projects.
          </p>
        </div>

        {/* Filters - Match screenshot UI exactly */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-[4px] text-[13px] transition-colors border ${
                activeCategory === category 
                  ? 'bg-indigo-500 border-indigo-500 text-white'
                  : 'bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="px-3 py-1.5 rounded-[4px] text-[13px] transition-colors border bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/30 ml-2"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px] grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredInspirations.map((item: InspirationItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className={`group relative rounded-[8px] overflow-hidden bg-zinc-900 border border-white/5 ${item.colSpan} ${item.rowSpan}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ filter: item.cssFilter }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-40 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                {/* Center Title */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-6">
                  {item.centerText ? (
                    <h2 className="text-white/90 font-medium text-center text-lg md:text-xl whitespace-pre-line drop-shadow-md">
                      {item.centerText}
                    </h2>
                  ) : (
                    <h2 className="text-white font-medium text-center text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 drop-shadow-md">
                      {item.title}
                    </h2>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
                  {/* Top Bar - Hidden by default, visible on hover */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-[4px] text-[10px] uppercase tracking-wider font-semibold text-white/90">
                      {item.category}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  {/* Bottom Bar - Author (visible by default), Action (on hover) */}
                  <div className="flex items-end justify-between mt-auto">
                    {/* Author Name */}
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-white/70 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                        {item.author.startsWith('@') ? item.author : `@${item.author.toLowerCase().replace(/\s+/g, '')}`}
                      </span>
                    </div>

                    {/* Copy Project Action */}
                    <button className="px-3.5 py-1.5 bg-white text-black rounded-[6px] text-[13px] font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-200">
                      Copy project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredInspirations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-32 text-center flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-3xl"
          >
            <Filter className="w-12 h-12 text-white/20 mb-4" />
            <h3 className="text-xl font-bold text-white/50 mb-2">No inspirations found</h3>
            <p className="text-white/30">Try selecting a different category.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
