import { motion } from "framer-motion";
import { Droplets, FileText, Users, FlaskConical, Send } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const researchTasks = [
  {
    title: "Molecular Structure Analysis",
    description: "Investigate the molecular bonding patterns of water under varying electromagnetic conditions.",
    difficulty: "Intermediate",
  },
  {
    title: "Water Memory Hypothesis",
    description: "Explore and document observable changes in water crystalline structures after exposure to different stimuli.",
    difficulty: "Advanced",
  },
  {
    title: "Purification Methods Comparison",
    description: "Compare traditional and modern water purification techniques, measuring effectiveness across multiple contaminants.",
    difficulty: "Beginner",
  },
  {
    title: "Bioelectric Properties of Water",
    description: "Measure and record the electrical conductivity of water samples from various natural sources.",
    difficulty: "Intermediate",
  },
];

const steps = [
  { icon: FileText, text: "Select a task you are interested in" },
  { icon: Send, text: "Fill the contribution form" },
  { icon: FlaskConical, text: "Template of the research work will be sent to your email" },
  { icon: Users, text: "Research, submit, and wait for published paper — or pick another task!" },
];

const ResearchOnWater = () => {
  return (
    <ServicePageLayout
      title="Research On Water"
      subtitle="Our first ever open research paper — scientifically observing and investigating humanity's most essential element. Join us in uncovering what water truly is."
      overline="Open Research"
    >
      {/* Research info banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-primary/30 bg-primary/5 p-8 mb-16 text-center"
      >
        <Droplets className="mx-auto mb-4 text-primary" size={32} />
        <h2 className="font-display text-xl font-bold text-foreground mb-2">
          Water Research Project — Open Contribution
        </h2>
        <p className="font-body text-muted-foreground mb-4">
          This is an open research initiative. Anyone can contribute, learn, and be published.
        </p>
        <div className="inline-block px-4 py-2 rounded-full border border-bio-warm/30 bg-bio-warm/5">
          <span className="text-xs font-display tracking-wider uppercase text-bio-warm">
            Research Active
          </span>
        </div>
      </motion.div>

      {/* Steps */}
      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
          How to Participate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-xl border border-border bg-card/50 text-center group hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                {i + 1}
              </div>
              <step.icon className="mx-auto mb-3 text-primary" size={24} />
              <p className="font-body text-sm text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Research tasks */}
      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
          Available Research Tasks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchTasks.map((task, i) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {task.title}
                </h3>
                <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border border-accent/30 text-accent font-body">
                  {task.difficulty}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {task.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="mailto:research@biocircuitlaboratories.org?subject=Water Research Contribution"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          <Send size={16} />
          Contribute to This Research
        </a>
      </motion.div>
    </ServicePageLayout>
  );
};

export default ResearchOnWater;
