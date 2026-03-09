import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bio-grid">
      
      {/* Ambient glow layers */}
      <div className="absolute inset-0 bg-gradient-radial-glow" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />
      
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bio-warm/5 blur-[150px]" />
      

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8">
          
          <div className="h-px w-12 line-glow" />
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">

          </span>
          <div className="h-px w-12 line-glow" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          
          <span className="text-gradient-primary glow-text">BioCircuit</span>
          <br />
          <span className="text-foreground">Laboratories</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 tracking-wider">
          
          Your Wellness{" "}
          <span className="text-primary font-bold">+</span>{" "}
          Our Technology
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-base sm:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">Blend Biotechnology with holistic wellness.
Building the future of health.


        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="#services"
            className="group relative px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase overflow-hidden bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
            
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">
            
            Get in Touch
          </a>
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
    </section>);

};

export default HeroSection;