import React, { useState } from 'react';
import {
  EXTERIOR_COLOR_OPTIONS,
  SPIRIT_OPTIONS,
  INTERIOR_OPTIONS,
  LUGGAGE_OPTIONS,
} from '../data/carData';
import { ConfigState } from '../types';
import { Check, Sparkles, FileText, ArrowRight, ShieldCheck, Palette, Armchair, Briefcase, Watch } from 'lucide-react';

interface ConfiguratorSectionProps {
  onOpenCommission: (configState: ConfigState) => void;
  onOpenSpecsDocket: (configState: ConfigState) => void;
}

export const ConfiguratorSection: React.FC<ConfiguratorSectionProps> = ({
  onOpenCommission,
  onOpenSpecsDocket,
}) => {
  const [config, setConfig] = useState<ConfigState>({
    exteriorColor: 'continuum-morph',
    spiritOfEcstasy: 'illuminated-amethyst',
    interiorLayout: 'couch-lounge',
    luggageOption: 'fitted-suite',
    wheels: 'turbofan-23',
    horologyIncluded: true,
    engravedPlaqueName: 'Commission No. 01 — Continuum Arcadia',
  });

  const [activeTab, setActiveTab] = useState<'exterior' | 'interior' | 'details' | 'horology'>('exterior');

  const selectedExterior = EXTERIOR_COLOR_OPTIONS.find((c) => c.id === config.exteriorColor) || EXTERIOR_COLOR_OPTIONS[0];
  const selectedSpirit = SPIRIT_OPTIONS.find((s) => s.id === config.spiritOfEcstasy) || SPIRIT_OPTIONS[0];
  const selectedInterior = INTERIOR_OPTIONS.find((i) => i.id === config.interiorLayout) || INTERIOR_OPTIONS[0];
  const selectedLuggage = LUGGAGE_OPTIONS.find((l) => l.id === config.luggageOption) || LUGGAGE_OPTIONS[0];

  // Dynamic preview image based on active customization tab or choices
  let currentPreview = selectedExterior.previewImage;
  let previewBadge = selectedExterior.name;

  if (activeTab === 'interior') {
    currentPreview = selectedInterior.previewImage;
    previewBadge = selectedInterior.name;
  } else if (activeTab === 'details') {
    currentPreview = selectedLuggage.previewImage;
    previewBadge = selectedLuggage.name;
  } else if (activeTab === 'horology') {
    currentPreview = '/media/patek-philippe-continuum.jpg';
    previewBadge = 'Patek Philippe pour Continuum';
  }

  // Generate unique commission code
  const buildCode = `CAA-${config.exteriorColor.toUpperCase().slice(0, 4)}-${config.interiorLayout.toUpperCase().slice(0, 4)}-${config.horologyIncluded ? 'PP01' : 'STD'}`;

  return (
    <section id="atelier" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atelier Bespoke Studio</span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          Commission Configurator
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
          Tailor your one-of-one hyper-luxury coachbuild commission. Harmonize paint finishes, the illuminated crystal Spirit of Ecstasy, rear lounge seating, and Patek Philippe horology pairing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Live Visualizer (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden amethyst-glass border border-purple-800/40 shadow-2xl group">
            {/* Visualizer Image */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                key={currentPreview}
                src={currentPreview}
                alt={previewBadge}
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-black/80 text-purple-300 border border-purple-500/40 backdrop-blur-md">
                  {previewBadge}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-purple-950/80 text-purple-200 border border-purple-700/50 backdrop-blur-md">
                  {buildCode}
                </span>
              </div>

              {/* Quick tab switcher pill on preview */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/70 backdrop-blur-md border border-purple-900/60">
                  <button
                    onClick={() => setActiveTab('exterior')}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all flex items-center gap-1 ${
                      activeTab === 'exterior' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3 h-3" />
                    <span>Exterior</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('interior')}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all flex items-center gap-1 ${
                      activeTab === 'interior' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Armchair className="w-3 h-3" />
                    <span>Interior</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all flex items-center gap-1 ${
                      activeTab === 'details' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Briefcase className="w-3 h-3" />
                    <span>Luggage</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('horology')}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all flex items-center gap-1 ${
                      activeTab === 'horology' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Watch className="w-3 h-3" />
                    <span>Horology</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Inlaid Plaque Simulation */}
            <div className="p-4 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-purple-950/40 border-t border-purple-900/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="text-[11px] uppercase tracking-widest text-gray-300">
                  Engraved Sill Plate:
                </span>
                <span className="text-xs font-serif-luxury font-semibold text-purple-200 italic">
                  "{config.engravedPlaqueName}"
                </span>
              </div>
            </div>
          </div>

          {/* Quick Specs Footnote */}
          <div className="p-4 rounded-2xl amethyst-glass border border-purple-900/30 flex items-center justify-between text-xs text-gray-400 font-light">
            <span>Hand-commissioned in Goodwood & Geneva</span>
            <span className="text-purple-300 font-medium">Bespoke 1-of-1 Build Allocation</span>
          </div>
        </div>

        {/* Right: Atelier Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Section 1: Exterior Paint Finishes */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                <Palette className="w-4 h-4 text-purple-400" />
                <span>Coachwork Palette</span>
              </h3>
              <span className="text-[10px] text-purple-300 uppercase tracking-widest">
                {selectedExterior.badge || 'Curated'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {EXTERIOR_COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setConfig({ ...config, exteriorColor: opt.id });
                    setActiveTab('exterior');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    config.exteriorColor === opt.id
                      ? 'border-purple-400 bg-purple-900/40 shadow-lg shadow-purple-950/50'
                      : 'border-purple-900/30 hover:border-purple-700/50 bg-black/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div
                      className="w-5 h-5 rounded-full border border-white/30 shrink-0 shadow-sm"
                      style={{ background: opt.colorCode }}
                    />
                    <span className="text-xs font-medium text-white truncate">
                      {opt.name.split(' ')[0]}
                    </span>
                    {config.exteriorColor === opt.id && (
                      <Check className="w-3.5 h-3.5 text-purple-400 ml-auto shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-gray-400 line-clamp-1">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Spirit of Ecstasy */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Spirit of Ecstasy Mascot</span>
            </h3>

            <div className="space-y-2">
              {SPIRIT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setConfig({ ...config, spiritOfEcstasy: opt.id })}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    config.spiritOfEcstasy === opt.id
                      ? 'border-purple-400 bg-purple-900/40'
                      : 'border-purple-900/30 hover:border-purple-700/50 bg-black/30'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold text-white">{opt.name}</div>
                    <div className="text-[10px] text-gray-400">{opt.description}</div>
                  </div>
                  {config.spiritOfEcstasy === opt.id && (
                    <Check className="w-4 h-4 text-purple-400 shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Interior Sanctuary Configuration */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <Armchair className="w-4 h-4 text-purple-400" />
              <span>Rear Sanctuary Seating</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INTERIOR_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setConfig({ ...config, interiorLayout: opt.id });
                    setActiveTab('interior');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    config.interiorLayout === opt.id
                      ? 'border-purple-400 bg-purple-900/40'
                      : 'border-purple-900/30 hover:border-purple-700/50 bg-black/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">{opt.name}</span>
                    {config.interiorLayout === opt.id && (
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-gray-400 line-clamp-2">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Luggage & Boot */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <h3 className="font-luxury text-sm uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span>Boot & Luggage Suite</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {LUGGAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setConfig({ ...config, luggageOption: opt.id });
                    setActiveTab('details');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    config.luggageOption === opt.id
                      ? 'border-purple-400 bg-purple-900/40'
                      : 'border-purple-900/30 hover:border-purple-700/50 bg-black/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">{opt.name}</span>
                    {config.luggageOption === opt.id && (
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-gray-400 line-clamp-2">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Horological Pairing & Custom Plaque */}
          <div className="p-6 rounded-2xl amethyst-glass border border-purple-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Watch className="w-4 h-4 text-purple-400" />
                <span className="font-luxury text-sm uppercase tracking-widest text-white font-semibold">
                  Patek Philippe Pour Continuum
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.horologyIncluded}
                  onChange={(e) => {
                    setConfig({ ...config, horologyIncluded: e.target.checked });
                    if (e.target.checked) setActiveTab('horology');
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-purple-950 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            <p className="text-[11px] text-gray-400">
              One-of-one Grand Complications skeletonized tourbillon chronometer with presentation casket and titanium key fob.
            </p>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                Custom Inscription for Treadplate / Plaque:
              </label>
              <input
                type="text"
                value={config.engravedPlaqueName}
                onChange={(e) => setConfig({ ...config, engravedPlaqueName: e.target.value })}
                placeholder="e.g. Specially Commissioned For..."
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onOpenSpecsDocket(config)}
              className="flex-1 py-3 px-4 rounded-xl amethyst-glass hover:bg-purple-900/40 text-purple-200 hover:text-white border border-purple-700/50 text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Generate Spec Docket</span>
            </button>

            <button
              onClick={() => onOpenCommission(config)}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs uppercase tracking-wider font-semibold shadow-xl shadow-purple-950/60 transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Atelier Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
