import React, { useState } from 'react';
import { Compass, Gauge, Sun, Sparkles, Navigation, Moon, Sliders, Volume2 } from 'lucide-react';

export const CockpitDashboardSection: React.FC = () => {
  const [driveMode, setDriveMode] = useState<'whisper' | 'comfort' | 'hyper' | 'grandtour'>('hyper');
  const [ambientColor, setAmbientColor] = useState<string>('#9333ea');
  const [sunroofOpacity, setSunroofOpacity] = useState<number>(85);
  const [activeCockpitTab, setActiveCockpitTab] = useState<'dashboard' | 'sunroof' | 'driver'>('dashboard');

  const modes = [
    {
      id: 'whisper',
      name: 'Arcadia Whisper (EV)',
      tagline: 'Pure silent electric glide',
      powerSplit: '0% V12 / 100% Electric',
      speedReserve: '99% Power Reserve',
      color: '#38bdf8',
    },
    {
      id: 'comfort',
      name: 'Sovereign Comfort',
      tagline: 'Hydraulic Magic Carpet Ride',
      powerSplit: '40% V12 / 60% Electric',
      speedReserve: '94% Power Reserve',
      color: '#c084fc',
    },
    {
      id: 'hyper',
      name: 'Continuum Hyper (3,000 HP)',
      tagline: 'Full deployment with kinetic underglow',
      powerSplit: '100% V12 + Quad-Motor Boost',
      speedReserve: '3,000 HP Active Surge',
      color: '#a855f7',
    },
    {
      id: 'grandtour',
      name: 'Alpine Grand Tour',
      tagline: 'Dynamic damping & all-wheel steer',
      powerSplit: '70% V12 / 30% Electric',
      speedReserve: '88% Power Reserve',
      color: '#f59e0b',
    },
  ];

  const currentMode = modes.find((m) => m.id === driveMode) || modes[2];

  const cockpitImages = {
    dashboard: '/media/tech-dashboard.jpg',
    sunroof: '/media/inside-sunroof.jpg',
    driver: '/media/driving-seats.jpg',
  };

  return (
    <section id="cockpit" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-400 mb-3">
          <Navigation className="w-3.5 h-3.5" />
          <span>Sanctuary & Cockpit Helm</span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          Cockpit Architecture & Telemetry
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
          Open-pore Santos Palisander wood, dual physical Patek Philippe tourbillons, digital glass gauges, and the electrochromic celestial starlight canopy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Cockpit Visualizer Canvas (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden amethyst-glass border border-purple-800/40 shadow-2xl">
            {/* Image Canvas */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={cockpitImages[activeCockpitTab]}
                alt="Cockpit Interior View"
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
              />

              {/* Dynamic Ambient Light Glow simulation along edges */}
              <div
                className="absolute inset-0 pointer-events-none transition-colors duration-700"
                style={{
                  boxShadow: `inset 0 0 70px ${ambientColor}44, 0 0 40px ${ambientColor}33`,
                }}
              />

              {/* Interactive Telemetry Overlay for Dashboard */}
              {activeCockpitTab === 'dashboard' && (
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/30 text-[11px] text-purple-200 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: currentMode.color }}
                    />
                    <span className="font-semibold uppercase tracking-wider">{currentMode.name}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/30 text-[11px] font-mono text-white">
                    72°F CLIMATE • PEBBLE BEACH GPS
                  </div>
                </div>
              )}

              {/* Sunroof Constellation Overlay info */}
              {activeCockpitTab === 'sunroof' && (
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/30 text-xs text-purple-200 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Fiber-Optic Sky-Lounge Constellation: 1,600 Stars</span>
                  </span>
                  <span className="font-mono text-purple-300 font-bold">{sunroofOpacity}% Opacity</span>
                </div>
              )}
            </div>

            {/* View Switcher Pills */}
            <div className="p-4 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-purple-950/40 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCockpitTab('dashboard')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeCockpitTab === 'dashboard'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Dashboard & Horology
                </button>
                <button
                  onClick={() => setActiveCockpitTab('sunroof')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeCockpitTab === 'sunroof'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Starlight Sunroof Vista
                </button>
                <button
                  onClick={() => setActiveCockpitTab('driver')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeCockpitTab === 'driver'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Driver Throne & Helm
                </button>
              </div>

              <div className="text-[11px] text-gray-400 italic">
                Patek Philippe Pour Continuum
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Cockpit Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Drive Mode Selector */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <Gauge className="w-4 h-4 text-purple-400" />
              <span>Drive Dynamics & Powertrain Mode</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modes.map((m) => {
                const isSelected = driveMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setDriveMode(m.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-purple-400 bg-purple-900/40 shadow-lg shadow-purple-950/60'
                        : 'border-purple-900/30 hover:border-purple-700/50 bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{m.name.split(' (')[0]}</span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: m.color }}
                      />
                    </div>
                    <p className="text-[10px] text-gray-400 line-clamp-1">{m.tagline}</p>
                    <div className="mt-2 text-[9px] uppercase tracking-wider text-purple-300 font-mono">
                      {m.powerSplit}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ambient Lighting Controller */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                <Sun className="w-4 h-4 text-purple-400" />
                <span>Interior Ambient Illumination</span>
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-purple-300 font-mono">
                Fiber-Optic Matrix
              </span>
            </div>

            <div className="flex items-center gap-3">
              {[
                { name: 'Royal Amethyst', hex: '#9333ea' },
                { name: 'Arcadia Violet', hex: '#c084fc' },
                { name: 'Electric Cyan', hex: '#38bdf8' },
                { name: 'Alpine Frost', hex: '#ffffff' },
                { name: 'Golden Amber', hex: '#f59e0b' },
              ].map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setAmbientColor(swatch.hex)}
                  className={`w-9 h-9 rounded-full transition-transform flex items-center justify-center border ${
                    ambientColor === swatch.hex
                      ? 'scale-110 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                      : 'border-white/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                  title={swatch.name}
                />
              ))}
            </div>
          </div>

          {/* Electrochromic Sunroof Opacity Slider */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                <Moon className="w-4 h-4 text-purple-400" />
                <span>Electrochromic Sky-Lounge Glass</span>
              </h3>
              <span className="text-xs font-mono text-purple-300 font-bold">{sunroofOpacity}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sunroofOpacity}
              onChange={(e) => {
                setSunroofOpacity(parseInt(e.target.value));
                if (activeCockpitTab !== 'sunroof') setActiveCockpitTab('sunroof');
              }}
              className="w-full h-1.5 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />

            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-widest">
              <span>Crystal Clear Sky (2% tint)</span>
              <span>Constellation Night (100% Starlight)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
