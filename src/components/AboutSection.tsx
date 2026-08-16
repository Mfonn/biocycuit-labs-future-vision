import { Reveal } from "@/components/Lux";

const facts = [
  { k: "Based in", v: "Abuja, Nigeria" },
  { k: "Working", v: "Wherever the problem is" },
  { k: "Fields", v: "Agentic AI · Cloud security · Research" },
  { k: "Compliance", v: "NDPA · NDPR · GDPR" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24">
        <Reveal>
          <p className="overline text-primary mb-6">Who we are</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.06] text-foreground mb-9">
            A small practice that takes the
            <span className="text-gradient-primary italic"> boring parts</span> seriously.
          </h2>
          <div className="space-y-6 font-body text-base text-platinum-dim leading-relaxed max-w-xl">
            <p>
              We started in the laboratory and ended up in the cloud, which turns out to be a
              useful route. Research taught us to be sceptical of a result until we can reproduce
              it. That habit is the reason our agents ship with evaluation sets and our security
              work ends in evidence rather than a slide.
            </p>
            <p>
              Most of what we build is unglamorous. A system prompt that finally reflects your own
              policy. A retrieval layer pointed at your records instead of the open internet. A
              Terraform state file that somebody can read a year from now. Access reviews that
              actually got done.
            </p>
            <p>
              We keep the client list short on purpose, and we say no to work we would be only
              passable at.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="divide-y divide-platinum/10 border-y border-platinum/10">
            {facts.map((f) => (
              <div key={f.k} className="py-7">
                <p className="overline text-platinum-dim mb-3">{f.k}</p>
                <p className="font-display text-lg text-foreground">{f.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
