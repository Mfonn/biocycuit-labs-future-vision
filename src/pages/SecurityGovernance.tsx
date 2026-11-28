import { Reveal, SectionHeading, NumberedList } from "@/components/Lux";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";
import ServicePageLayout from "@/components/ServicePageLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Cloud, FileCheck2, KeyRound, SearchCheck, ShieldCheck, Siren } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud infrastructure & access control",
    body: "Review and tighten cloud permissions, storage, network rules and infrastructure settings across AWS and Azure. Terraform keeps approved changes clear and repeatable.",
  },
  {
    icon: SearchCheck,
    title: "Code & CI/CD pipeline checks",
    body: "Find exposed API keys, passwords, vulnerable code and container issues before updates reach production.",
  },
  {
    icon: ShieldCheck,
    title: "Hands-on fixes for developers",
    body: "Work alongside your engineering team on clean, tested fixes. Reduce exposure without slowing releases.",
  },
  {
    icon: FileCheck2,
    title: "Compliance & audit records",
    body: "Put technical controls and evidence in place for Nigeria Data Protection Act, UK GDPR, ISO 27001, SOC 2 and HIPAA requirements.",
  },
];

const packages = [
  {
    title: "Cloud & Pipeline Security Audit",
    body: "A full review of cloud settings and code pipelines, a clear compliance gap list, and hands-on fixes for critical vulnerabilities.",
    points: ["Cloud and code review", "Prioritised findings", "Tested fixes for critical issues"],
  },
  {
    title: "BioCircuit Secure AI Suite",
    label: "Flagship",
    body: "Combines a full Cloud & Code Security Audit with hardened cloud or on-premise infrastructure and custom workflows for your team.",
    points: ["Security audit and hardening", "Privacy safeguards", "Custom workflows for daily operations"],
  },
];

const workflow = [
  {
    title: "Discovery",
    body: "List the systems, data and people with access, including services your team may have overlooked.",
  },
  {
    title: "Assessment",
    body: "Review likely threats and compliance gaps, then rank them by likelihood and impact.",
  },
  {
    title: "Remediation",
    body: "Address exposed access first, followed by data handling and infrastructure settings. Keep approved changes in Terraform where appropriate.",
  },
  {
    title: "Governance",
    body: "Set clear roles, retention rules, processor records and an incident plan your team can use.",
  },
  {
    title: "Review",
    body: "Recheck after significant changes and on a regular schedule so the controls stay current.",
  },
];

const SecurityGovernance = () => (
  <>
    <Seo
      title="Cloud & Application Security in Abuja | NDPA, UK GDPR and ISO 27001"
      description="Cloud security, DevSecOps and data protection support in Abuja and across Nigeria. Review cloud access, code pipelines, compliance controls and incident response."
      path="/security-governance"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Cloud and application security, DevSecOps, data protection compliance",
        name: "Security & Governance",
        description:
          "Cloud hardening, code and pipeline checks, hands-on remediation, compliance controls and incident investigation.",
        areaServed: ["Abuja", "Nigeria", "Worldwide"],
        provider: {
          "@type": "ProfessionalService",
          name: "BioCircuit Laboratories",
          email: "hello@biocircuitlaboratories.com.ng",
          address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
        },
      }}
    />
    <ServicePageLayout
      theme="obsidian"
      overline="Cloud security • DevSecOps • NDPA, UK GDPR & ISO 27001"
      title="Enterprise Armor for Your Cloud and Code."
      subtitle="Lock down cloud servers, APIs and software pipelines before exposed keys or misconfigurations lead to a breach or regulatory fine."
      heroAction={
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button asChild className="rounded-sm">
            <a href="#security-form">Request a Security Review <ArrowUpRight aria-hidden="true" /></a>
          </Button>
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/readiness-assessment">Take the readiness assessment <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>
      }
      trustNote="Cloud hardening • Code and container checks • Hands-on fixes • NDPA and UK GDPR readiness"
    >
      <SectionHeading
        overline="Where exposure begins"
        title="Security work across your systems"
        intro="Practical checks and fixes for the cloud, code and data your business depends on."
      />
      <div className="grid md:grid-cols-2 gap-px bg-platinum/10 border border-platinum/10 mb-24">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.04}>
            <div className="bg-background h-full p-7 sm:p-9 hover:bg-card/60 transition-colors duration-700">
              <capability.icon size={20} className="text-accent mb-6" strokeWidth={1.35} aria-hidden="true" />
              <h3 className="font-display text-xl text-foreground mb-4">{capability.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{capability.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-24">
        <aside className="surface border-accent/30 p-7 sm:p-10 lg:p-12" aria-labelledby="year-end-title">
          <div className="flex items-start gap-5">
            <Siren className="mt-1 shrink-0 text-accent" size={22} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <p className="overline text-accent mb-5">Year-end review window</p>
              <h2 id="year-end-title" className="font-display text-3xl sm:text-4xl text-foreground leading-tight max-w-3xl mb-5">
                Lock Down Your Systems Before the New Year
              </h2>
              <p className="font-body text-sm sm:text-base text-platinum-dim leading-relaxed max-w-3xl">
                Use a quieter operating window to close security gaps with minimal disruption to your staff. Setup includes six months of complimentary monitoring and monthly fixes. Year-end setup slots are open through January 15, 2027.
              </p>
            </div>
          </div>
        </aside>
      </Reveal>

      <SectionHeading
        overline="Security services"
        title="Choose the right level of support"
        intro="Start with a focused audit, or bring cloud hardening and custom workflows together."
      />
      <div className="grid md:grid-cols-2 gap-5 mb-24">
        {packages.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06}>
            <div className={`surface h-full p-7 sm:p-10 ${service.label ? "border-accent/40" : ""}`}>
              {service.label && <p className="overline text-accent mb-4">{service.label}</p>}
              <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed mb-7">{service.body}</p>
              <ul className="space-y-3 border-t border-platinum/10 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-body text-sm text-platinum-dim">
                    <KeyRound size={14} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="The process"
        title="Engagement Protocol"
        intro="Five steps from the first review through ongoing checks."
      />
      <div className="mb-24">
        <NumberedList items={workflow} />
      </div>

      <Reveal className="mb-8">
        <div className="flex flex-col gap-5 border-t border-platinum/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-body text-sm text-platinum-dim mb-2">Working with AWS, Azure, Terraform and the controls your team already uses.</p>
            <p className="font-body text-sm text-platinum-dim">Not sure where to begin? Start with the readiness assessment.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline" className="rounded-sm">
              <Link to="/readiness-assessment">Take the readiness assessment <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild className="rounded-sm">
              <a href="#security-form">Request a quote or call <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </Reveal>

      <ServiceInquiryForm kind="security-review" />
    </ServicePageLayout>
  </>
);

export default SecurityGovernance;