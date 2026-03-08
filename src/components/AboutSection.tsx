import { motion } from "framer-motion";
import { Dna, Zap, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Dna,
    title: "Bio-Innovation",
    description: "Harnessing biological systems and synthetic biology to create solutions that work in harmony with nature.",
  },
  {
    icon: Zap,
    title: "Technology",
    description: "Leveraging machine learning, data science, and digital tools to decode the complexity of living systems.",
  },
  {
    icon: Leaf,
    title: "Traditional Wellness",
    description: "Honoring ancestral knowledge and holistic health practices — integrating time-tested wisdom with modern science.",
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
              The Future of{" "}
              <span className="text-gradient-primary">Health</span>{" "}
              is Biological
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                BioCircuit Laboratories exists at the frontier where biotechnology meets traditional wellness. 
                We believe that the deepest innovations come from understanding the circuits already running 
                inside every living thing.
              </p>
              <p>
                From researching the fundamental properties of water to consulting brands on how 
                biotechnology can transform fashion, architecture, and athletics — we operate 
                across disciplines because biology doesn't respect boundaries.
              </p>
              <p>
                Our mission is simple: make the science of life accessible, actionable, and alive.
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
