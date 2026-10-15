import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Compass, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenCommission: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onOpenCommission }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="cinema" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Reel */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-80 scale-105 animate-pulse-slow' : 'opacity-0'
          }`}
          src="/media/hero-banner-video.mp4"
        />

        {/* Fallback Static Hero if video still buffering */}
        {!isVideoLoaded && (
          <img
            src="/media/external-villa-gullwing.jpg"
            alt="Continuum Arcadia Amethyst"
            className="w-full h-full object-cover opacity-70"
          />
        )}

        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08070d] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08070d]/30 to-[#08070d]/90 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center flex flex-col items-center">
        {/* Coachbuild Commission Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full amethyst-glass text-xs uppercase tracking-[0.25em] text-purple-300 border border-purple-500/30 mb-6 shadow-lg shadow-purple-950/50 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Bespoke Coachbuild • Commission No. 01 of 01</span>
        </div>

        {/* Primary Title */}
        <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.14em] text-white uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          <span className="block">CONTINUUM</span>
          <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-indigo-300 bg-clip-text text-transparent">
            ARCADIA AMETHYST
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-purple-100/80 font-light tracking-wide leading-relaxed">
          The sovereign fusion of automotive haute-couture, aerospace graphene architecture, and Swiss grand complication horology.
        </p>

        {/* Key Metrics / Quick Specs Ribbon */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl">
          <div className="amethyst-glass p-3 sm:p-4 rounded-xl text-center border border-purple-900/40">
            <div className="font-luxury text-xl sm:text-2xl font-bold text-white">3,000 HP</div>
            <div className="text-[10px] uppercase tracking-widest text-purple-300/80 mt-1">Twin-Turbo V12 Hybrid</div>
          </div>
          <div className="amethyst-glass p-3 sm:p-4 rounded-xl text-center border border-purple-900/40">
            <div className="font-luxury text-xl sm:text-2xl font-bold text-white">2.1 SEC</div>
            <div className="text-[10px] uppercase tracking-widest text-purple-300/80 mt-1">0–100 km/h (0–62 mph)</div>
          </div>
          <div className="amethyst-glass p-3 sm:p-4 rounded-xl text-center border border-purple-900/40">
            <div className="font-luxury text-xl sm:text-2xl font-bold text-white">GRAPHENE</div>
            <div className="text-[10px] uppercase tracking-widest text-purple-300/80 mt-1">Structural Monocoque</div>
          </div>
          <div className="amethyst-glass p-3 sm:p-4 rounded-xl text-center border border-purple-900/40">
            <div className="font-luxury text-xl sm:text-2xl font-bold text-white">PATEK PHILIPPE</div>
            <div className="text-[10px] uppercase tracking-widest text-purple-300/80 mt-1">Grand Complications</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#atelier"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-purple-950/60 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Enter Bespoke Atelier</span>
          </a>

          <button
            onClick={onOpenCommission}
            className="px-7 py-3.5 rounded-full amethyst-glass hover:bg-purple-900/30 text-white text-xs sm:text-sm uppercase tracking-[0.2em] border border-purple-500/40 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Acquire Commission</span>
          </button>
        </div>

        {/* Video Reel HUD Controls */}
        <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full amethyst-glass border border-purple-800/40 text-xs text-gray-300">
          <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold mr-1">
            Reel 4K
          </span>
          <button
            onClick={togglePlay}
            className="p-1.5 hover:text-white rounded-full hover:bg-purple-900/50 transition-colors"
            title={isPlaying ? "Pause Cinema Reel" : "Play Cinema Reel"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 hover:text-white rounded-full hover:bg-purple-900/50 transition-colors"
            title={isMuted ? "Unmute Reel" : "Mute Reel"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 hover:text-white rounded-full hover:bg-purple-900/50 transition-colors"
            title="Fullscreen Cinema"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <button
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-400 hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to exploration"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
