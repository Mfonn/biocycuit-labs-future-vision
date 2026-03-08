import { motion } from "framer-motion";
import { ShoppingBag, Bell } from "lucide-react";
import { useState } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const previewItems = [
  {
    title: "BioCircuit Lab Kit — Starter",
    description: "Everything you need to run your first water experiments at home. Includes pH strips, sample containers, and a guided experiment booklet.",
    category: "Lab Equipment",
  },
  {
    title: "Structured Water Device",
    description: "A portable vortexing device designed based on our water research findings. Explore water structuring in your own space.",
    category: "Wellness Tools",
  },
  {
    title: "BioCircuit Apparel",
    description: "Wear the circuit. Bio-inspired designs printed on sustainably-sourced materials.",
    category: "Merchandise",
  },
  {
    title: "Research Data Packs",
    description: "Curated datasets from our machine learning and water research divisions, packaged for independent analysis.",
    category: "Digital",
  },
];

const Shop = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ServicePageLayout
      title="Shop"
      subtitle="Our virtual store is launching soon — curated tools, kits, and resources for the modern biohacker and wellness enthusiast."
      overline="Coming Soon"
    >
      {/* Coming soon banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-bio-warm/30 bg-bio-warm/5 p-8 text-center mb-16"
      >
        <ShoppingBag className="mx-auto mb-4 text-bio-warm" size={32} />
        <h2 className="font-display text-xl font-bold text-foreground mb-2">
          Store Launching Soon
        </h2>
        <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
          We're curating something special. Get notified when we go live.
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
            ✓ You'll be notified when we launch!
          </motion.div>
        )}
      </motion.div>

      {/* Preview items */}
      <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
        Sneak Peek
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previewItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group p-6 rounded-xl border border-border bg-card/50 opacity-75 hover:opacity-100 transition-all duration-500"
          >
            <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-body">
              {item.category}
            </span>
            <h3 className="font-display text-base font-semibold text-foreground mt-2 mb-2">
              {item.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default Shop;
