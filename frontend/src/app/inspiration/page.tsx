'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Maximize2, Heart, ArrowLeft, Filter, Sparkles } from 'lucide-react';

const categoryKeywords: Record<string, string[]> = {
  Materials: ['3d', 'texture', 'render'],
  Particles: ['neon', 'glitter', 'particles'],
  Abstract: ['abstract', 'gradient', 'geometry'],
  Distortion: ['glitch', 'cyberpunk', 'retro'],
};

// Generates 40 explicitly distinct items
const inspirations = Array.from({ length: 40 }).map((_, i) => {
  // Use specific user requested themes for the first 4 slots to guarantee they appear uniquely
  let keyword = 'abstract,3d';
  let title = 'Abstract WebGL ' + i;
  let category = 'Abstract';

  if (i === 0) {
    title = 'Dark Mode Dashboard UI';
    keyword = 'darkmode,ui,dashboard';
    category = 'Abstract';
  } else if (i === 1) {
    title = 'Retro 80s Synthwave';
    keyword = 'retro,synthwave,neon';
    category = 'Distortion';
  } else if (i === 2) {
    title = '3D Shoe Configurator';
    keyword = 'sneaker,3d,shoe';
    category = 'Materials';
  } else if (i === 3) {
    title = 'Modern Website Graphic';
    keyword = 'website,graphic,ui';
    category = 'Abstract';
  } else {
    // Dynamically assign categories
    const categoriesList = ['Materials', 'Particles', 'Abstract', 'Distortion'];
    category = categoriesList[i % categoriesList.length];
    
    // Pick keyword for lorem flickr
    const kwList = categoryKeywords[category];
    keyword = kwList[(i * 3) % kwList.length] + ',3d';

    const modifiers = ['V2', 'Remix', 'Dark Mode', 'Liquid', 'Quantum', 'Flow', 'Crystal', 'Neon', 'Holo'];
    title = `${category} Concept - ${modifiers[i % modifiers.length]}`;
  }

  // Create variations in colSpan/rowSpan to make grid interesting
  let colSpan = 'col-span-1 md:col-span-1 lg:col-span-1';
  let rowSpan = 'row-span-1';
  
  if (i % 7 === 0) {
    colSpan = 'col-span-1 md:col-span-2 lg:col-span-2';
    rowSpan = 'row-span-2';
  } else if (i % 5 === 0) {
    colSpan = 'col-span-1 md:col-span-2 lg:col-span-2';
    rowSpan = 'row-span-1';
  }

  const authors = ['Voxel Studio', 'UI Lab', 'Neon Dreams', 'CyberPunk99', 'GenArt', 'Lumina'];
  const author = `${authors[i % authors.length]}${i % 3 === 0 && i !== 0 ? ' & Co.' : ''}`;
  const likes = 200 + ((i * 137) % 1800);

  return {
    id: i + 1,
    title,
    category,
    author,
    image: `https://loremflickr.com/800/600/${keyword}?lock=${i + 130}`,
    likes,
    colSpan,
    rowSpan
  };
});

const categories = ['All', 'Materials', 'Particles', 'Abstract', 'Distortion'];

export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredInspirations = activeCategory === 'All' 
    ? inspirations 
    : inspirations.filter(item => item.category === activeCategory);

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

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-40">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Showcase</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            DISCOVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">INSPIRATION</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl font-medium"
          >
            Explore incredible WebGL experiences built by the community. 
            Clone them into your workspace to instantly kickstart your creative process.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
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
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 border border-white/10">
                      {item.category}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1 text-white">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>By {item.author}</span>
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-white/50" /> {item.likes}</span>
                  </div>

                  {/* Actions (reveal on hover) */}
                  <div className="grid grid-cols-2 gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors">
                      <Hexagon className="w-4 h-4" fill="currentColor" />
                      Clone Project
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                      Preview
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
