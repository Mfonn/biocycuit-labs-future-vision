import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Lux";

const services = [
  {
    index: "01",
    title: "Agentic AI",
    href: "/agentic-ai",
    description:
      "Agents that take the repetitive work off your team. System prompting written against your own policies, retrieval over your database, tool and API access so they can actually act, and orchestration with human approval where it matters.",
    points: ["Grounded in your data", "Deployed in your cloud", "Yours to edit"],
  },
  {
    index: "02",
    title: "Security, Governance and Cloud",
    href: "/security-governance",
    description:
      "Data protection compliance under NDPA and GDPR, security posture reviews and threat modelling, incident response and investigation, and the AWS, Azure and Terraform work that holds it all up.",
    points: ["NDPA and NDPR", "GDPR for health tech", "AWS · Azure · Terraform"],
  },
  {
    index: "03",
    title: "Deep Research",
    href: "/deep-research",
    description:
      "Commissioned research into your specific context. Prior art and literature, primary analysis where the published work runs out, regulatory context, and a briefing that ends in a recommendation rather than a reading list.",
    points: ["Prior art and failures", "Primary analysis", "Decision-ready briefing"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="mb-20 max-w-3xl">
          <p className="overline text-primary mb-6">What we do</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground mb-7">
            Three things, done properly
          </h2>
          <p className="font-body text-base text-platinum-dim leading-relaxed max-w-xl">
            We would rather be genuinely good at a short list than passable at a long one.
          </p>
        </Reveal>

        <div className="border-t border-platinum/10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link
                to={s.href}
                className="group grid lg:grid-cols-[90px_1fr_300px] gap-6 lg:gap-12 py-12 lg:py-14 border-b border-platinum/10 hover:bg-card/40 transition-colors duration-700 px-2 lg:px-6"
              >
                <span className="font-display text-2xl text-primary/60 group-hover:text-primary transition-colors duration-700">
                  {s.index}
                </span>

                <div>
                  <h3 className="font-display text-2xl lg:text-4xl text-foreground mb-5 leading-tight group-hover:text-primary transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm lg:text-base text-platinum-dim leading-relaxed max-w-2xl">
                    {s.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="font-body text-xs uppercase tracking-[0.16em] text-platinum-dim">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    Read more <ArrowRight size={12} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-foreground border-b border-platinum/25 pb-1 hover:text-primary hover:border-primary transition-colors duration-500"
          >
            See all services in detail <ArrowRight size={12} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
