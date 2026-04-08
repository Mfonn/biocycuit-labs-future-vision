import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px line-glow opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intrigued Enough to{" "}
            <span className="text-gradient-primary">Connect?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            We work with international NGOs, government agencies, and public health organizations. Reach out to discuss how we can support your mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:biocircuitlaboratories@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500">
            <Mail size={18} />
            <span>Vendor Inquiry</span>
            <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-body text-sm text-muted-foreground"
        >
          biocircuitlaboratories@gmail.com
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
