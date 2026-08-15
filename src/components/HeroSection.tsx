import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OrchestrationGraphic from "@/components/OrchestrationGraphic";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden fine-grid pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-gradient-radial-glow" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="overline text-primary mb-9"
            >
              Agentic AI · Security &amp; Governance · Deep Research
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease }}
              className="font-display text-[3rem] sm:text-[4.2rem] lg:text-[5.4rem] leading-[0.98] text-foreground mb-9"
            >
              We build the quiet
              <br />
              machinery behind
              <br />
              <span className="text-gradient-primary italic">good decisions.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 1.4, ease }}
              style={{ transformOrigin: "left center" }}
              className="hairline max-w-sm mb-9"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="font-body text-base sm:text-lg text-platinum-dim max-w-xl leading-relaxed mb-12"
            >
              BioCircuit Laboratories builds secure AI agents that take the repetitive work off your
              team, governs the data and cloud they run on, and does the deep research that tells you
              where to point them. Abuja, Nigeria. Working wherever the problem is.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-[11px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors duration-500"
              >
                What we do
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:Biocircuitlaboratories@gmail.com?subject=Enquiry%20from%20the%20website"
                className="inline-flex items-center justify-center px-8 py-4 border border-platinum/20 text-foreground font-body text-[11px] uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition-colors duration-500"
              >
                Talk to us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.6, ease }}
            className="hidden lg:block"
          >
            <OrchestrationGraphic className="w-full h-auto animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
