import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bio-grid">
      
      <div className="absolute inset-0 bg-gradient-radial-glow" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Geometric abstract shapes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 left-1/5 w-48 h-48 border border-accent/10 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 line-glow" />
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
            PREMIER TECH CONSULTANCY
          </span>
          <div className="h-px w-12 line-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-primary">Digital Health Innovation</span>
          <br />
          <span className="text-foreground">& System Interoperability</span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">for NGOs and Governments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-base sm:text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          We build, secure, and scale the software that powers public health. From DHIS2 to cloud orchestration, clinical precision meets enterprise reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wider uppercase overflow-hidden bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
            <span className="relative z-10">Request Capability Statement</span>
          </a>
          <Link
            to="/services"
            className="px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">
            View Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
            Scroll Down
          </span>
          <ChevronDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
