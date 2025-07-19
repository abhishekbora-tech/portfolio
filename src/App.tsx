import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import AchievementsSection from './sections/AchievementsSection';
import TravelSection from './sections/TravelSection';
import FamilySection from './sections/FamilySection';
import IdeologySection from './sections/IdeologySection';
import QuotesSection from './sections/QuotesSection';
import ReligionSection from './sections/ReligionSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { initAnimation } from './utils/animation';

function App() {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimation(); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <AchievementsSection />
          <TravelSection />
          <FamilySection />
          <IdeologySection />
          <QuotesSection />
          <ReligionSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;