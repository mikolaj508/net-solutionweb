import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AudienceSection from '@/components/AudienceSection';
import ProblemsSection from '@/components/ProblemsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShaderBackground from '@/components/ShaderBackground';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden relative">
        <ShaderBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <AudienceSection />
            <ProblemsSection />
            <AdvantagesSection />
            <ServicesSection />
            <ProcessSection />
            <TrustSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;