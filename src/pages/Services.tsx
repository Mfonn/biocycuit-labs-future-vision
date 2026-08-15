import { Link } from "react-router-dom";
import { Reveal, SectionHeading, ContactBlock, mailto } from "@/components/Lux";
import ServicePageLayout from "@/components/ServicePageLayout";
import Seo from "@/components/Seo";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    to: "/agentic-ai",
    overline: "01 / Agentic AI",
    title: "Agents that clear the bottleneck",
    lead: "AI agents that take the repetitive work off your team. Secure, grounded in your own data, customisable, and handed over editable.",
    detail: [
      "System prompting and role design written against your policies and tone",
      "Retrieval over your database, so answers come from your records",
      "Tool and API calls so the agent can act, not just talk",
      "Orchestration across multiple agents with human approval gates",
      "Evaluation sets, guardrails and audit logging",
      "Deployed inside your own AWS or Azure tenancy",
    ],
    subject: "Agentic AI enquiry",
  },
  {
    to: "/security-governance",
    overline: "02 / Security, governance and cloud",
    title: "Keep the thing you built",
    lead: "Data protection compliance, security posture, incident investigation, and the cloud infrastructure underneath all of it.",
    detail: [
      "NDPA and NDPR compliance, with the NDPC's requirements documented",
      "GDPR, held to the stricter bar for health and financial data",
      "Security posture reviews and threat modelling",
      "Incident response and forensic investigation of attacks",
      "Governance of intellectual property, databases and applications",
      "AWS, Azure and Terraform, least privilege and audit trails",
    ],
    subject: "Security and governance enquiry",
  },
  {
    to: "/deep-research",
    overline: "03 / Deep research",
    title: "Research done properly, for your situation",
    lead: "Commissioned research into your specific context: what has been done, what failed, what is emerging, and what it means for your decision.",
    detail: [
      "Scoping the question so it can actually be answered",
      "Prior art and full literature review, including the failures",
      "Primary analysis where the published work runs out",
      "Regulatory and market context for your country and sector",
      "A written report plus a working session with your team",
      "Backed by our own programme in neuroendocrinology and bioelectronics",
    ],
    subject: "Deep research enquiry",
  },
];

const Services = () => (
  <>
    <Seo
      title="Services: Agentic AI, Cloud Security and Deep Research | Abuja, Nigeria"
      description="Three things we do well: build secure AI agents for business, govern and secure your applications, cloud and data under NDPA and GDPR, and run deep research on your specific context. Based in Abuja, Nigeria."
      path="/services"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: pillars.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: `https://biocircuitlaboratories.com.ng${p.to}`,
        })),
      }}
    />
    <ServicePageLayout
      overline="Services"
      title="Three things, done properly"
      subtitle="We build the agents, we secure what they touch, and we do the research that tells you where to point them. Each one stands alone. Together they are the reason clients stop juggling three vendors."
    >
      <div className="space-y-px bg-platinum/10 border border-platinum/10 mb-8">
        {pillars.map((p, i) => (
          <Reveal key={p.to} delay={i * 0.06}>
            <div className="bg-background p-9 lg:p-12 hover:bg-card/50 transition-colors duration-700">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
                <div>
                  <p className="overline text-primary mb-6">{p.overline}</p>
                  <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-5 leading-tight">
                    {p.title}
                  </h2>
                  <p className="font-body text-base text-platinum-dim leading-relaxed mb-8 max-w-lg">
                    {p.lead}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Link
                      to={p.to}
                      className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
                    >
                      Read the detail <ArrowRight size={12} />
                    </Link>
                    <a
                      href={mailto(p.subject)}
                      className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-platinum-dim border-b border-platinum/20 pb-1 hover:text-primary hover:border-primary transition-colors"
                    >
                      Email us <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>

                <ul className="space-y-4 lg:pt-16">
                  {p.detail.map((d) => (
                    <li key={d} className="flex gap-4">
                      <span className="mt-2 w-1 h-1 shrink-0 bg-primary" />
                      <span className="font-body text-sm text-platinum-dim leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="How we price"
        title="Plainly"
        intro="Discovery is a fixed fee and produces something useful whether or not you continue. Build work is scoped in phases with a number attached to each. Retainers exist if you want us on call, and they are cancellable. We will tell you when a job is too small for us to be worth it."
        className="mt-24"
      />

      <ContactBlock
        service="your project"
        subject="General enquiry"
        body="Tell us which of the three you are thinking about, and a paragraph on the situation."
      />
    </ServicePageLayout>
  </>
);

export default Services;
