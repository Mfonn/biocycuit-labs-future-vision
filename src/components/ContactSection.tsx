import { ArrowUpRight, Youtube, Instagram, Newspaper } from "lucide-react";
import { Reveal, mailto } from "@/components/Lux";

const routes = [
  { label: "Agentic AI", subject: "Agentic AI enquiry" },
  { label: "Security, governance and cloud", subject: "Security and governance enquiry" },
  { label: "Deep research", subject: "Deep research enquiry" },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@biocircuitlaboratories", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/biocircuitlaboratories/", icon: Instagram },
  { label: "Newsletter", href: "https://fuzzymustard.substack.com/", icon: Newspaper },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow" />

      <div className="relative max-w-[1400px] mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="overline text-primary mb-6">Get in touch</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground mb-7">
            Write to us in plain English.
          </h2>
          <p className="font-body text-base text-platinum-dim leading-relaxed">
            A paragraph about your situation is enough to start. We reply with an honest read on
            whether we are the right people for it, and what a first step would cost.
          </p>
        </Reveal>

        <div className="border-t border-platinum/10 mb-16">
          {routes.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.06}>
              <a
                href={mailto(r.subject)}
                className="group flex flex-wrap items-center justify-between gap-4 py-8 border-b border-platinum/10 px-2 lg:px-5 hover:bg-card/40 transition-colors duration-700"
              >
                <span className="font-display text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-500">
                  {r.label}
                </span>
                <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  Email us <ArrowUpRight size={13} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.18em] text-platinum-dim hover:text-primary transition-colors duration-500"
              >
                <s.icon size={14} />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
