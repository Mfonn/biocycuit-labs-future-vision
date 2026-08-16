import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import Seo from "@/components/Seo";
import { Reveal, ContactBlock } from "@/components/Lux";

const researchProjects = [
  {
    title: "Oxytocin and sympathetic innervation of the ovaries",
    slug: "/research",
    field: "Reproductive neuroendocrinology",
    status: "Underway",
    description:
      "Our current programme. How oxytocin signalling and sympathetic innervation talk to each other in the ovary, and what that crosstalk means for ovarian function and reproductive health.",
    tags: ["Oxytocin", "Neuroendocrinology", "Ovarian function", "Autonomic nervous system"],
  },
  {
    title: "Autism and neurodivergence",
    slug: "/research/autism-neurodivergence",
    field: "Biopsychiatry",
    status: "Published",
    description:
      "Autism spectrum conditions read through a biopsychiatric lens: neurological architecture, sensory processing, and what the neurodiversity paradigm gets right.",
    tags: ["Neuroscience", "Biopsychiatry", "Sensory processing"],
  },
  {
    title: "Water",
    slug: "/research/water",
    field: "Molecular biology",
    status: "Open contribution",
    description:
      "An open investigation into the molecular properties, structure and biological significance of water, kept deliberately open to outside contribution and review.",
    tags: ["Molecular structure", "Conductivity", "Biophysics"],
  },
  {
    title: "Numerology and mathematical patterns",
    slug: "/research/numerology",
    field: "Mathematical biology",
    status: "In progress",
    description:
      "Whether numeric relationships map onto natural phenomena, and where pattern recognition stops being science and starts being wishful thinking.",
    tags: ["Number theory", "Pattern recognition", "Systems theory"],
  },
  {
    title: "Mycelium as multi-electrode arrays",
    slug: "/research/mycelium-electrode-arrays",
    field: "Bioelectronics",
    status: "Published",
    description:
      "Fungal mycelium networks as living multi-electrode arrays: biological substrates that sense, process and transmit electrical signal.",
    tags: ["Mycelium", "Bioelectronics", "Biosensors"],
  },
];

const Research = () => (
  <>
    <Seo
      title="Research | BioCircuit Laboratories, Abuja"
      description="Our own research programme: oxytocin and ovarian innervation, bioelectronics, water, and neurodivergence. The work behind our commissioned deep research practice."
      path="/research"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: researchProjects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: `https://biocircuitlaboratories.com.ng${p.slug}`,
        })),
      }}
    />
    <ServicePageLayout
      overline="Research"
      title="The work we do when nobody has commissioned it"
      subtitle="Our own programme, run to the same standard as the research clients pay us for. Neuroendocrinology, bioelectronics, molecular biology. Published where it is ready, open where it is still moving."
    >
      <div className="border-t border-platinum/10">
        {researchProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <Link
              to={project.slug}
              className="group grid lg:grid-cols-[1fr_260px] gap-6 lg:gap-12 py-11 border-b border-platinum/10 hover:bg-card/40 transition-colors duration-700 px-2 lg:px-5"
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="overline text-platinum-dim">{project.field}</span>
                  <span className="text-[10px] font-body uppercase tracking-[0.18em] border border-primary/35 text-primary px-2.5 py-1">
                    {project.status}
                  </span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h2>
                <p className="font-body text-sm lg:text-base text-platinum-dim leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-7">
                <ul className="space-y-2.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="font-body text-xs uppercase tracking-[0.16em] text-platinum-dim">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  Read <ArrowRight size={12} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <ContactBlock
        service="this research"
        subject="Research collaboration"
        note="If you are a researcher, a student, or simply someone who has read closely and disagrees with us, write. We take peer review seriously and we answer every serious message."
      />
    </ServicePageLayout>
  </>
);

export default Research;
