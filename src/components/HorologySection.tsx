import React, { useState, useEffect } from 'react';
import { Watch, Key, Sparkles, Shield, Clock, Compass } from 'lucide-react';

export const HorologySection: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [activeHorologyView, setActiveHorologyView] = useState<'watch' | 'casket' | 'fob'>('watch');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = (((hours % 12) + minutes / 60) / 12) * 360;

  const views = {
    watch: {
      image: '/media/patek-philippe-continuum.jpg',
      title: 'Patek Philippe Grand Complications — Pour Continuum',
      subtitle: 'Piece Unique No. 01 Skeletonized Tourbillon Minute Repeater',
      description: 'Specially commissioned alongside the Continuum Arcadia Amethyst coachbuild. Features an open-worked skeleton caliber, platinum 950 casing, purple alligator leather strap, and instantaneous perpetual calendar.',
      bullets: [
        'Caliber CH 29-535 PS Q skeletonized manual movement',
        'Tourbillon escapement rotating at 1 rev per minute',
        'Minute repeater with twin cathedral chime gongs',
        'Hand-chamfered bridges with black-polished steel screws',
      ],
    },
    casket: {
      image: '/media/key-fob.jpg',
      title: 'Bespoke Presentation Casket & Key Fob Suite',
      subtitle: 'Solid Santos Palisander Veneer & Aerospace Titanium',
      description: 'The master delivery casket hand-fashioned from the identical Santos Palisander log used across the dashboard facia, lined in Porcelain bullhide leather with an inductive watch winder and key charging bed.',
      bullets: [
        'Monogrammed Calatrava & Continuum cross insignia',
        'Built-in ultra-silent Swiss watch winder motor',
        'Integrated wireless inductive charging pad',
        'Deep-embossed inscription on interior leather lid',
      ],
    },
    fob: {
      image: '/media/watch-detail.jpg',
      title: 'Kinetic Titanium & Wood Key Fob',
      subtitle: 'Milled Titanium & Amethyst Light Pulse Bar',
      description: 'A physical sculpture for the palm. Milled from solid titanium with dual open-pore Santos Palisander timber inserts and a central laser-cut conduit that pulses amethyst luminescence.',
      bullets: [
        'Haptic vehicle summoning and dihedral door remote release',
        'Ultra-wideband proximity encryption chip',
        'Hermetically sealed waterproof construction',
        'Pulsing amethyst standby LED beacon',
      ],
    },
  };

  const current = views[activeHorologyView];

  return (
    <section id="horology" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-400 mb-3">
          <Watch className="w-3.5 h-3.5" />
          <span>Haute Horlogerie Partnership</span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          Patek Philippe pour Continuum
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
          A marriage of mechanical engineering mastery. Paired with a one-of-one skeletonized Grand Complications timepiece, kinetic titanium key fob, and bespoke Santos Palisander casket.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Media & Live Clock (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden amethyst-glass border border-purple-800/40 shadow-2xl bg-black">
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Floating Live Mechanical Clock Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-3 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-purple-600/40 shadow-xl">
                {/* Mechanical Clock Dial */}
                <div className="relative w-12 h-12 rounded-full border-2 border-purple-400/60 bg-[#120a1f] flex items-center justify-center shadow-inner">
                  {/* Hour markers */}
                  <div className="absolute top-0.5 w-0.5 h-1.5 bg-purple-300" />
                  <div className="absolute bottom-0.5 w-0.5 h-1.5 bg-purple-300" />
                  <div className="absolute left-0.5 w-1.5 h-0.5 bg-purple-300" />
                  <div className="absolute right-0.5 w-1.5 h-0.5 bg-purple-300" />

                  {/* Hour Hand */}
                  <div
                    className="absolute w-0.5 h-3 bg-white origin-bottom rounded-full"
                    style={{ transform: `rotate(${hourDegrees}deg) translateY(-50%)` }}
                  />
                  {/* Minute Hand */}
                  <div
                    className="absolute w-0.5 h-4.5 bg-purple-200 origin-bottom rounded-full"
                    style={{ transform: `rotate(${minuteDegrees}deg) translateY(-50%)` }}
                  />
                  {/* Second Hand */}
                  <div
                    className="absolute w-[1px] h-5 bg-purple-400 origin-bottom shadow-sm"
                    style={{ transform: `rotate(${secondDegrees}deg) translateY(-50%)` }}
                  />
                  {/* Center pinion */}
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-white z-10" />
                </div>

                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Geneva Time</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-white">
                    {time.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>

            {/* View Selector Pills */}
            <div className="p-4 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-purple-950/40 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveHorologyView('watch')}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeHorologyView === 'watch'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Watch className="w-3.5 h-3.5" />
                  <span>Grand Complication</span>
                </button>
                <button
                  onClick={() => setActiveHorologyView('casket')}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeHorologyView === 'casket'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Presentation Casket</span>
                </button>
                <button
                  onClick={() => setActiveHorologyView('fob')}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeHorologyView === 'fob'
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Kinetic Key Fob</span>
                </button>
              </div>

              <span className="text-[10px] uppercase tracking-widest text-purple-300 font-mono">
                Piece Unique 01/01
              </span>
            </div>
          </div>
        </div>

        {/* Right: Horological Story & Specifications (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 text-[10px] uppercase tracking-widest text-purple-300 border border-purple-800">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Project Continuum Commission</span>
            </div>

            <h3 className="font-luxury text-2xl font-bold text-white tracking-wide">
              {current.title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-purple-300 font-medium">
              {current.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2">
              {current.bullets.map((b, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-black/40 border border-purple-950 text-xs text-purple-200 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span className="font-light">{b}</span>
                </div>
              ))}
            </div>

            {/* Horological Heritage note */}
            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px] text-gray-400">
              <span>Handcrafted in Geneva, Switzerland</span>
              <span className="text-purple-300 font-medium">Calatrava Hallmarked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
