'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Maximize2, Heart, ArrowLeft, Filter, Sparkles } from 'lucide-react';

const categories = [
  'Light Mode', 'Dark Mode', '3D', 'Text', 'Mouse', 
  'Dither', 'Blur', 'Light', 'Retro', 'Distortion', 
  'Color', 'Generative'
];



const baseImages = [
  '/inspiration/webgl_aurora_1775326125807.png',
  '/inspiration/webgl_blob_1775325536778.png',
  '/inspiration/webgl_chrome_1775326062174.png',
  '/inspiration/webgl_crystal_1775326012130.png',
  '/inspiration/webgl_fractal_1775325992464.png',
  '/inspiration/webgl_geometric_1775326148216.png',
  '/inspiration/webgl_glass_1775325568815.png',
  '/inspiration/webgl_glitch_1775326163363.png',
  '/inspiration/webgl_gradient_1775326079485.png',
  '/inspiration/webgl_holographic_1775325584068.png',
  '/inspiration/webgl_neon_1775325551608.png',
  '/inspiration/webgl_orb_1775326180652.png',
  '/inspiration/webgl_plasma_1775326027491.png',
  '/inspiration/webgl_silk_1775326111101.png',
  '/inspiration/webgl_smoke_1775326093229.png',
  '/inspiration/webgl_wireframe_1775326045001.png'
];

// Generates 80 explicitly distinct items using local images + dynamic CSS hue shifting
const inspirations = Array.from({ length: 80 }).map((_, i) => {
  const category = categories[i % categories.length];

  let title = '';
  // Hardcode the first few items to match the vibe from the screenshot precisely
  if (i === 0) title = 'Glitch Roman Statue';
  else if (i === 1) title = 'Light Beam Streak';
  else if (i === 2) title = 'Typography WebGL OSZ';
  else if (i === 3) title = 'Monolith Rock Render';
  else if (i === 4) title = 'Holographic Laptop';
  else if (i === 5) title = 'Distorted Make Text';
  else {
    const modifiers = ['V1', 'Concept', 'Study', 'Experiment', 'UI', 'Shader', 'V2'];
    title = `${category} ${modifiers[i % modifiers.length]}`;
  }

  let colSpan = 'col-span-1';
  let rowSpan = 'row-span-1';
  
  if (i % 8 === 0) {
    colSpan = 'col-span-1 md:col-span-2 lg:col-span-2';
    rowSpan = 'row-span-1';
  }

  const authors = ['kevingrajeda', 'Ray Shih', 'Voxel Studio', 'UI Lab'];
  const author = authors[i % authors.length];

  // Dynamic css filters to ensure vast visual difference between instances of the same image
  const hueShift = (i * 53) % 360;
  const saturation = 100 + (i % 4) * 25; // 100 to 175%
  const invertVal = i % 14 === 0 ? 100 : 0; // Invert colors entirely on some!

  return {
    id: i + 1,
    title,
    category,
    author,
    image: baseImages[i % baseImages.length],
    cssFilter: `hue-rotate(${hueShift}deg) saturate(${saturation}%) invert(${invertVal}%)`,
    likes: Math.floor(Math.random() * 800) + 12,
    colSpan,
    rowSpan
  };
});

export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredInspirations = activeCategory
    ? inspirations.filter(item => item.category === activeCategory)
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
          {categories.map((category) => (
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredInspirations.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className={`group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 ${item.colSpan} ${item.rowSpan}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ filter: item.cssFilter }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80 mix-blend-multiply" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 bg-black/40 backdrop-blur-md rounded-[4px] text-[10px] font-medium text-white/90 border border-white/5 rounded-full">
                      {item.category}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</h3>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="translate-y-6 group-hover:translate-y-0 transition-transform duration-300">@{item.author.toLowerCase().replace(/\s+/g, '')}</span>
                  </div>

                  {/* Actions (reveal on hover) */}
                  <div className="grid grid-cols-2 gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center justify-center gap-1.5 py-2 bg-white text-black rounded-[6px] text-xs font-bold hover:bg-zinc-200 transition-colors">
                      <Hexagon className="w-3 h-3" fill="currentColor" />
                      Remix
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
