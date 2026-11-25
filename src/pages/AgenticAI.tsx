import { Reveal, SectionHeading, NumberedList } from "@/components/Lux";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";
import ServicePageLayout from "@/components/ServicePageLayout";
import OrchestrationGraphic from "@/components/OrchestrationGraphic";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Cloud,
  Database,
  Gauge,
  Lock,
  Network,
  PenTool,
  Plug,
  Server,
  ShieldCheck,
  ShoppingBag,
  Hotel,
  Stethoscope,
  UsersRound,
  LifeBuoy,
} from "lucide-react";

const mechanics = [
  {
    icon: PenTool,
    title: "Clear roles and instructions",
    body: "Each agent has a defined job, a list of actions it can take, and clear points where it must ask a person for help. Instructions use your records, policies and tone.",
  },
  {
    icon: Database,
    title: "Answers from your records",
    body: "The agent can search approved company information and show the source behind an answer, so your team can check it before relying on it.",
  },
  {
    icon: Plug,
    title: "Tools and connections",
    body: "Approved connections let an agent prepare an invoice, update a record, book a slot or move a support ticket. Each action is limited, logged and reversible.",
  },
  {
    icon: Network,
    title: "Coordinated workflows",
    body: "When a task crosses systems or teams, each step has a clear owner. People review high-impact actions before they go ahead.",
  },
  {
    icon: Gauge,
    title: "Checks before launch",
    body: "Tests based on real examples help catch wrong answers and missed steps. Rules for sensitive requests and unusual cases keep failures visible.",
  },
  {
    icon: Lock,
    title: "Your data stays under your control",
    body: "Access is limited to the information and actions each agent needs. Your team keeps the keys, can edit the instructions and can change or retire the system.",
  },
];

const setups = [
  {
    icon: Cloud,
    title: "Secure Cloud Setup",
    body: "Runs around the clock in your private cloud with strict access rules. Company data stays out of public model training.",
  },
  {
    icon: Server,
    title: "On-Premise Setup",
    body: "Runs on a local server inside your building. Customer, financial and patient records stay on your premises, with no recurring external AI token bills.",
  },
];

const services = [
  {
    icon: Plug,
    title: "Custom AI Agent Setup",
    body: "Connects approved workflows to your website, online store, WhatsApp Business, CRM or internal files, helping answer enquiries and complete routine tasks.",
  },
  {
    icon: ShieldCheck,
    title: "BioCircuit Secure AI Suite",
    body: "The flagship service starts with a cloud and code security audit, then adds privacy safeguards and custom agents across everyday operations.",
    featured: true,
  },
  {
    icon: LifeBuoy,
    title: "Six-Month Post-Launch Care",
    body: "Includes six full months of system monitoring, accuracy checks and monthly workflow adjustments after setup.",
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: "Luxury E-Commerce & Furniture Showrooms",
    body: "Answer questions about collections, materials and pricing. Check whether a piece fits a room layout, then book a showroom visit while keeping customer records secure.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality Groups",
    body: "Handle room availability, conference quotes and guest requests across branches while protecting guest identity and payment records.",
  },
  {
    icon: Stethoscope,
    title: "Hospitals, A&E & Clinics",
    body: "Prepare a pre-bay brief from nursing triage notes and returning blood results, organise consultation notes around the presenting complaint, examination and patient ICE, and draft discharge or GP handover summaries for clinical review.",
  },
];

const workflow = [
  {
    title: "Find the bottleneck",
    body: "Map the repetitive tasks, handoffs and delays taking time from your team.",
  },
  {
    title: "Choose one useful starting point",
    body: "Select a task where time saved, business value and risk are in balance.",
  },
  {
    title: "Build and test",
    body: "Connect approved data and tools, set clear limits, then test against real examples.",
  },
  {
    title: "Put it in your environment",
    body: "Set up access rules, activity records and a way to pause or roll back changes.",
  },
  {
    title: "Hand it over",
    body: "Your team receives the instructions, documentation and tests needed to manage the system.",
  },
];

const caseStudies = [
  {
    name: "Balance_ee",
    domain: "Health technology",
    description:
      "A working example carrying context across days to support reflection on habits, energy and recovery.",
    url: "https://partyrock.aws/u/Balancee/S9Kr4lZ5u/Balance_ee",
  },
  {
    name: "FitTrack Daily Progress Monitor",
    domain: "Fitness and health technology",
    description:
      "A daily progress tool follows trends and adds context, so people can interpret changes without reviewing each number alone.",
    url: "https://partyrock.aws/u/Nonsoo/lA8IeBNX4/FitTrack-Daily-Progress-Monitor",
  },
];

const principles = [
  {
    title: "Values before targets",
    body: "Set the business values and limits before choosing what an agent should optimise.",
  },
  {
    title: "Reason through unfamiliar cases",
    body: "Test how the system handles new situations, competing needs and uncertainty.",
  },
  {
    title: "Keep autonomy in bounds",
    body: "People retain oversight, especially in health, finance and other sensitive work.",
  },
  {
    title: "Make decisions reviewable",
    body: "Keep an activity trail so your team can see what happened, check it and take responsibility.",
  },
];

const AgenticAI = () => (
  <>
    <Seo
      title="Agentic AI Development in Abuja, Nigeria | BioCircuit Laboratories"
      description="Secure, custom AI agents for businesses in Abuja and across Nigeria. Connect company records, approved tools and workflows in your cloud or on-premise environment."
      path="/agentic-ai"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Agentic AI development",
        name: "Agentic AI development",
        description:
          "Custom AI agents connected to approved company data and tools, with human review, access controls and deployment in a private cloud or on-premise environment.",
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
      theme="obsidian"
      overline="Agentic AI • Cloud or on-premise • NDPA, UK GDPR & HIPAA aligned"
      title="BioCircuit Laboratories builds secure AI agents to take repetitive work off your team."
      subtitle="Connect custom workflows to company records, online catalogs or patient intake systems. Keep them in your cloud or run them on hardware inside your building."
      heroAction={
        <Button asChild className="rounded-sm">
          <a href="#book-call">Book a 15-Minute Call <ArrowUpRight aria-hidden="true" /></a>
        </Button>
      }
      trustNote="First six months of maintenance and tuning included. Year-end setup slots open through January 15, 2027."
    >
      <Reveal className="mb-24">
        <div className="grid items-center gap-10 surface p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-14">
          <div>
            <p className="overline text-accent mb-6">What the system does</p>
            <p className="font-body text-base text-platinum-dim leading-relaxed mb-5">
              An agent is a software system with a defined role, access to selected information and a limited set of actions. It can plan a task, carry it out, check the result and ask for help when needed.
            </p>
            <p className="font-body text-base text-platinum-dim leading-relaxed">
              The work is in the instructions, data connections, tools, handoffs and approval points around the model. Those parts make a workflow useful and safe to manage.
            </p>
          </div>
          <OrchestrationGraphic className="w-full h-auto animate-float" />
        </div>
      </Reveal>

      <SectionHeading overline="Your setup" title="How your system runs" />
      <div className="grid md:grid-cols-2 gap-5 mb-24">
        {setups.map((setup, index) => (
          <Reveal key={setup.title} delay={index * 0.05}>
            <div className="surface h-full p-7 sm:p-9">
              <setup.icon size={21} className="text-primary mb-6" strokeWidth={1.4} aria-hidden="true" />
              <h3 className="font-display text-2xl text-foreground mb-4">{setup.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{setup.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="The working parts"
        title="Built around your records, tools and team"
        intro="Clear instructions, approved information and carefully scoped connections keep routine work moving and leave people in control."
      />
      <div className="grid md:grid-cols-2 gap-px bg-platinum/10 border border-platinum/10 mb-24">
        {mechanics.map((mechanic, index) => (
          <Reveal key={mechanic.title} delay={index * 0.04}>
            <div className="bg-background h-full p-7 sm:p-9 hover:bg-card/60 transition-colors duration-700">
              <mechanic.icon size={20} className="text-accent mb-6" strokeWidth={1.3} aria-hidden="true" />
              <h3 className="font-display text-xl text-foreground mb-4">{mechanic.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{mechanic.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading overline="Services" title="What BioCircuit Laboratories builds for you" />
      <div className="grid md:grid-cols-3 gap-5 mb-24">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <div className={`surface h-full p-7 sm:p-8 ${service.featured ? "border-accent/40" : ""}`}>
              <service.icon size={20} className="text-primary mb-6" strokeWidth={1.35} aria-hidden="true" />
              {service.featured && <p className="overline text-accent mb-3">Flagship</p>}
              <h3 className="font-display text-xl text-foreground mb-4">{service.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="Industry examples"
        title="How different teams use these systems"
        intro="The work changes by industry. Data access, approval rules and handoffs are set for each team's needs."
      />
      <div className="grid md:grid-cols-3 gap-5 mb-24">
        {industries.map((industry, index) => (
          <Reveal key={industry.title} delay={index * 0.05}>
            <div className="surface h-full p-7 sm:p-8">
              <industry.icon size={20} className="text-primary mb-6" strokeWidth={1.35} aria-hidden="true" />
              <h3 className="font-display text-xl text-foreground mb-4">{industry.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{industry.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-24">
        <div className="surface border-accent/30 p-7 sm:p-10 lg:p-12">
          <div className="flex items-start gap-5">
            <UsersRound className="mt-1 shrink-0 text-accent" size={22} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <p className="overline text-accent mb-5">People stay in control</p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight max-w-3xl mb-5">
                Human-in-the-Loop Control: Built to Empower Your Team, Not Replace
              </h2>
              <p className="font-body text-sm sm:text-base text-platinum-dim leading-relaxed max-w-3xl">
                Combine automated execution with human intelligence checkpoints. Rather than cutting jobs, the system helps your existing staff build the skills to direct automated workflows. It handles repetitive catalog lookups, intake triage and draft preparation around the clock, while routing high-value quotes, clinical sign-offs and VIP bookings to your team for one-click review and approval.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <SectionHeading
        overline="Responsible agency"
        title="Where the boundaries sit"
        intro="Values, judgement, human oversight and a clear record of decisions shape how much freedom an agent gets."
      />
      <div className="grid md:grid-cols-2 gap-5 mb-24">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 0.05}>
            <div className="surface h-full p-7 sm:p-9">
              <h3 className="font-display text-xl text-foreground mb-4">{principle.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{principle.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="Health technology case studies"
        title="Working examples"
        intro="These prototypes show how the same approach can support different routines and audiences."
      />
      <div className="grid md:grid-cols-2 gap-5 mb-24">
        {caseStudies.map((study, index) => (
          <Reveal key={study.name} delay={index * 0.05}>
            <a href={study.url} target="_blank" rel="noopener noreferrer" className="surface surface-hover group block h-full p-7 sm:p-9">
              <p className="overline text-platinum-dim mb-5">{study.domain}</p>
              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">{study.name}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed mb-6">{study.description}</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-accent">
                View prototype <ArrowUpRight size={13} aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="The process"
        title="Engagement Protocol"
        intro="Five steps from the first review through handover."
      />
      <div className="mb-24">
        <NumberedList items={workflow} />
      </div>

      <ServiceInquiryForm kind="agentic-ai" />
    </ServicePageLayout>
  </>
);

export default AgenticAI;