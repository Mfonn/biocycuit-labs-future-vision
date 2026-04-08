import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import ImpactSection from "@/components/ImpactSection";
import ComplianceBar from "@/components/ComplianceBar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CompetenciesSection />
      <ImpactSection />
      <ComplianceBar />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
