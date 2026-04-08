import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import consultantImg from "@/assets/consultant-mfon.jpg";

const Consultants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
              Our Team
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-primary">Consultants</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Principal Consultant */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-body block mb-2">
              The Principal Consultant
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center gap-10 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12"
          >
            {/* Headshot */}
            <div className="shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={consultantImg}
                  alt="Dr. Mfon Nta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Dr. Mfon Nta, MD
              </h2>
              <p className="font-body text-sm text-primary tracking-wider uppercase mb-6">
                Lead Architect & Physician-Technologist
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Clinician, software engineer, and serial entrepreneur. Dr. Nta brings a unique perspective that combines deep clinical knowledge with full-stack engineering expertise. Every system we build is informed by real-world healthcare workflows and a relentless focus on outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl border border-primary/30 bg-primary/5 p-8 text-center glow-border"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Hire a Multidisciplinary Firm
            </h3>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Not a solo consultant. Contact us to discuss your project and discover how our team can deliver end-to-end solutions.
            </p>
            <a
              href="mailto:biocircuitlaboratories@gmail.com"
              className="inline-block px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultants;
