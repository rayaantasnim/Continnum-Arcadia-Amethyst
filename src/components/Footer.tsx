import React from 'react';
import { ArrowUp, Sparkles, Shield, Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-950/70 bg-[#06040a] relative z-10 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-950/60">
          {/* Brand Colophon (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-purple-500/40 overflow-hidden shadow-lg shadow-purple-950/50">
                <img
                  src="/media/logo-custom.jpg"
                  alt="Continuum Arcadia Insignia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-luxury text-base font-bold tracking-[0.2em] text-white">
                  CONTINUUM
                </span>
                <span className="text-[10px] tracking-widest text-purple-400 font-semibold ml-2 px-1.5 py-0.5 rounded border border-purple-700/50 uppercase">
                  Arcadia Amethyst
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Commission No. 01 of 01. The sovereign intersection of bespoke coachbuild craftsmanship, 3,000 HP twin-turbo V12 hybrid engineering, and Patek Philippe Grand Complications haute horlogerie.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-purple-300">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Goodwood Bespoke Division &bull; Geneva Atelier</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-luxury text-xs uppercase tracking-widest text-white font-semibold">
              The Collection
            </h4>
            <ul className="text-xs space-y-2 font-light">
              <li>
                <a href="#cinema" className="hover:text-purple-300 transition-colors">
                  Cinema Reel 4K
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-purple-300 transition-colors">
                  Visual Galleria (34 Masterworks)
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-purple-300 transition-colors">
                  Atelier Configurator
                </a>
              </li>
              <li>
                <a href="#anatomy" className="hover:text-purple-300 transition-colors">
                  Engineering Anatomy Cutaway
                </a>
              </li>
              <li>
                <a href="#cockpit" className="hover:text-purple-300 transition-colors">
                  Cockpit Sanctuary & Starlight
                </a>
              </li>
              <li>
                <a href="#horology" className="hover:text-purple-300 transition-colors">
                  Patek Philippe Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Essence (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-luxury text-xs uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Specification Highlights</span>
            </h4>
            <div className="text-xs space-y-1.5 text-gray-400 font-light">
              <div className="flex justify-between border-b border-purple-950/40 pb-1">
                <span>Powertrain:</span>
                <span className="text-white font-medium">3,000 HP V12 Hybrid</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/40 pb-1">
                <span>Acceleration:</span>
                <span className="text-white font-medium">0–100 in 2.1s</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/40 pb-1">
                <span>Chassis:</span>
                <span className="text-white font-medium">Graphene Monocoque</span>
              </div>
              <div className="flex justify-between border-b border-purple-950/40 pb-1">
                <span>Suspension:</span>
                <span className="text-white font-medium">Active-Morph Hydropneumatic</span>
              </div>
              <div className="flex justify-between">
                <span>Horology:</span>
                <span className="text-purple-300 font-medium">Patek Philippe Piece Unique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Continuum Arcadia Amethyst. All rights reserved. Bespoke Coachbuild Concept.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors p-2 rounded-full amethyst-glass"
            title="Back to Top"
          >
            <span className="text-[10px] uppercase tracking-wider font-semibold">Ascend</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
