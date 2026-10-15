import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GalleriaSection } from './components/GalleriaSection';
import { ConfiguratorSection } from './components/ConfiguratorSection';
import { AnatomySection } from './components/AnatomySection';
import { CockpitDashboardSection } from './components/CockpitDashboardSection';
import { HorologySection } from './components/HorologySection';
import { SpecificationSheetModal } from './components/SpecificationSheetModal';
import { CommissionModal } from './components/CommissionModal';
import { Footer } from './components/Footer';
import { ConfigState } from './types';

export const App: React.FC = () => {
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [isDocketOpen, setIsDocketOpen] = useState(false);
  const [currentConfig, setCurrentConfig] = useState<ConfigState | undefined>(undefined);

  const handleOpenCommission = (config?: ConfigState) => {
    if (config) setCurrentConfig(config);
    setIsCommissionOpen(true);
  };

  const handleOpenSpecsDocket = (config?: ConfigState) => {
    if (config) setCurrentConfig(config);
    setIsDocketOpen(true);
  };

  const scrollToGalleria = () => {
    const el = document.getElementById('galleria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08070d] text-[#e8e4f0] relative selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Glow Accents */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <Navbar
        onOpenCommission={() => handleOpenCommission(currentConfig)}
        onOpenSpecsDocket={() => handleOpenSpecsDocket(currentConfig)}
      />

      {/* Main Content Sections */}
      <main id="top">
        <HeroSection
          onExplore={scrollToGalleria}
          onOpenCommission={() => handleOpenCommission(currentConfig)}
        />

        <GalleriaSection />

        <ConfiguratorSection
          onOpenCommission={handleOpenCommission}
          onOpenSpecsDocket={handleOpenSpecsDocket}
        />

        <AnatomySection />

        <CockpitDashboardSection />

        <HorologySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
        config={currentConfig}
      />

      <SpecificationSheetModal
        isOpen={isDocketOpen}
        onClose={() => setIsDocketOpen(false)}
        config={currentConfig}
      />
    </div>
  );
};

export default App;
