import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Youtube, Instagram, Newspaper } from "lucide-react";

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@biocircuitlaboratories",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/biocircuitlaboratories/",
    icon: Instagram,
  },
  {
    label: "Newsletter",
    href: "https://fuzzymustard.substack.com/",
    icon: Newspaper,
  },
];

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
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            Join the Circuit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build the Future{" "}
            <span className="text-gradient-primary">Together</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Whether you're a researcher, a brand, an educator, or simply curious about the biology
            of tomorrow — we'd love to connect.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:contact@biocircuitlaboratories.org"
            className="group flex items-center gap-3 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            <Mail size={18} />
            <span>Contact Us</span>
            <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href="https://fuzzymustard.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500"
          >
            Subscribe to Newsletter
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <s.icon size={18} />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
