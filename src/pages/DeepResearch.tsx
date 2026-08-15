import { Link } from "react-router-dom";
import { Reveal, SectionHeading, NumberedList, ContactBlock } from "@/components/Lux";
import ServicePageLayout from "@/components/ServicePageLayout";
import Seo from "@/components/Seo";
import { ArrowRight, ExternalLink } from "lucide-react";

const method = [
  {
    title: "Scoping",
    body: "We turn a vague question into one that can actually be answered. What decision does this research feed, what would change your mind, and what does a useful answer look like on one page.",
  },
  {
    title: "Prior art and literature",
    body: "Everything already published, patented or tried, including the failures. A lot of what gets pitched as new has been attempted twice, and knowing that is worth the fee on its own.",
  },
  {
    title: "Primary analysis",
    body: "Where the literature runs out we do the work: data analysis, experimental design, modelling, or structured interviews with people who have done the thing.",
  },
  {
    title: "Context fitting",
    body: "The step most reports skip. What the evidence means for your market, your regulator, your supply chain and your budget, rather than for a generic reader.",
  },
  {
    title: "The briefing",
    body: "A written report and a session with your team. Findings, confidence levels, what we could not establish, and the two or three moves we would make if it were our money.",
  },
];

const published = [
  {
    to: "/research",
    title: "Oxytocin and sympathetic innervation of the ovaries",
    field: "Reproductive neuroendocrinology",
    line: "Our active investigation into how oxytocin signalling and sympathetic nerve supply interact to shape ovarian function.",
  },
  {
    to: "/research/mycelium-electrode-arrays",
    title: "Mycelium as multi-electrode arrays",
    field: "Bioelectronics",
    line: "Fungal networks treated as living electrode arrays that sense, process and transmit electrical signal.",
  },
  {
    to: "/research/autism-neurodivergence",
    title: "Autism and neurodivergence",
    field: "Biopsychiatry",
    line: "Autism through a biopsychiatric lens: neurological architecture, sensory processing, and the neurodiversity paradigm.",
  },
  {
    to: "/research/water",
    title: "Water research",
    field: "Molecular biology",
    line: "An open investigation into the molecular structure, conductivity and biological significance of water.",
  },
  {
    to: "/research/numerology",
    title: "Numerology and mathematical patterns",
    field: "Mathematical biology",
    line: "Whether numeric relationships and mathematical resonance map onto real biological phenomena.",
  },
];

const useCases = [
  {
    title: "Before you build",
    body: "A market and technology landscape for a product that does not exist yet, so you find out what has been tried before you spend the year.",
  },
  {
    title: "Before you invest",
    body: "Technical due diligence on a claim. Is the science real, is the moat real, and what would have to be true for it to work.",
  },
  {
    title: "Before you enter a market",
    body: "Regulatory and scientific context for a specific country or sector, including who the regulator listens to.",
  },
  {
    title: "When the field moved",
    body: "A synthesis of what changed in your domain over the last two years and what it means for the roadmap you already committed to.",
  },
];

const DeepResearch = () => (
  <>
    <Seo
      title="Deep Research & Technical Due Diligence | BioCircuit Laboratories, Abuja"
      description="Commissioned deep research for your specific context: literature and prior art review, primary analysis, technical due diligence and regulatory context, delivered as a decision-ready briefing."
      path="/deep-research"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Commissioned research and technical due diligence",
        name: "Deep research",
        description:
          "Commissioned research into a client's specific context: prior art, literature synthesis, primary analysis and decision-ready briefings.",
        areaServed: ["Abuja", "Nigeria", "Worldwide"],
        provider: {
          "@type": "ProfessionalService",
          name: "BioCircuit Laboratories",
          email: "Biocircuitlaboratories@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
        },
      }}
    />
    <ServicePageLayout
      overline="Deep research"
      title="Research done properly, for your situation"
      subtitle="Not a summary of the first ten search results. We go through what has been published, what has been tried and failed, what is emerging, and what all of it means for the specific decision in front of you."
    >
      <Reveal className="mb-24">
        <div className="surface p-10 lg:p-14">
          <p className="overline text-platinum-dim mb-6">Our position</p>
          <p className="font-body text-base text-platinum-dim leading-relaxed max-w-3xl mb-5">
            We run our own research programme alongside the client work, in neuroendocrinology,
            bioelectronics, molecular biology and biopsychiatry. That is not decoration. It is why we
            know how to read a paper critically, and why we will tell you when the evidence is thin.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <a
              href="https://www.researchgate.net/profile/Mfon-Nta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              Published work on ResearchGate <ExternalLink size={12} />
            </a>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-platinum-dim border-b border-platinum/20 pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Our research index <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </Reveal>

      <SectionHeading overline="Method" title="How a commission runs" />
      <div className="mb-24">
        <NumberedList items={method} />
      </div>

      <SectionHeading
        overline="When people call us"
        title="Four moments this is worth paying for"
      />
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {useCases.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.05}>
            <div className="surface h-full p-9">
              <h3 className="font-display text-xl text-foreground mb-4">{u.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{u.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="Our own work"
        title="What we have published and what is underway"
        intro="Read the work before you hire us for it."
      />
      <div className="divide-y divide-platinum/10 border-y border-platinum/10 mb-8">
        {published.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <Link to={p.to} className="group block py-8">
              <p className="overline text-platinum-dim mb-4">{p.field}</p>
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {p.title}
              </h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed max-w-2xl mb-4">
                {p.line}
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Read it <ArrowRight size={12} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <ContactBlock
        service="research"
        subject="Deep research enquiry"
        body="Tell us the question you need answered, the decision it feeds, and your deadline."
      />
    </ServicePageLayout>
  </>
);

export default DeepResearch;
