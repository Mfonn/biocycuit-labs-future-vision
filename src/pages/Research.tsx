import { motion } from "framer-motion";
import { Microscope, ArrowRight, Beaker, Brain, Droplets, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const researchProjects = [
  {
    icon: Brain,
    title: "Autism & Neurodivergence",
    slug: "/research/autism-neurodivergence",
    field: "Biopsychiatry",
    status: "Published",
    description: "An investigation into autism spectrum conditions through a biopsychiatric lens, examining neurological architecture, sensory processing, and the neurodiversity paradigm.",
    tags: ["Neuroscience", "Biopsychiatry", "Sensory Processing", "Neurodiversity"],
  },
  {
    icon: Droplets,
    title: "Water Research",
    slug: "/research/water",
    field: "Molecular Biology",
    status: "Active — Open Contribution",
    description: "An open research initiative scientifically observing and investigating the molecular properties, structure, and biological significance of water.",
    tags: ["Molecular Structure", "Conductivity", "Structured Water", "Biophysics"],
  },
  {
    icon: Hash,
    title: "Numerology & Mathematical Patterns",
    slug: "/research/numerology",
    field: "Mathematical Biology",
    status: "In Progress",
    description: "Exploring the intersection of numerical patterns, mathematical resonance, and biological systems, investigating whether numeric relationships map onto natural phenomena.",
    tags: ["Number Theory", "Pattern Recognition", "Mathematical Biology", "Systems Theory"],
  },
  {
    icon: Beaker,
    title: "Mycelium as Multi-Electrode Arrays",
    slug: "/research/mycelium-electrode-arrays",
    field: "Bioelectronics",
    status: "Published",
    description: "Investigating fungal mycelium networks as living multi-electrode arrays: biological computing substrates that sense, process, and transmit electrical signals.",
    tags: ["Mycelium", "Bioelectronics", "MEA", "Fungal Networks", "Biosensors"],
  },
];

const Research = () => {
  return (
    <ServicePageLayout
      title="Research"
      subtitle="Our published and ongoing research, spanning biopsychiatry, molecular biology, bioelectronics, and mathematical systems. Science made open, rigorous, and alive."
      overline="BioCircuit Research Division"
    >
      {/* Research projects */}
      <div className="space-y-8 mb-16">
        {researchProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link
              to={project.slug}
              className="group block p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:glow-border transition-all duration-500 overflow-hidden relative"
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <project.icon size={28} className="text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
                      {project.field}
                    </span>
                    <span
                      className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-body border ${
                        project.status.includes("Active") || project.status.includes("Progress")
                          ? "border-bio-warm/30 text-bio-warm bg-bio-warm/5"
                          : "border-primary/30 text-primary bg-primary/5"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs text-primary font-display tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
                    Read Full Research <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Contribute CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
      >
        <Microscope className="mx-auto mb-4 text-primary" size={28} />
        <h2 className="font-display text-xl font-bold text-foreground mb-3">
          Want to Contribute?
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto mb-6">
          BioCircuit research is open. If you're a researcher, student, or curious mind, 
          we welcome contributions, peer review, and collaboration.
        </p>
        <a
          href="mailto:Biocircuitlaboratories@gmail.com?subject=Research Collaboration"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          Join Our Research
        </a>
      </motion.div>
    </ServicePageLayout>
  );
};

export default Research;
