import { motion } from "framer-motion";
import { HeartPulse, TrendingUp, BarChart3, Cloud, Shield, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: HeartPulse,
    title: "Clinical Informatics & Public Health Tech",
    description: "Systems designed with clinical precision. Understanding the workflow of doctors, nurses, and patients. We reduce documentation burden and improve data integrity.",
  },
  {
    icon: TrendingUp,
    title: "Digital Health Strategy",
    description: "From legacy system migration to interoperability roadmaps. We align your tech stack with your mission.",
  },
  {
    icon: BarChart3,
    title: "Medical Data Analytics",
    description: "DHIS2 and DATs expertise with a focus on medical data integrity. Actionable dashboards for decision makers.",
  },
  {
    icon: Cloud,
    title: "Cloud & Server Orchestration",
    description: "AWS, GCP, Digital Ocean. Kubernetes, Docker, high-availability deployments. We build infrastructure that scales with your impact.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    description: "Load balancing, microservices architecture, disaster recovery. Your health data never sleeps, and neither does our architecture.",
  },
  {
    icon: Briefcase,
    title: "Business Process Optimization",
    description: "Leveraging entrepreneurial experience to ensure tech solutions drive revenue, operational growth, and sustainable ROI.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Built by Clinicians.{" "}
              <span className="text-gradient-primary">Engineered for Impact.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We deliver end-to-end digital health solutions, from strategy and architecture to deployment and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 hover:glow-border"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer rounded-xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Callout */}
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl border border-primary/30 bg-primary/5 p-8 text-center glow-border"
          >
            <p className="font-display text-xl sm:text-2xl text-foreground leading-relaxed">
              "Led by a Physician-Technologist. Every solution bridges clinical reality and engineering excellence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="mailto:biocircuitlaboratories@gmail.com"
            className="inline-block px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
