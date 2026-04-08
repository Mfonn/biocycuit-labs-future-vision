import { motion } from "framer-motion";
import { HeartPulse, TrendingUp, BarChart3, Cloud, Shield, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              A Physician-Technologist{" "}
              <span className="text-gradient-primary">Led Firm</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                BioCircuit Laboratories is a premier tech consultancy built at the intersection of clinical medicine and software engineering. We serve international NGOs and government agencies who need reliable, scalable digital health infrastructure.
              </p>
              <p>
                Led by a physician-technologist, every solution we deliver bridges clinical reality and engineering excellence. We do not just build software. We build systems that save lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: HeartPulse, label: "Clinical Precision" },
              { icon: Cloud, label: "Cloud Infrastructure" },
              { icon: Shield, label: "Enterprise Security" },
              { icon: BarChart3, label: "Data Analytics" },
              { icon: TrendingUp, label: "Scalable Systems" },
              { icon: Briefcase, label: "Business Strategy" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
              >
                <item.icon size={18} className="text-primary shrink-0" />
                <span className="font-body text-sm text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
