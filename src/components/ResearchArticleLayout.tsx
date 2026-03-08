import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ResearchArticleLayoutProps {
  title: string;
  field: string;
  status: string;
  abstract: string;
  children: ReactNode;
  references: { title: string; url: string }[];
}

const ResearchArticleLayout = ({
  title,
  field,
  status,
  abstract,
  children,
  references,
}: ResearchArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/research"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <ArrowLeft size={16} />
            <span>All Research</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground truncate">
            {title}
          </span>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-body">
              {field}
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-body border ${
                status.includes("Active") || status.includes("Progress")
                  ? "border-bio-warm/30 text-bio-warm bg-bio-warm/5"
                  : "border-primary/30 text-primary bg-primary/5"
              }`}
            >
              {status}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-primary" />
              <span className="font-display text-xs tracking-wider uppercase text-muted-foreground">
                Abstract
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
              {abstract}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose-biocircuit"
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* References */}
      {references.length > 0 && (
        <section className="py-16 px-6 border-t border-border/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">References</h2>
            <ol className="space-y-3">
              {references.map((ref, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-display text-xs text-muted-foreground mt-1">
                    [{i + 1}]
                  </span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {ref.title}
                    <ExternalLink size={10} className="shrink-0" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <section className="py-12 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/research"
            className="px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500"
          >
            ← Back to All Research
          </Link>
          <a
            href="mailto:research@biocircuitlaboratories.org"
            className="px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
          >
            Discuss This Research
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResearchArticleLayout;
