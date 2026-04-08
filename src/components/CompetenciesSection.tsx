import { motion } from "framer-motion";
import { HeartPulse, Wrench, Network } from "lucide-react";

const competencies = [
  {
    icon: HeartPulse,
    title: "Digital Health Systems",
    description: "DHIS2, DATs, LMIS interoperability. We connect the platforms that keep communities healthy.",
  },
  {
    icon: Wrench,
    title: "Technical Support & Maintenance",
    description: "24/7 health system uptime. We keep critical infrastructure running when it matters most.",
  },
  {
    icon: Network,
    title: "System Architecture",
    description: "Microservices, HL7/FHIR, API design. We engineer systems built for scale and compliance.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const CompetenciesSection = () => {
  return (
    <section id="competencies" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            Core Competencies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What We Do Best
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {competencies.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 hover:glow-border"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer rounded-xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
