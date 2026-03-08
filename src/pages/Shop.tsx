import { motion } from "framer-motion";
import { ShoppingBag, Shield, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const products = [
  {
    title: "Obsidian",
    tagline: "Your Private AI. Offline. Forever.",
    description:
      "A lightweight, privacy-first AI assistant that runs entirely on your machine. No cloud. No data leaks. No subscriptions. Just your knowledge, your queries, your control.",
    price: "₦350,000",
    status: "available" as const,
    href: "/shop/obsidian",
    icon: Shield,
    features: ["100% Offline", "Custom Knowledge Base", "Docker-Based", "Zero Data Sharing"],
  },
  {
    title: "BioCircuit Biosensor",
    tagline: "Biological Sensing, Reimagined.",
    description:
      "A next-generation wearable biosensor platform for real-time physiological monitoring — from galvanic skin response to micro-EEG. Designed for researchers, biohackers, and wellness practitioners.",
    price: "Coming Soon",
    status: "coming-soon" as const,
    href: "#",
    icon: Cpu,
    features: ["Multi-Modal Sensing", "Open Data Format", "Research-Grade", "Wearable Design"],
  },
];

const Shop = () => {
  return (
    <ServicePageLayout
      title="Shop"
      subtitle="Curated tools for privacy, performance, and biological insight — built by researchers, for researchers."
      overline="Products"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {product.status === "available" ? (
              <Link to={product.href} className="block group h-full">
                <ProductCard product={product} />
              </Link>
            ) : (
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

const ProductCard = ({ product }: { product: (typeof products)[number] }) => {
  const isAvailable = product.status === "available";

  return (
    <div
      className={`relative rounded-xl border p-8 h-full flex flex-col transition-all duration-500 overflow-hidden ${
        isAvailable
          ? "border-primary/30 bg-card/80 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] group-hover:scale-[1.01]"
          : "border-border bg-card/30 opacity-70"
      }`}
    >
      {/* Status badge */}
      {product.status === "coming-soon" && (
        <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-bio-warm/30 text-bio-warm bg-bio-warm/5 font-body">
          Coming Soon
        </span>
      )}

      <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
        <product.icon size={26} className="text-primary" />
      </div>

      <h2 className="font-display text-2xl font-bold text-foreground mb-1">
        {product.title}
      </h2>
      <p className="font-display text-sm text-primary tracking-wide mb-4">
        {product.tagline}
      </p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {product.description}
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.features.map((f) => (
          <span
            key={f}
            className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-border text-muted-foreground font-body"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <span className="font-display text-xl font-bold text-foreground">
          {product.price}
        </span>
        {isAvailable && (
          <span className="flex items-center gap-1 text-xs text-primary font-display tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More <ArrowRight size={14} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Shop;
