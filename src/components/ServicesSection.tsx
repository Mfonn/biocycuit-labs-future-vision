import { motion } from "framer-motion";
import { Microscope, Cpu, GraduationCap, ShoppingBag, FlaskConical, Database } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Microscope,
    title: "Research",
    description: "Explore our published and ongoing research, from biopsychiatry and water science to bioelectronics and mathematical biology.",
    status: "active",
    href: "/research",
  },
  {
    icon: Cpu,
    title: "Biotechnology Consulting",
    description: "We bring biotechnology into your fashion, architecture, and sports, connecting organic systems with modern industry.",
    status: "active",
    href: "/biotechnology-consulting",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Check out our courses. We're reimagining how people learn about biology, technology, and the systems that connect them.",
    status: "active",
    href: "/education",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description: "Visit our virtual store with curated tools and resources for the modern biohacker and wellness enthusiast.",
    status: "coming-soon",
    href: "/shop",
  },
  {
    icon: FlaskConical,
    title: "Biotech Workshops",
    description: "Become a scientist for a day with hands-on biotech experiences that make science tangible and fun.",
    status: "coming-soon",
    href: "/biotech-workshops",
  },
  {
    icon: Database,
    title: "Machine Learning Data",
    description: "Access datasets powering the next generation of biological insights. Open data for open science.",
    status: "active",
    href: "/machine-learning-data",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We sit at the intersection of ancient wellness wisdom and modern technology, 
            offering pathways to understand and enhance biological systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                to={service.href}
                className="group relative block rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 hover:glow-border cursor-pointer overflow-hidden h-full"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <service.icon size={24} className="text-primary" />
                  </div>

                  {service.status === "coming-soon" && (
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-bio-warm/30 text-bio-warm bg-bio-warm/5 mb-4 font-body">
                      Coming Soon
                    </span>
                  )}

                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1 mt-4 text-xs text-primary font-display tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
