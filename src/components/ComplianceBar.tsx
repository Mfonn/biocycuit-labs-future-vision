import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const ComplianceBar = () => {
  return (
    <section className="relative py-12 px-6 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card/30">
            <ShieldCheck size={20} className="text-primary" />
            <span className="font-body text-sm text-muted-foreground">CAC Registered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceBar;
