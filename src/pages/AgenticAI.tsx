import { Reveal, SectionHeading, NumberedList, ContactBlock } from "@/components/Lux";
import ServicePageLayout from "@/components/ServicePageLayout";
import OrchestrationGraphic from "@/components/OrchestrationGraphic";
import Seo from "@/components/Seo";
import { ExternalLink, Lock, PenTool, Database, Plug, Network, Gauge } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/KwehCRUrHg3aZepu6";

const mechanics = [
  {
    icon: PenTool,
    title: "System prompting and role design",
    body: "Every agent gets a written job description: what it owns, what it must never touch, how it should escalate. We ground that instruction set in your own documents, policies and tone, so the agent behaves like someone who already works there.",
  },
  {
    icon: Database,
    title: "Retrieval over your database",
    body: "The agent answers from your records, not from whatever the open internet happens to say. We index your data, keep it in your environment, and cite the source row or document behind an answer so your team can check it.",
  },
  {
    icon: Plug,
    title: "Tools and API calls",
    body: "An agent that can only talk is a chatbot. We give ours the ability to act: create the invoice, move the ticket, book the slot, update the record. Each tool is scoped, logged and reversible.",
  },
  {
    icon: Network,
    title: "Orchestration",
    body: "Real work needs more than one agent. We design the handoffs between them, decide who calls who, and place a human approval gate wherever the decision is expensive or hard to undo.",
  },
  {
    icon: Gauge,
    title: "Evaluation and guardrails",
    body: "We build a test set from your real cases before anything ships, then measure against it after every change. Refusal rules, rate limits and output validation sit around the model so failures stay small and visible.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    body: "We deploy into your cloud tenancy where you want it. No training on your data, keys held by you, access scoped to least privilege, and the whole thing handed over editable so your team can change a prompt without calling us.",
  },
];

const workflow = [
  {
    title: "Find the bottleneck",
    body: "We sit with your team for a week and watch where the hours actually go. Usually it is not the work people describe in meetings. It is the copying, the chasing, the reconciling, the same answer typed out forty times.",
  },
  {
    title: "Scope one agent, not ten",
    body: "We pick the single task with the best ratio of hours saved to risk carried, and build that first. You get something in production early instead of a roadmap.",
  },
  {
    title: "Build, ground, and test",
    body: "Prompting, retrieval over your data, tool access, guardrails, and an evaluation set drawn from your real cases. We show you the failure modes rather than hiding them.",
  },
  {
    title: "Deploy inside your walls",
    body: "Into your AWS or Azure account, with logging and audit trails, access control, and a rollback path. Your security team gets the architecture before the launch, not after.",
  },
  {
    title: "Hand it over",
    body: "Documentation, prompts, and the evaluation harness go to your team. You can edit, extend and retire the agent without us. We stay on if you want us to, not because you are locked in.",
  },
];

const caseStudies = [
  {
    name: "Balance_ee",
    domain: "Health tech",
    description:
      "An agent that helps people balance daily habits, energy and recovery. Built as part of our health tech series, it shows the pattern of an agent that holds context across days and gives a useful nudge rather than a generic one.",
    url: "https://partyrock.aws/u/Balancee/S9Kr4lZ5u/Balance_ee",
  },
  {
    name: "FitTrack Daily Progress Monitor",
    domain: "Fitness and health tech",
    description:
      "Monitors daily progress, surfaces the trend behind the numbers, and gives contextual feedback. A working example of an agent doing the tracking and interpretation a human would otherwise do by hand.",
    url: "https://partyrock.aws/u/Nonsoo/lA8IeBNX4/FitTrack-Daily-Progress-Monitor",
  },
];

const pillars = [
  {
    title: "Value alignment",
    body: "The agent should understand and act on the values of the business it serves, not maximise a number nobody agreed to. We write those values down before we write the prompt.",
  },
  {
    title: "Responsible reasoning",
    body: "Systems need the reasoning capacity to work through a dilemma they have not seen before, weigh competing considerations, and apply a principle rather than pattern match on it.",
  },
  {
    title: "Appropriate autonomy",
    body: "Clear boundaries and human oversight, especially in clinical care, finance and anything safety adjacent. Some decisions should never be automatic, and we say which ones.",
  },
  {
    title: "Transparency and accountability",
    body: "Every action is traceable. You can inspect why the agent did what it did, and an external reviewer can audit it. If nobody can explain the decision, it should not have shipped.",
  },
];

const AgenticAI = () => (
  <>
    <Seo
      title="Agentic AI Development in Abuja, Nigeria | BioCircuit Laboratories"
      description="We build secure, customisable AI agents for businesses in Abuja and across Nigeria: system prompting, retrieval over your own database, tool and API orchestration, guardrails and deployment in your own cloud."
      path="/agentic-ai"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Agentic AI development",
        name: "Agentic AI development",
        description:
          "Custom AI agents grounded in your own data, with orchestration, guardrails and deployment inside your own cloud tenancy.",
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
      overline="Agentic AI"
      title="Agents that clear the bottleneck"
      subtitle="Most teams are not short on talent. They are short on hours, because the same small tasks keep eating them. We build AI agents that take those tasks off your people: secure, grounded in your own data, and yours to edit."
    >
      <Reveal className="mb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center surface p-10 lg:p-14">
          <div>
            <p className="overline text-platinum-dim mb-6">What an agent actually is</p>
            <p className="font-body text-base text-platinum-dim leading-relaxed mb-5">
              An agent is not a chat window. It is a model given a defined role, access to your data,
              a set of tools it is allowed to use, and a loop in which it plans, acts, checks the
              result and tries again.
            </p>
            <p className="font-body text-base text-platinum-dim leading-relaxed">
              The value is in everything around the model: the prompting, the retrieval, the API
              layer, the orchestration between agents, and the guardrails that decide when a human
              has to sign off. That is the part we build.
            </p>
          </div>
          <OrchestrationGraphic className="w-full h-auto animate-float" />
        </div>
      </Reveal>

      <SectionHeading
        overline="The mechanics"
        title="How we build them"
        intro="No mystery, no black box. This is the stack under every agent we ship."
      />

      <div className="grid md:grid-cols-2 gap-px bg-platinum/10 border border-platinum/10 mb-24">
        {mechanics.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.04}>
            <div className="bg-background h-full p-9 hover:bg-card/60 transition-colors duration-700">
              <m.icon size={20} className="text-primary mb-6" strokeWidth={1.25} />
              <h3 className="font-display text-xl text-foreground mb-4">{m.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeading overline="How we work" title="From first conversation to handover" />
      <div className="mb-24">
        <NumberedList items={workflow} />
      </div>

      <SectionHeading
        overline="Case studies"
        title="Agents we have built"
        intro="Live prototypes from our health tech series. Same pattern, different industries, and we are now taking the pattern into new ones."
      />
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.name} delay={i * 0.06}>
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface surface-hover block h-full p-9 group"
            >
              <p className="overline text-platinum-dim mb-5">{cs.domain}</p>
              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                {cs.name}
              </h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed mb-6">{cs.description}</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary">
                View prototype <ExternalLink size={12} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <SectionHeading
        overline="Responsible agency"
        title="What we hold ourselves to"
        intro="Responsible agency is a system's capacity to make good judgments and act in a socially responsible way. These four things decide which models we use and how far we let an agent go on its own."
      />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="surface h-full p-9">
              <h3 className="font-display text-xl text-foreground mb-4">{p.title}</h3>
              <p className="font-body text-sm text-platinum-dim leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
        >
          Join the waitlist for early access <ExternalLink size={12} />
        </a>
      </Reveal>

      <ContactBlock
        service="an agent"
        subject="Agentic AI enquiry"
        body="Tell us about the task you want taken off your team, roughly how often it happens, and what systems it touches."
      />
    </ServicePageLayout>
  </>
);

export default AgenticAI;
