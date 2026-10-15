import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Shield, Send } from 'lucide-react';
import { ConfigState } from '../types';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: ConfigState;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryLocation: 'Monaco Private Port',
    customNotes: '',
    engravingText: config?.engravedPlaqueName || 'Commission No. 01 — Continuum Arcadia',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl rounded-3xl amethyst-glass border border-purple-700/50 shadow-2xl overflow-hidden bg-[#0e0a1a] text-white">
        {/* Header */}
        <div className="p-6 border-b border-purple-900/50 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="font-luxury text-base sm:text-lg font-bold tracking-[0.14em] uppercase text-white">
              Private Commission Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-purple-900/50 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-900/60 border border-purple-400/50 mx-auto flex items-center justify-center text-purple-300 shadow-[0_0_30px_#9333ea]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-luxury text-2xl font-bold tracking-wider text-white uppercase">
                Commission Request Received
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <span className="text-purple-300 font-semibold">{formData.name || 'Patron'}</span>.
                Your confidential dossier for the <strong className="text-white">Continuum Arcadia Amethyst</strong> allocation has been transferred to the Head of Bespoke Coachbuilding.
              </p>
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 text-xs text-purple-200 text-left max-w-md mx-auto space-y-1">
                <div><strong>Delivery Destination:</strong> {formData.deliveryLocation}</div>
                <div><strong>Inscribed Sill Plate:</strong> "{formData.engravingText}"</div>
                <div><strong>Liaison Response:</strong> Within 12 hours via encrypted channel</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                The Continuum Arcadia Amethyst is strictly limited to an exclusive coachbuild allocation. Please submit your patron credentials for private consultation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                    Client Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Harrington / Elena Vance"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patron@domain.com"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                    Direct Contact / Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 20 7946 0912"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                    Preferred Handover Atelier
                  </label>
                  <select
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/80 border border-purple-800/50 text-xs text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="Goodwood Coachbuild Studio, UK">Goodwood Coachbuild Studio, UK</option>
                    <option value="Monaco Private Port, Monte Carlo">Monaco Private Port, Monte Carlo</option>
                    <option value="Pebble Beach Concours, California">Pebble Beach Concours, California</option>
                    <option value="Geneva Haute Horlogerie Salon, Switzerland">Geneva Haute Horlogerie Salon, Switzerland</option>
                    <option value="Dubai International Financial Centre, UAE">Dubai DIFC Private Suite, UAE</option>
                    <option value="Tokyo Ginza Atelier, Japan">Tokyo Ginza Atelier, Japan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                  Custom Treadplate & Plaque Inscription
                </label>
                <input
                  type="text"
                  value={formData.engravingText}
                  onChange={(e) => setFormData({ ...formData, engravingText: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-1">
                  Bespoke Requests & Special Commissions
                </label>
                <textarea
                  rows={3}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  placeholder="Specific family crest embroidery, leather dyed to sample, custom humidor specifications..."
                  className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-purple-800/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span>Encrypted Client Confidentiality</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs uppercase tracking-wider font-semibold shadow-lg shadow-purple-950 transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
