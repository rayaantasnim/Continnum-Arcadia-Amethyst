import React, { useState, useEffect } from 'react';
import { MEDIA_GALLERY } from '../data/carData';
import { MediaItem } from '../types';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, Filter } from 'lucide-react';

export const GalleriaSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Galleria (34 Masterworks)' },
    { id: 'exterior', label: 'Exterior & Aero' },
    { id: 'interior', label: 'Interior Sanctuary' },
    { id: 'environment', label: 'Environments' },
    { id: 'engineering', label: 'Powertrain & Core' },
    { id: 'horology', label: 'Bespoke & Horology' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? MEDIA_GALLERY
    : MEDIA_GALLERY.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMedia) return;
      if (e.key === 'Escape') setActiveMedia(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMedia, filteredItems]);

  const handleNext = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeMedia.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveMedia(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeMedia.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveMedia(filteredItems[prevIndex]);
  };

  return (
    <section id="galleria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Masterworks & Curated Studies</span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          The Galleria
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
          Experience every angle of the Arcadia Amethyst — from the dihedral doors and illuminated crystal Spirit of Ecstasy to the twin-turbo hybrid heart and hand-carved Santos Palisander cockpit.
        </p>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 border border-purple-400'
                  : 'amethyst-glass text-gray-300 hover:text-white hover:border-purple-600/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveMedia(item)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer amethyst-glass border border-purple-900/30 hover:border-purple-500/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/60 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Category & Highlight Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-black/70 backdrop-blur-md rounded-full text-purple-300 border border-purple-500/30">
                  {item.category}
                </span>
                {item.highlight && (
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-purple-900/80 backdrop-blur-md rounded-full text-white border border-purple-400/30 hidden sm:inline">
                    {item.highlight}
                  </span>
                )}
              </div>

              {/* View Overlay Button */}
              <div className="absolute bottom-3 right-3 p-2 rounded-full amethyst-glass text-purple-200 group-hover:text-white group-hover:scale-110 transition-all">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Card Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-luxury text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {item.details && (
                <div className="mt-4 pt-3 border-t border-purple-900/40 flex flex-wrap gap-1.5">
                  {item.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-purple-300/80 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/30"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full amethyst-glass hover:bg-purple-900/60 text-gray-300 hover:text-white transition-colors"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full amethyst-glass hover:bg-purple-900/60 text-gray-300 hover:text-white transition-colors hidden sm:block"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full amethyst-glass hover:bg-purple-900/60 text-gray-300 hover:text-white transition-colors hidden sm:block"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Container */}
          <div className="max-w-5xl w-full flex flex-col items-center max-h-[90vh]">
            <div className="relative w-full rounded-2xl overflow-hidden border border-purple-900/50 shadow-2xl bg-black">
              <img
                src={activeMedia.src}
                alt={activeMedia.title}
                className="w-full max-h-[68vh] object-contain mx-auto"
              />
            </div>

            {/* Modal Detail Bar */}
            <div className="w-full mt-4 p-4 rounded-xl amethyst-glass border border-purple-900/40 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                    {activeMedia.category}
                  </span>
                  <h3 className="font-luxury text-lg font-bold text-white tracking-wide">
                    {activeMedia.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-300 font-light max-w-2xl">
                  {activeMedia.description}
                </p>
              </div>

              {activeMedia.details && (
                <div className="flex flex-wrap sm:flex-col gap-1 text-[11px] text-purple-300">
                  {activeMedia.details.map((d, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
