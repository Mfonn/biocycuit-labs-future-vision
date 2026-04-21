import { motion } from "framer-motion";
import { useEffect } from "react";
import { Compass, BrainCircuit, ShieldCheck, Eye, ArrowRight } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const WAITLIST_URL = "https://forms.gle/y8hGwK7KcZAZdEYH7";

const pillars = [
  {
    icon: Compass,
    title: "Value Alignment",
    body: "Our agents are designed to understand, evaluate, and act on moral principles, not pure utility maximization. Goals and behavior are aligned with the values of the wellness practitioners and clients they serve.",
  },
  {
    icon: BrainCircuit,
    title: "Responsible Reasoning",
    body: "Each system is built with the logic and reasoning capacity to work through dilemmas, weigh competing considerations, and apply ethical frameworks to novel health and fitness scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Appropriate Autonomy",
    body: "We define clear boundaries and human oversight mechanisms, especially in high-stakes or sensitive domains like clinical wellness, mental health, and physical training.",
  },
  {
    icon: Eye,
    title: "Transparency & Accountability",
    body: "Decision processes are inspectable. External oversight is built in, so every action the agent takes can be traced, justified, and audited.",
  },
];

const AgenticAIWellness = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageLayout
      title="Agentic AI for Wellness"
      subtitle="Purpose-built agentic AI systems for health, fitness, and wellness businesses. Currently in development. Join the waitlist to be among the first when we open access."
      overline="Coming Soon"
    >
      {/* Status + waitlist CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-xl border border-primary/30 bg-card/50 text-center"
      >
        <span className="inline-block text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-bio-warm/30 text-bio-warm bg-bio-warm/5 mb-4 font-body">
          In Development
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Building agentic AI for the wellness industry
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          We are designing agentic AI systems for health, fitness, and wellness businesses, with responsible agency at the core. Join the waitlist to receive updates and early access.
        </p>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          Join the Waitlist <ArrowRight size={16} />
        </a>
      </motion.div>

      {/* Responsible agency framing */}
      <div className="mb-12">
        <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-3">Our Approach</span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Responsible agency considerations for selecting a model
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
          Responsible agency in AI refers to a system's capacity to make good judgments and act in a socially responsible manner. These are the pillars guiding how we design every agent we build.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-7 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors duration-500"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-primary" />
            </div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-3">{p.title}</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="text-center p-8 rounded-xl border border-border bg-card/30">
        <p className="font-body text-muted-foreground mb-5">
          Want to be notified when we open access, or talk about a specific use case?
        </p>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Join the Waitlist <ArrowRight size={16} />
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default AgenticAIWellness;
