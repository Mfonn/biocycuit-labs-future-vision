import { Reveal, SectionHeading, NumberedList, ContactBlock } from "@/components/Lux";
import ServicePageLayout from "@/components/ServicePageLayout";
import Seo from "@/components/Seo";
import { ShieldCheck, Scale, Siren, FileLock2, Cloud, KeyRound } from "lucide-react";

const capabilities = [
  {
    icon: Scale,
    title: "Data protection compliance",
    body: "The Nigeria Data Protection Act and the NDPC's requirements, and GDPR where you touch European data. We map what personal data you hold, where it lives, who can reach it and on what legal basis, then close the gaps and leave you with the documentation a regulator will ask for.",
  },
  {
    icon: FileLock2,
    title: "Health and financial data",
    body: "Health tech and fintech carry the stricter bar, so we hold you to it. Consent handling, minimisation, retention limits, encryption at rest and in transit, and access logs that show who read what and when.",
  },
  {
    icon: ShieldCheck,
    title: "Security posture reviews",
    body: "A structured look at your applications, cloud accounts and databases. Threat modelling against how an attacker would actually come in, then hardening in priority order rather than a hundred page list nobody reads.",
  },
  {
    icon: Siren,
    title: "Incident response and investigation",
    body: "When something has already happened: containment, forensic review of what was reached, breach notification obligations under NDPA and GDPR timelines, and a written account of how it happened so it does not happen again.",
  },
  {
    icon: KeyRound,
    title: "Governance of IP and databases",
    body: "Who owns the model, the dataset, the code, and the outputs. Access policy, key management, separation of duties, vendor and processor agreements, and an audit trail across the systems that hold your intellectual property.",
  },
  {
    icon: Cloud,
    title: "Cloud and infrastructure",
    body: "AWS and Azure architecture reviewed and rebuilt as infrastructure as code with Terraform. Least privilege by default, network segmentation, secrets management, backups you have actually tested, and environments that can be rebuilt from the repository.",
  },
];

const engagement = [
  {
    title: "Discovery",
    body: "We inventory the systems, the data and the people with access. Most of the risk we find is in something nobody remembered was still running.",
  },
  {
    title: "Assessment",
    body: "Threat modelling and a compliance gap analysis against NDPA and GDPR, scored by likelihood and impact rather than by how alarming it sounds.",
  },
  {
    title: "Remediation",
    body: "We fix in order of real exposure. Identity and access first, then data handling, then the infrastructure work, with Terraform so the fix stays fixed.",
  },
  {
    title: "Governance",
    body: "Policies, roles, retention schedules, processor agreements, and an incident playbook your team can follow at two in the morning without us.",
  },
  {
    title: "Review",
    body: "Quarterly or after any material change. Posture drifts. Somebody always adds a bucket.",
  },
];

const SecurityGovernance = () => (
  <>
    <Seo
      title="Cloud & Application Security in Abuja | NDPR, NDPA and GDPR Compliance"
      description="Security, governance and cloud consulting in Abuja, Nigeria. NDPA and NDPR compliance, GDPR for health tech, security posture reviews, incident investigation, and AWS, Azure and Terraform hardening."
      path="/security-governance"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Application and cloud security, data protection compliance",
        name: "Security, governance and cloud",
        description:
          "NDPA, NDPR and GDPR compliance, security posture reviews, incident response, and AWS, Azure and Terraform infrastructure hardening.",
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
      overline="Security, governance and cloud"
      title="Keep the thing you built"
      subtitle="Your data, your customers' data, your intellectual property and the infrastructure it all sits on. We do the compliance work, harden the systems, and investigate when something has already gone wrong. Abuja based, working across Nigeria and with European obligations."
    >
      <Reveal className="mb-24">
        <div className="surface p-10 lg:p-14">
          <p className="overline text-platinum-dim mb-6">Why this sits next to the AI work</p>
          <p className="font-body text-base text-platinum-dim leading-relaxed max-w-3xl mb-5">
            The moment you put an agent near your database, you have made a data protection decision
            and a security decision, whether or not anyone wrote them down. Most teams find that out
            after an audit or an incident.
          </p>
          <p className="font-body text-base text-platinum-dim leading-relaxed max-w-3xl">
            We would rather build both sides at once. The same people designing the retrieval layer
            should be the ones deciding who can read it.
          </p>
        </div>
      </Reveal>

      <SectionHeading overline="What we do" title="Six areas of work" />

      <div className="grid md:grid-cols-2 gap-px bg-platinum/10 border border-platinum/10 mb-24">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.04}>
            <div className="bg-background h-full p-9 hover:bg-card/60 transition-colors duration-700">
              <c.icon size={20} className="text-primary mb-6" strokeWidth={1.25} />
              <h3 className="font-display text-xl text-foreground mb-4">{c.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading overline="How an engagement runs" title="Five stages, in order" />
      <div className="mb-24">
        <NumberedList items={engagement} />
      </div>

      <Reveal>
        <div className="border border-platinum/10 p-10 lg:p-12">
          <p className="overline text-platinum-dim mb-6">Tooling we work in</p>
          <div className="flex flex-wrap gap-3">
            {["AWS", "Azure", "Terraform", "IAM and least privilege", "KMS and secrets management", "CloudTrail and audit logging", "Threat modelling", "NDPA / NDPC", "GDPR", "Incident forensics"].map(
              (t) => (
                <span
                  key={t}
                  className="font-body text-xs text-platinum-dim border border-platinum/15 px-4 py-2"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </Reveal>

      <ContactBlock
        service="security"
        subject="Security and governance enquiry"
        body="Tell us what you are running, where your data sits, and whether this is a compliance question, a hardening question, or something that has already happened."
        note="If you are responding to a live incident, say so in the subject line and we will move first and talk terms after."
      />
    </ServicePageLayout>
  </>
);

export default SecurityGovernance;
