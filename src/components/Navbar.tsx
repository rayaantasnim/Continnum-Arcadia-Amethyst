import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sparkles } from 'lucide-react';
import { SoundscapePlayer } from './SoundscapePlayer';

interface NavbarProps {
  onOpenCommission: () => void;
  onOpenSpecsDocket: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommission, onOpenSpecsDocket }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cinema', href: '#cinema' },
    { label: 'Galleria', href: '#galleria' },
    { label: 'Atelier Configurator', href: '#atelier' },
    { label: 'Engineering Anatomy', href: '#anatomy' },
    { label: 'Cockpit & Tech', href: '#cockpit' },
    { label: 'Horology Suite', href: '#horology' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'amethyst-glass shadow-2xl py-3 border-b border-purple-900/40 backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border border-purple-500/40 overflow-hidden shadow-lg shadow-purple-950/40 group-hover:border-purple-400 transition-colors">
            <img
              src="/media/logo-custom.jpg"
              alt="Continuum Arcadia Insignia"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-luxury text-sm md:text-base font-bold tracking-[0.22em] text-white">
                CONTINUUM
              </span>
              <span className="text-[10px] tracking-widest text-purple-400 font-semibold px-1.5 py-0.5 rounded border border-purple-700/50 uppercase">
                Arcadia
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400">
              Amethyst Coachbuild
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-gray-300 hover:text-purple-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <SoundscapePlayer />

          <button
            onClick={onOpenSpecsDocket}
            className="text-xs uppercase tracking-widest px-3 py-1.5 text-purple-200 hover:text-white border border-purple-800/40 hover:border-purple-600 rounded-full transition-all"
            title="View Specifications Docket"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Dossier</span>
            </span>
          </button>

          <button
            onClick={onOpenCommission}
            className="text-xs uppercase tracking-[0.16em] font-medium px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Commission</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <SoundscapePlayer />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-lg amethyst-glass"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden amethyst-glass border-b border-purple-900/50 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-gray-200 hover:text-purple-300 py-2 border-b border-purple-950/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecsDocket();
              }}
              className="w-full text-xs uppercase tracking-widest py-2.5 text-purple-200 border border-purple-700/50 rounded-lg text-center"
            >
              Technical Dossier & Docket
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="w-full text-xs uppercase tracking-widest py-3 font-semibold bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-lg text-center shadow-md shadow-purple-950"
            >
              Inquire for Commission No. 01
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
