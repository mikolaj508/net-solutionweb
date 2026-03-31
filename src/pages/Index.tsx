import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => (
  <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <HowIWorkSection />
        <TrustSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default Index;