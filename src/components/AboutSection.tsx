import { motion } from "framer-motion";
import { Dna, Bot, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "Agentic AI",
    description: "We build agentic AI systems for real-world industries — starting in health tech, expanding into wellness, fitness, and beyond.",
  },
  {
    icon: Dna,
    title: "Biotechnology",
    description: "We use biological systems and synthetic biology to create solutions that work in harmony with nature, across fashion, architecture, sports, and health.",
  },
  {
    icon: Leaf,
    title: "Wellness & Tradition",
    description: "Wellness is one part of what we do. We honour ancestral knowledge and holistic health practices, integrating time-tested wisdom with modern science.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Building the{" "}
              <span className="text-gradient-primary">next layer</span>{" "}
              of biology and intelligence
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                BioCircuit Laboratories works across biotechnology, agentic AI, and research. Wellness is one domain we serve — not the whole story.
              </p>
              <p>
                From building agentic AI systems for health tech to consulting brands on how biotechnology can transform fashion, architecture, and athletics, we work across disciplines because biology and intelligence don't respect boundaries.
              </p>
              <p>
                Our mission is simple: make the science of life, and the systems built on top of it, accessible, actionable, and alive.
              </p>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="group flex gap-5 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <pillar.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
