import React, { useState } from 'react';
import { HOTSPOTS } from '../data/carData';
import { Hotspot } from '../types';
import { Cpu, Zap, Activity, ShieldCheck, Sparkles, ChevronRight, Layers } from 'lucide-react';

export const AnatomySection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [engineViewMode, setEngineViewMode] = useState<'v12' | 'hybrid'>('v12');

  return (
    <section id="anatomy" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-400 mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Hyper-Crossover Architecture</span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          Engineering Anatomy
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
          An unprecedented hybrid architecture uniting a 3,000 HP aerospace-grade twin-turbo V12 core, axial-flux electric torque vectoring, solid-state cell array, and single-piece graphene monocoque.
        </p>
      </div>

      {/* Main Interactive Anatomy Canvas */}
      <div className="relative rounded-3xl overflow-hidden amethyst-glass border border-purple-800/40 shadow-2xl p-4 sm:p-6 mb-12">
        <div className="relative aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden border border-purple-900/50">
          <img
            src="/media/chassis-anatomy.jpg"
            alt="Project Continuum Amethyst Arcadia Anatomy"
            className="w-full h-full object-contain"
          />

          {/* Glowing Grid overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-purple-950/10 to-black/60 pointer-events-none" />

          {/* Interactive Hotspot Pins */}
          {HOTSPOTS.map((hotspot) => {
            const isSelected = activeHotspot.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 focus:outline-none`}
                aria-label={hotspot.title}
              >
                <div className="relative flex items-center justify-center">
                  {/* Outer ripple animation */}
                  <span
                    className={`absolute w-8 h-8 rounded-full ${
                      isSelected ? 'bg-purple-500/40 animate-ping' : 'bg-purple-400/20 group-hover:animate-ping'
                    }`}
                  />
                  {/* Central Glowing Pin */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-purple-600 border-white text-white shadow-[0_0_20px_#a855f7]'
                        : 'bg-black/80 border-purple-400 text-purple-300 hover:scale-110 hover:border-white'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Pin Tooltip Label */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 text-[10px] tracking-wider text-purple-200 uppercase font-medium whitespace-nowrap border border-purple-700/60 shadow-lg pointer-events-none backdrop-blur-md">
                    <span>{hotspot.title.split(' ')[0]}</span>
                    <ChevronRight className="w-3 h-3 text-purple-400" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hotspot Deep-Dive Detail Card */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-black/60 border border-purple-900/40">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold px-2.5 py-0.5 rounded bg-purple-950 border border-purple-800">
                Component Dossier
              </span>
              <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white tracking-wide">
                {activeHotspot.title}
              </h3>
            </div>
            <p className="text-xs uppercase tracking-wider text-purple-200 font-medium">
              {activeHotspot.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {activeHotspot.description}
            </p>

            {/* Spec bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {activeHotspot.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg amethyst-glass border border-purple-900/30 text-[11px] text-purple-200 flex items-start gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related component visual */}
          {activeHotspot.relatedImage && (
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-purple-900/50 relative aspect-[16/10] bg-black">
              <img
                src={activeHotspot.relatedImage}
                alt={activeHotspot.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 text-[10px] tracking-wider text-purple-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                Component Visual Inspection
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Engine Bay Dual Inspection Toggle */}
      <div className="rounded-3xl p-6 sm:p-8 amethyst-glass border border-purple-900/40 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-purple-400 font-semibold mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Powertrain Dual Inspection</span>
            </div>
            <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white tracking-wide">
              Twin-Turbo V12 vs. Solid-State Hybrid Array
            </h3>
          </div>

          {/* Toggle pill */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-black/60 border border-purple-800/50">
            <button
              onClick={() => setEngineViewMode('v12')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                engineViewMode === 'v12'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              V12 Block Assembly
            </button>
            <button
              onClick={() => setEngineViewMode('hybrid')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                engineViewMode === 'hybrid'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Electric Hybrid Components
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-purple-900/50 relative aspect-[16/10] bg-black shadow-xl">
            <img
              src={
                engineViewMode === 'v12'
                  ? '/media/engine-bonnet-view.jpg'
                  : '/media/hybrid-powertrain-parts.jpg'
              }
              alt={engineViewMode === 'v12' ? 'V12 Engine Bay' : 'Hybrid Powertrain Components'}
              className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest font-semibold text-purple-300 bg-black/80 px-3 py-1 rounded-full border border-purple-700/40 backdrop-blur-md">
              {engineViewMode === 'v12'
                ? 'Twin-Turbocharged 6.75L V12 Internal Combustion Core'
                : '800V Silicon-Carbide Inverter & Solid-State Busbars'}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-luxury text-lg font-bold text-white tracking-wide">
              {engineViewMode === 'v12'
                ? 'Internal Combustion Sovereign Core'
                : 'Zero-Lag Electric Vectoring'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {engineViewMode === 'v12'
                ? 'Engineered with hand-finished aluminum intake manifolds, twin twin-scroll ceramic turbochargers, and a titanium cross-plane exhaust system tuned specifically for a deep, resonant baritone note with zero cabin drone.'
                : 'Dual axial-flux front drive units paired with an ultra-compact twin rear-drive module provide instantaneous torque to all four wheels in under 10 milliseconds, entirely eliminating turbo lag and enabling seamless traction under all weather conditions.'}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-purple-950 text-xs">
                <span className="text-gray-400">Torque Vectoring Latency</span>
                <span className="font-mono text-purple-300 font-bold">&lt; 10 ms</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-purple-950 text-xs">
                <span className="text-gray-400">Pure EV Silent Cruise Range</span>
                <span className="font-mono text-purple-300 font-bold">120 km (75 mi)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-purple-950 text-xs">
                <span className="text-gray-400">Total System Energy Capacity</span>
                <span className="font-mono text-purple-300 font-bold">110 kWh Solid-State</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
