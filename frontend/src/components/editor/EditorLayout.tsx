'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PropertiesPanel from '@/components/editor/PropertiesPanel';
import { useEditorStore } from '@/store/useEditorStore';
import { useAutoSave } from '@/hooks/useAutoSave';
import { Layers, Share2, Download, Settings, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// Dynamically import the Canvas (no SSR) because WebGL only runs in browser
const EditorCanvas = dynamic(() => import('@/components/editor/EditorCanvas'), { ssr: false });

export default function EditorLayout() {
  const { activeProject } = useEditorStore();
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  // Hook handles auto-saving to backend
  useAutoSave();

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 overflow-hidden text-white">
      {/* Top Bar */}
      <header className="flex items-center justify-between h-12 px-4 bg-zinc-900/80 backdrop-blur border-b border-white/10 flex-shrink-0 z-10">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white truncate max-w-48">{activeProject.title}</span>
          </div>
        </div>

        {/* Center - Effect type badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-mono text-white/60 uppercase">{activeProject.sceneData.baseEffect}</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white">
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white">
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Canvas Area */}
        <main className="flex-1 relative overflow-hidden">
          <EditorCanvas />

          {/* Canvas Overlays */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-mono text-white/30 select-none">
            <span>WebGL</span>
            <span className="w-1 h-1 rounded-full bg-green-400" />
            <span>Live</span>
          </div>
        </main>

        {/* Right Properties Panel */}
        <div className={`flex-shrink-0 transition-all duration-300 overflow-hidden ${isRightPanelOpen ? 'w-80' : 'w-0'}`}>
          <PropertiesPanel />
        </div>
      </div>
    </div>
  );
}
