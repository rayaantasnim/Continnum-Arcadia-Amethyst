import React from 'react';
import { X, Printer, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ConfigState } from '../types';

interface SpecificationSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: ConfigState;
}

export const SpecificationSheetModal: React.FC<SpecificationSheetModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 rounded-3xl amethyst-glass border border-purple-700/50 shadow-2xl overflow-hidden bg-[#0d0917] text-white">
        {/* Top Header Controls */}
        <div className="p-6 border-b border-purple-900/50 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-purple-500/40 overflow-hidden">
              <img
                src="/media/logo-custom.jpg"
                alt="Continuum Arcadia Monogram"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-luxury text-lg font-bold tracking-[0.14em] uppercase text-white">
                Official Commission Dossier & Docket
              </h3>
              <p className="text-[10px] tracking-widest text-purple-400 uppercase">
                Coachbuild Commission No. 01 of 01 • Master Technical Record
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full amethyst-glass hover:bg-purple-900/60 text-xs text-purple-200 border border-purple-700/50 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Docket</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-purple-900/50 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Docket Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Certificate Header Banner */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-950/60 via-purple-900/20 to-black/60 border border-purple-800/40">
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-300 font-semibold">
              Bespoke Certificate of Authentication
            </span>
            <h2 className="font-luxury text-2xl sm:text-3xl font-bold tracking-[0.16em] uppercase text-white mt-1">
              CONTINUUM ARCADIA AMETHYST
            </h2>
            <p className="text-xs text-gray-300 mt-2 font-light max-w-xl mx-auto">
              This technical docket certifies the bespoke coachbuild architecture, powertrain engineering, and horological commission executed under Project Continuum.
            </p>
            {config?.engravedPlaqueName && (
              <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-black/70 border border-purple-500/40 text-xs font-serif-luxury text-purple-200 italic">
                Inscribed: "{config.engravedPlaqueName}"
              </div>
            )}
          </div>

          {/* Grid of Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Powertrain & Dynamics */}
            <div className="p-5 rounded-2xl bg-black/40 border border-purple-900/40 space-y-3">
              <h4 className="font-luxury text-xs uppercase tracking-widest text-purple-300 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Powertrain & Performance</span>
              </h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Combustion Core:</span>
                  <span className="font-semibold text-white">6.75L Twin-Turbo V12</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Electric Propulsion:</span>
                  <span className="font-semibold text-white">Quad Axial-Flux Drive Units</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Total System Power:</span>
                  <span className="font-bold text-purple-300">3,000 HP / 2,206 kW</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Peak System Torque:</span>
                  <span className="font-semibold text-white">3,400 Nm (2,507 lb-ft)</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Acceleration (0–100 km/h):</span>
                  <span className="font-semibold text-white">2.1 Seconds</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Maximum Governed Speed:</span>
                  <span className="font-semibold text-white">380 km/h (236 mph)</span>
                </li>
              </ul>
            </div>

            {/* Architecture & Battery */}
            <div className="p-5 rounded-2xl bg-black/40 border border-purple-900/40 space-y-3">
              <h4 className="font-luxury text-xs uppercase tracking-widest text-purple-300 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Chassis, Suspension & Battery</span>
              </h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Monocoque Architecture:</span>
                  <span className="font-semibold text-white">Graphene-Infused Carbon Fiber</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Suspension:</span>
                  <span className="font-semibold text-white">Active-Morph Hydropneumatic</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Battery Chemistry:</span>
                  <span className="font-semibold text-white">110 kWh Solid-State Array</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">EV Silent Cruise Range:</span>
                  <span className="font-semibold text-white">120 km (75 mi)</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Rapid DC Charging:</span>
                  <span className="font-semibold text-white">800V Architecture (350 kW)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Door Mechanism:</span>
                  <span className="font-semibold text-white">Power-Actuated Dihedral Gullwing</span>
                </li>
              </ul>
            </div>

            {/* Bespoke Atelier Choices */}
            <div className="p-5 rounded-2xl bg-black/40 border border-purple-900/40 space-y-3">
              <h4 className="font-luxury text-xs uppercase tracking-widest text-purple-300 font-bold">
                Bespoke Atelier Specifications
              </h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Exterior Coachwork:</span>
                  <span className="font-semibold text-white capitalize">
                    {config?.exteriorColor.replace('-', ' ') || 'Continuum Morph Duotone'}
                  </span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Spirit of Ecstasy Mascot:</span>
                  <span className="font-semibold text-white capitalize">
                    {config?.spiritOfEcstasy.replace('-', ' ') || 'Illuminated Amethyst Crystal'}
                  </span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Interior Seating Architecture:</span>
                  <span className="font-semibold text-white capitalize">
                    {config?.interiorLayout.replace('-', ' ') || 'Bespoke Rear Couch Lounge'}
                  </span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Wood Veneer Selection:</span>
                  <span className="font-semibold text-white">Santos Palisander Open-Pore</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Boot & Luggage Suite:</span>
                  <span className="font-semibold text-white capitalize">
                    {config?.luggageOption.replace('-', ' ') || '4-Piece Leather Luggage'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Horological Commission */}
            <div className="p-5 rounded-2xl bg-black/40 border border-purple-900/40 space-y-3">
              <h4 className="font-luxury text-xs uppercase tracking-widest text-purple-300 font-bold">
                Paired Horology Commission
              </h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Horological Partner:</span>
                  <span className="font-semibold text-white">Patek Philippe, Geneva</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Model:</span>
                  <span className="font-semibold text-white">Grand Complications Pour Continuum</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Escapement & Complications:</span>
                  <span className="font-semibold text-white">Tourbillon • Minute Repeater</span>
                </li>
                <li className="flex justify-between border-b border-purple-950/50 pb-1">
                  <span className="text-gray-400">Presentation Casket:</span>
                  <span className="font-semibold text-white">Santos Palisander & Titanium</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Key Fob:</span>
                  <span className="font-semibold text-white">Titanium with Amethyst Pulse Beacon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Signoff Authentication Badge */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-center justify-between text-xs text-purple-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Certified Allocation: Commission No. 01 / 01 Master Build Record</span>
            </div>
            <span className="font-mono text-purple-300 text-[11px]">
              GOODWOOD &bull; GENEVA
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-purple-900/50 bg-black/40 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-purple-700 hover:bg-purple-600 text-white text-xs uppercase tracking-wider font-semibold transition-all"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
