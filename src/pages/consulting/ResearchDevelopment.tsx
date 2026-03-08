import { motion } from "framer-motion";
import { ArrowLeft, Zap, Shield, TrendingUp, Cpu, Dna } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: Shield,
    title: "Biotech Resilience Audits",
    description: "We assess your company's vulnerability to biological disruption — supply chain dependencies on biological materials, exposure to biosecurity risks, and opportunities to integrate biological manufacturing. The audit produces a roadmap for building biological resilience into your operations.",
    deliverables: ["Biological supply chain risk assessment", "Biosecurity threat modeling", "Bio-integration opportunity map", "12-month resilience roadmap"],
  },
  {
    icon: Dna,
    title: "Synthetic Biology Strategy",
    description: "For companies exploring engineered biological systems — from bio-manufactured materials and enzymes to living sensors and cell-based computing. We provide strategic guidance on which synthetic biology approaches align with your business goals, and connect you with lab infrastructure and talent.",
    deliverables: ["Synbio application feasibility study", "Technology landscape analysis", "Lab partner matching", "IP strategy for biological inventions"],
  },
  {
    icon: Cpu,
    title: "Bio-Digital Integration",
    description: "The convergence of biological and digital systems — biosensors feeding data to ML models, biological computing substrates, DNA data storage, and organ-on-chip platforms. We consult technology companies on where biology can augment or replace digital infrastructure.",
    deliverables: ["Bio-digital convergence assessment", "Biosensor integration architecture", "Biological computing feasibility", "Prototype specification"],
  },
  {
    icon: TrendingUp,
    title: "Bioeconomy Positioning",
    description: "The global bioeconomy is projected to reach $30 trillion by 2050. We help companies position for this transition — identifying where biological manufacturing, bio-based materials, and circular bio-processes can create competitive advantage and new revenue streams.",
    deliverables: ["Bioeconomy market analysis", "Competitive positioning strategy", "Bio-circular business model design", "Investment and partnership strategy"],
  },
];

const sections = [
  {
    title: "Why Biotech R&D Now",
    content: [
      "The biological century is not a prediction — it is already underway. CRISPR gene editing costs have dropped 99% in a decade. Synthetic biology tools allow engineering organisms with the same precision we engineer software. Bio-manufactured materials (spider silk, mycelium composites, lab-grown leather) are entering commercial production. Companies that ignore this shift risk obsolescence; those that embrace it gain first-mover advantage in markets that will define the next fifty years.",
      "But most technology companies lack biological expertise. Their engineering teams think in silicon, not cells. Their supply chains are built on petrochemical materials. Their R&D processes assume deterministic manufacturing, not the probabilistic, adaptive nature of biological systems. This gap is where BioCircuit's R&D consulting creates value.",
    ],
  },
  {
    title: "Our Approach",
    content: [
      "We don't just advise — we embed. BioCircuit R&D consultants work alongside your engineering and product teams, translating between biological and digital domains. We bring laboratory expertise (wet lab, computational biology, bioinformatics), strategic clarity (which biological approaches are commercially viable vs. scientifically interesting but premature), and network access (academic labs, biotech startups, contract research organizations).",
      "Our consulting is structured around 90-day cycles: Discovery (mapping your biological opportunity space), Strategy (selecting and designing the approach), and Execution (building prototypes, running experiments, generating data). Each cycle produces deliverables, not just recommendations.",
    ],
  },
  {
    title: "Case Applications",
    content: [
      "A materials company exploring mycelium-based packaging to replace expanded polystyrene. A wearable tech startup integrating sweat-based biosensors into athletic garments. A construction firm developing self-healing bio-concrete for infrastructure projects. An agricultural technology company using machine learning on microbiome data to optimize soil health. A fashion brand transitioning from petroleum-based synthetic fibers to bio-fabricated alternatives.",
      "Each of these represents a technology company that recognized biology as its next competitive frontier — and needed a partner who could bridge the gap between their existing engineering capabilities and the biological systems they wanted to harness.",
    ],
  },
];

const ResearchDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/biotechnology-consulting" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Consulting</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground">Research & Development</span>
        </div>
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">Future-Proof Your Company</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Research & <span className="text-gradient-primary">Development</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For technology companies that want to withstand — and shape — the biological century. We bridge digital engineering and biological systems to build R&D capabilities that compound over time.
          </motion.p>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl font-bold text-foreground mb-10 text-center">
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-body">Deliverables</span>
                  {item.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs font-body text-muted-foreground/80">
                      <Zap size={10} className="text-primary shrink-0" />{d}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deep content */}
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">{section.title}</h2>
                <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed pl-6 border-l-2 border-border group-hover:border-primary/40 transition-colors duration-500">
                  {section.content.map((p, j) => (<p key={j}>{p}</p>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Ready to Build Biological R&D?</h2>
          <p className="font-body text-muted-foreground mb-6">For technology companies ready to integrate biology into their engineering, manufacturing, or product development.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:consulting@biocircuitlaboratories.org?subject=R&D Consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">Start a Conversation</a>
            <Link to="/biotechnology-consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">← All Consulting Areas</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
