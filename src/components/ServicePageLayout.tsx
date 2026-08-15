import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  overline: string;
  children: ReactNode;
}

const ServicePageLayout = ({ title, subtitle, overline, children }: ServicePageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-44 pb-24 px-6 lg:px-10 overflow-hidden fine-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />

        <div className="relative z-10 max-w-[1000px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="overline text-primary mb-8"
          >
            {overline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-8"
          >
            {title}
          </motion.h1>
          <div className="hairline hairline-draw mb-8 max-w-md" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="font-body text-lg text-platinum-dim max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 lg:px-10 pb-28">
        <div className="max-w-[1000px] mx-auto">{children}</div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
