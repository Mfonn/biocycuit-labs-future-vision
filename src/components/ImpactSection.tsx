import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section id="impact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8">
            Built for Health Equity.{" "}
            <span className="text-gradient-primary">Measured in Outcomes.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Every line of code we write serves a community. We partner with public health leaders to close the digital divide, making high-quality healthcare data available, secure, and actionable for those who need it most. Our work is not just technical; it is a commitment to human dignity.
        </motion.p>

        {/* Abstract visual: network nodes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-24 flex items-center justify-center"
        >
          <div className="flex items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  className="w-3 h-3 rounded-full bg-primary/60"
                />
                {i < 4 && <div className="w-8 h-px bg-primary/30" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
