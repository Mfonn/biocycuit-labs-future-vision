import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BioCircuit Laboratories",
    url: "https://biocircuitlaboratories.com.ng",
    email: "Biocircuitlaboratories@gmail.com",
    description:
      "Agentic AI development, cloud and application security, data protection governance under NDPA and GDPR, and commissioned deep research. Based in Abuja, Nigeria.",
    areaServed: ["Nigeria", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    knowsAbout: [
      "Agentic AI",
      "AI agents for business",
      "Cloud security",
      "Application security",
      "NDPA compliance",
      "GDPR compliance",
      "AWS",
      "Azure",
      "Terraform",
      "Research consulting",
    ],
    sameAs: [
      "https://www.linkedin.com/in/mfonnta",
      "https://www.researchgate.net/profile/Mfon-Nta",
      "https://www.youtube.com/@biocircuitlaboratories",
      "https://www.instagram.com/biocircuitlaboratories/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BioCircuit Laboratories",
    url: "https://biocircuitlaboratories.com.ng",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Building the Machinery Behind Good Decisions | BioCircuit Laboratories"
        description="Agentic AI, cloud and application security, and deep research from Abuja, Nigeria. Secure AI agents grounded in your own data, NDPA and GDPR governance, AWS, Azure and Terraform."
        path="/"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
