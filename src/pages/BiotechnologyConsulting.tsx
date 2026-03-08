import { motion } from "framer-motion";
import { Shirt, Building2, Dumbbell, Microscope, ArrowRight } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const areas = [
  {
    icon: Shirt,
    title: "Fashion & Textiles",
    description: "Bio-fabricated materials, sustainable dyes from microorganisms, and smart textiles that respond to the body — we help fashion brands integrate living technology into their collections.",
    examples: ["Mycelium leather alternatives", "Bacteria-dyed fabrics", "Responsive biopolymer garments"],
  },
  {
    icon: Building2,
    title: "Architecture & Design",
    description: "Living walls, bio-responsive building materials, and organisms that self-heal concrete. We consult architects on integrating biological systems into built environments.",
    examples: ["Self-healing bio-concrete", "Algae-based air filtration facades", "Bioluminescent lighting systems"],
  },
  {
    icon: Dumbbell,
    title: "Sports & Performance",
    description: "Biotech-enhanced recovery, microbiome-informed training, and performance analytics rooted in biological data. We bring science to the athlete.",
    examples: ["Microbiome performance profiling", "Bio-sensor integration", "Recovery optimization protocols"],
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Custom consulting for organizations looking to explore or expand their biotechnology capabilities. From lab design to experimental methodology.",
    examples: ["Lab setup consulting", "Protocol development", "Biotech feasibility studies"],
  },
];

const BiotechnologyConsulting = () => {
  return (
    <ServicePageLayout
      title="Biotechnology Consulting"
      subtitle="Infusing biotechnology into your fashion, architecture, and sports — bridging the gap between organic systems and modern industry."
      overline="Consulting Services"
    >
      {/* Areas grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <area.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {area.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              {area.description}
            </p>
            <ul className="space-y-2">
              {area.examples.map((ex) => (
                <li key={ex} className="flex items-center gap-2 text-sm font-body text-muted-foreground/80">
                  <ArrowRight size={12} className="text-primary shrink-0" />
                  {ex}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-border bg-card/30 p-8 mb-16"
      >
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
          Our Consulting Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "We learn about your industry, goals, and where biology can create impact." },
            { step: "02", title: "Strategy", desc: "We develop a custom biotech integration plan tailored to your specific needs." },
            { step: "03", title: "Implementation", desc: "We guide you through execution — from lab work to production-ready solutions." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <span className="font-display text-3xl font-bold text-primary/30">{item.step}</span>
              <h3 className="font-display text-base font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <a
          href="mailto:consulting@biocircuitlaboratories.org?subject=Consulting Inquiry"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          Book a Consultation
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default BiotechnologyConsulting;
