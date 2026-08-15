import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({
  overline,
  title,
  intro,
  className = "",
}: {
  overline: string;
  title: string;
  intro?: string;
  className?: string;
}) => (
  <Reveal className={`mb-14 ${className}`}>
    <p className="overline text-primary mb-6">{overline}</p>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-foreground max-w-3xl mb-6">
      {title}
    </h2>
    {intro && (
      <p className="font-body text-base text-platinum-dim leading-relaxed max-w-2xl">{intro}</p>
    )}
  </Reveal>
);

export const NumberedList = ({
  items,
}: {
  items: { title: string; body: string }[];
}) => (
  <div className="divide-y divide-platinum/10 border-y border-platinum/10">
    {items.map((item, i) => (
      <Reveal key={item.title} delay={i * 0.05}>
        <div className="grid md:grid-cols-[64px_1fr] gap-4 md:gap-10 py-9 group">
          <span className="font-display text-2xl text-primary/70 group-hover:text-primary transition-colors duration-700">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
            <p className="font-body text-sm text-platinum-dim leading-relaxed max-w-2xl">{item.body}</p>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
);

export const mailto = (subject: string, body?: string) =>
  `mailto:Biocircuitlaboratories@gmail.com?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const ContactBlock = ({
  service,
  subject,
  body,
  note,
}: {
  service: string;
  subject: string;
  body?: string;
  note?: string;
}) => (
  <Reveal className="mt-24">
    <div className="surface p-10 lg:p-14">
      <p className="overline text-primary mb-6">Start a conversation</p>
      <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-5 max-w-xl leading-tight">
        Tell us what {service} needs to do for you.
      </h3>
      <p className="font-body text-sm text-platinum-dim leading-relaxed max-w-xl mb-9">
        {note ??
          "Write to us with a paragraph about your situation. We reply with an honest read on whether we are the right people for it, and what the first step would cost."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={mailto(subject, body)}
          className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-body text-[11px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors duration-500"
        >
          Email us about {service}
          <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="https://fuzzymustard.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-7 py-4 border border-platinum/20 text-foreground font-body text-[11px] uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition-colors duration-500"
        >
          Subscribe to the newsletter
        </a>
      </div>
    </div>
  </Reveal>
);
