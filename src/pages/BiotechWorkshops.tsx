import { motion } from "framer-motion";
import { FlaskConical, Bell, Calendar, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const upcomingWorkshops = [
  {
    title: "DNA Extraction at Home",
    description: "Learn how to extract real DNA from fruits using household items. A fun, accessible intro to molecular biology.",
    duration: "3 hours",
    format: "In-Person / Virtual",
    level: "Beginner — No experience needed",
  },
  {
    title: "Build a Biosensor",
    description: "Construct a simple biosensor that detects environmental changes. Combines electronics with biology.",
    duration: "Full Day",
    format: "In-Person",
    level: "Intermediate",
  },
  {
    title: "Microbiome Mapping",
    description: "Collect and analyze microbial samples from your environment. Learn sequencing basics and data interpretation.",
    duration: "2 Sessions (4h each)",
    format: "Hybrid",
    level: "Intermediate",
  },
];

const BiotechWorkshops = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ServicePageLayout
      title="Biotech Workshops"
      subtitle="Become a scientist for a day — hands-on biotech experiences that make science tangible, exciting, and unforgettable."
      overline="Hands-On Science"
    >
      {/* Coming soon banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-bio-warm/30 bg-bio-warm/5 p-8 text-center mb-16"
      >
        <FlaskConical className="mx-auto mb-4 text-bio-warm" size={32} />
        <h2 className="font-display text-xl font-bold text-foreground mb-2">
          Workshops Launching Soon
        </h2>
        <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
          We're finalizing our first round of workshops. Be the first to know.
        </p>

        {!submitted ? (
          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500 whitespace-nowrap"
            >
              <Bell size={14} />
              Notify Me
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-primary font-display text-sm tracking-wider"
          >
            ✓ You'll be the first to know!
          </motion.div>
        )}
      </motion.div>

      {/* Upcoming workshops preview */}
      <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
        Planned Workshops
      </h2>
      <div className="space-y-6 mb-16">
        {upcomingWorkshops.map((workshop, i) => (
          <motion.div
            key={workshop.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-all duration-500"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {workshop.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {workshop.description}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-body">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-primary" />
                {workshop.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-primary" />
                {workshop.format}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-primary" />
                {workshop.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What to expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-border bg-card/30 p-8 text-center"
      >
        <h2 className="font-display text-xl font-bold text-foreground mb-4">What to Expect</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Real lab equipment. Real experiments. Real science — made accessible for everyone. 
          No prior experience required for beginner workshops. Come curious, leave inspired.
        </p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default BiotechWorkshops;
