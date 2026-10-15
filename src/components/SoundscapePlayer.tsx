import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const SoundscapePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);

  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Low frequency luxury warm hum (65Hz - V12 idle warmth)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65.4, ctx.currentTime);

      // Harmonious whisper overtone (130.8Hz)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(130.8, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, ctx.currentTime);
      filterRef.current = filter;

      const oscGain1 = ctx.createGain();
      oscGain1.gain.setValueAtTime(0.15, ctx.currentTime);

      const oscGain2 = ctx.createGain();
      oscGain2.gain.setValueAtTime(0.04, ctx.currentTime);

      osc1.connect(oscGain1);
      osc2.connect(oscGain2);
      oscGain1.connect(filter);
      oscGain2.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
      osc1Ref.current = osc1;
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch {
      // Audio autoplay policy handled gracefully
    }
  };

  const stopAudio = () => {
    try {
      if (osc1Ref.current) {
        osc1Ref.current.stop();
        osc1Ref.current.disconnect();
        osc1Ref.current = null;
      }
      if (osc2Ref.current) {
        osc2Ref.current.stop();
        osc2Ref.current.disconnect();
        osc2Ref.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleSoundscape = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full amethyst-glass text-xs text-purple-200 border border-purple-900/40">
      <button
        onClick={toggleSoundscape}
        className="flex items-center gap-1.5 hover:text-white transition-colors"
        title={isPlaying ? "Mute Acoustic Atmosphere" : "Enable Acoustic Atmosphere"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="hidden sm:inline">Acoustic Aura</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-gray-400" />
            <span className="hidden sm:inline text-gray-400">Atmosphere Muted</span>
          </>
        )}
      </button>

      {isPlaying && (
        <div className="flex items-center gap-1.5 pl-1 border-l border-purple-800/40">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <input
            type="range"
            min="0.05"
            max="0.5"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-14 h-1 accent-purple-500 bg-purple-950 rounded cursor-pointer"
            title="Atmosphere Volume"
          />
        </div>
      )}
    </div>
  );
};
