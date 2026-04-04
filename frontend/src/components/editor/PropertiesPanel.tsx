'use client';

import React from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { SlidersHorizontal } from 'lucide-react';

export default function PropertiesPanel() {
  const { activeProject, setUniform } = useEditorStore();
  const { uniforms } = activeProject.sceneData;

  const controls = [
    { name: 'u_speed', label: 'Speed', min: 0, max: 10, step: 0.1 },
    { name: 'u_distortion', label: 'Distortion', min: 0, max: 2, step: 0.01 },
    { name: 'u_noise_scale', label: 'Noise Scale', min: 1, max: 20, step: 0.1 },
  ];

  return (
    <div className="w-80 h-full bg-zinc-900 border-l border-white/10 p-6 flex flex-col gap-8 overflow-y-auto">
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-white/50 uppercase tracking-widest flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Scene Properties
        </h2>
        <h1 className="text-xl font-bold text-white truncate">{activeProject.title}</h1>
      </div>

      <div className="space-y-6">
        {/* Color Picker */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-white/40 uppercase">Base Color</label>
          <div className="relative flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <div 
                className="w-full h-full rounded-lg border border-white/20 shadow-lg cursor-pointer"
                style={{ backgroundColor: uniforms.u_color }}
              />
              <input 
                type="color" 
                value={uniforms.u_color}
                onChange={(e) => setUniform('u_color', e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>
            <input 
              type="text" 
              value={uniforms.u_color}
              onChange={(e) => setUniform('u_color', e.target.value)}
              className="flex-1 bg-transparent border-b border-white/10 text-sm font-mono text-white/70 focus:outline-none focus:border-blue-500 transition-colors py-1"
            />
          </div>
        </div>

        {/* Sliders */}
        {controls.map((control) => (
          <div key={control.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-white/40 uppercase">{control.label}</label>
              <span className="text-xs font-mono text-white/60">{(uniforms as any)[control.name]?.toFixed(2) ?? '0.00'}</span>
            </div>
            <input 
              type="range"
              min={control.min}
              max={control.max}
              step={control.step}
              value={(uniforms as any)[control.name] ?? 0}
              onChange={(e) => setUniform(control.name, parseFloat(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
            />
          </div>
        ))}
      </div>

      <div className="mt-auto pt-10">
        <button 
          className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors active:scale-95 duration-200"
          onClick={() => {
            console.log('Save project state:', activeProject);
          }}
        >
          Save Project
        </button>
      </div>
    </div>
  );
}
