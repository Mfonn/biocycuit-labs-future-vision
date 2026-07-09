import { motion } from "framer-motion";
import { useEffect } from "react";
import { Compass, BrainCircuit, ShieldCheck, Eye, ArrowRight, ExternalLink, Activity, Dumbbell } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const WAITLIST_URL = "https://forms.gle/KwehCRUrHg3aZepu6";

const caseStudies = [
  {
    icon: Activity,
    name: "Balance_ee",
    domain: "Health Tech",
    description:
      "An agentic AI assistant designed to help users balance daily habits, energy, and recovery — built as part of our health tech agent series.",
    url: "https://partyrock.aws/u/Balancee/S9Kr4lZ5u/Balance_ee",
  },
  {
    icon: Dumbbell,
    name: "FitTrack Daily Progress Monitor",
    domain: "Fitness · Health Tech",
    description:
      "An agent that monitors daily fitness progress, surfaces trends, and gives contextual feedback so users can stay accountable to their goals.",
    url: "https://partyrock.aws/u/Nonsoo/lA8IeBNX4/FitTrack-Daily-Progress-Monitor",
  },
];

const pillars = [
  {
    icon: Compass,
    title: "Value Alignment",
    body: "Our agents are designed to understand, evaluate, and act on the values of the businesses and people they serve — not pure utility maximization.",
  },
  {
    icon: BrainCircuit,
    title: "Responsible Reasoning",
    body: "Each system is built with the logic and reasoning capacity to work through dilemmas, weigh competing considerations, and apply ethical frameworks to novel scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Appropriate Autonomy",
    body: "We define clear boundaries and human oversight mechanisms, especially in high-stakes or sensitive domains like clinical care, finance, and safety.",
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
      title="Agentic AI"
      subtitle="We build agentic AI systems for real-world industries. We started in health tech, and are now expanding into wellness, fitness, and adjacent domains. Join the waitlist to work with us or be among the first when we open access."
      overline="Agentic Systems"
    >
      {/* Status + waitlist CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-xl border border-primary/30 bg-card/50 text-center"
      >
        <span className="inline-block text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 mb-4 font-body">
          Now Building
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Agentic AI for the industries that matter
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          We design agentic AI systems with responsible agency at the core. Health tech was our starting point; we are now taking on new industries. Join the waitlist to work with us or receive early access.
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

      {/* Case studies */}
      <div className="mb-16">
        <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-3">Case Studies</span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Agents we've built in health tech
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-8">
          Live prototypes from our health tech agent series. Each one demonstrates how agentic AI can support real user behavior, decision making, and progress in a specific domain.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.a
              key={cs.name}
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors duration-500 block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <cs.icon size={22} className="text-primary" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body block mb-2">
                {cs.domain}
              </span>
              <h4 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {cs.name}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {cs.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs text-primary font-display tracking-wider uppercase">
                View Prototype <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Responsible agency framing */}
      <div className="mb-12">
        <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-3">Our Approach</span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Responsible agency guides every model we ship
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
          Have an industry or use case in mind? We'd love to hear from you.
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
