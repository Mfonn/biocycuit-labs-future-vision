import { motion } from "framer-motion";
import { Shirt, Building2, Dumbbell, Microscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const areas = [
  {
    icon: Shirt,
    title: "Fashion & Textiles",
    href: "/consulting/fashion-textiles",
    description: "From barkcloth and mud cloth to mycelium leather and biosensor garments — we bridge African textile traditions with cutting-edge bio-fabrication.",
    examples: ["Barkcloth & bio-fabricated materials", "Mud cloth biochemistry at scale", "Smart textiles & wearable biosensors"],
  },
  {
    icon: Building2,
    title: "Architecture & Design",
    href: "/consulting/architecture-design",
    description: "From Great Zimbabwe's dry-stone masonry to self-healing bio-concrete — African building traditions solved problems modern architecture still struggles with.",
    examples: ["Rammed earth & bio-cemented structures", "Termite mound biomimicry (passive HVAC)", "Mycelium insulation & living facades"],
  },
  {
    icon: Dumbbell,
    title: "Sports & Performance",
    href: "/consulting/sports-performance",
    description: "African athletic traditions contain performance wisdom modern sports science is only now decoding — from Senegalese wrestling conditioning to East African endurance nutrition.",
    examples: ["Ethnobotanical performance formulations", "Microbiome-informed nutrition", "Biotech-enhanced analytics"],
  },
  {
    icon: Microscope,
    title: "Research & Development",
    href: "/consulting/research-development",
    description: "For technology companies that want to withstand the biological century — bridging digital engineering with synthetic biology, biosensors, and bio-manufacturing.",
    examples: ["Biotech resilience audits", "Synthetic biology strategy", "Bio-digital integration"],
  },
];

const BiotechnologyConsulting = () => {
  return (
    <ServicePageLayout
      title="Biotechnology Consulting"
      subtitle="Infusing biotechnology into fashion, architecture, sports, and R&D — bridging African traditional methods with cutting-edge biological science."
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
          >
            <Link
              to={area.href}
              className="group relative block p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500 h-full overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {area.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {area.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm font-body text-muted-foreground/80">
                      <ArrowRight size={12} className="text-primary shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-xs text-primary font-display tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore In Depth <ArrowRight size={14} />
                </span>
              </div>
            </Link>
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
          href="mailto:Biocircuitlaboratories@gmail.com?subject=Consulting Inquiry"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          Book a Consultation
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default BiotechnologyConsulting;
