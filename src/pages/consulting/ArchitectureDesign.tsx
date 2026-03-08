import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Great Zimbabwe — Dry Stone Engineering",
    era: "Traditional Foundation",
    content: [
      "The Great Zimbabwe ruins (11th–15th century) represent one of the most sophisticated architectural achievements in pre-colonial Africa. The Great Enclosure's walls stand 11 meters high and 5 meters thick, constructed entirely from granite blocks without mortar — using a dry-stone technique where each block is precisely shaped and fitted by gravity and friction alone. The walls incorporate a slight inward lean and curvature that distributes load efficiently, demonstrating an intuitive understanding of structural engineering.",
      "The chevron and herringbone patterns decorating the walls are not merely ornamental — they function as structural reinforcement, interlocking courses of stone to resist lateral forces. This is the same principle behind modern geotextile reinforcement. The elliptical floor plan of the Great Enclosure optimizes enclosed area relative to wall material, a geometric efficiency that modern architects rediscovered through computational optimization.",
      "BioCircuit's architectural consulting draws on these principles: gravity-based structural systems, material-efficient geometries, and decorative elements that serve structural functions. We help architects design buildings where ornamentation and engineering are unified — as they were at Great Zimbabwe.",
    ],
  },
  {
    title: "Rammed Earth & Adobe — Living Walls",
    era: "Traditional Foundation",
    content: [
      "Across West Africa, the Sahel, and East Africa, rammed earth (pisé) and adobe construction have housed communities for millennia. The Great Mosque of Djenné in Mali, rebuilt annually since the 13th century, is the largest mud-brick structure on Earth — its walls up to 60cm thick provide extraordinary thermal mass, keeping interiors cool during Saharan heat and warm during cold desert nights.",
      "The science behind earth building is thermodynamics: high thermal mass materials absorb heat slowly during the day and release it slowly at night, naturally regulating interior temperature without mechanical systems. Adobe walls also regulate humidity — clay absorbs moisture from humid air and releases it when air is dry, maintaining comfortable relative humidity (40-60%) that modern HVAC systems struggle to achieve.",
      "Earth building traditions also incorporated biological additives: cow dung mixed into plaster provides natural waterproofing due to its lipid content, shea butter was applied to surfaces for moisture resistance, and fermented locust bean (dawadawa) was mixed into adobe for increased binding strength — an early form of bio-composite engineering.",
      "Our consulting practice helps architects integrate these principles with modern biotechnology: bio-cemented rammed earth (using microbially induced calcite precipitation — MICP), self-healing concrete inoculated with Bacillus bacteria that precipitate limestone when cracks expose them to water, and mycelium-based insulation panels grown from agricultural waste.",
    ],
  },
  {
    title: "Thatch Architecture — Biomechanical Roofing",
    era: "Traditional Foundation",
    content: [
      "The iconic rondavel (round house with conical thatched roof) found across Southern and East Africa represents a biomechanically optimized structure. The circular floor plan eliminates corners — stress concentration points that are structural weaknesses — and distributes wind loads evenly around the wall circumference. The conical roof sheds rain at angles steep enough to prevent water penetration without the need for synthetic waterproofing.",
      "Traditional thatching used specific grass species selected for their water-shedding properties — Hyparrhenia hirta (thatching grass) has a natural waxy cuticle that repels water, while its hollow stem structure creates insulating air pockets. When properly layered at 45-degree angles, thatch provides R-values (insulation capacity) comparable to modern fiberglass insulation.",
      "The Zulu indlu (houseframe) used a woven lattice framework of pliable branches — essentially a biological space frame — that flexes under wind load rather than resisting it rigidly. This biomechanical approach (flexibility over rigidity) is now recognized in modern engineering as a superior strategy for structures in high-wind environments.",
    ],
  },
  {
    title: "Bio-Responsive Architecture — The Future",
    era: "Biotechnology Frontier",
    content: [
      "Modern biotechnology is producing building materials and systems that echo African traditions: materials that grow, breathe, self-repair, and regulate climate passively. Self-healing concrete uses dormant Bacillus spores embedded during mixing — when cracks form and water enters, the bacteria activate, consume calcium lactate nutrients, and precipitate limestone (CaCO₃) that fills the crack. This is the same mineralization chemistry that African earth builders used intuitively when adding biological binders.",
      "Mycelium-based construction materials — grown by inoculating agricultural waste with fungal spores — produce insulation panels, structural bricks, and acoustic tiles that are fire-resistant, biodegradable, and carbon-negative. Companies like Ecovative Design have commercialized mycelium packaging and insulation, and research into structural-grade mycelium composites is advancing rapidly.",
      "Bio-responsive facades use living organisms to regulate building performance: algae-filled glass panels (bioreactor facades) generate biomass while shading interiors, living walls filter air pollutants through plant root-zone microbial communities, and bioluminescent organisms are being engineered as alternatives to electrical lighting in low-traffic spaces.",
      "BioCircuit consults architects and developers on integrating these technologies — designing buildings that are part organism, part structure. We draw explicitly on African architectural precedents: if a Djenné mosque can regulate temperature through material science alone, a modern building should be able to do the same with the addition of synthetic biology.",
    ],
  },
  {
    title: "Termite Mound Biomimicry — Natural HVAC",
    era: "Traditional Foundation × Frontier",
    content: [
      "African termite mounds — particularly those of Macrotermes — are among the most sophisticated climate-control structures in nature. These mounds maintain internal temperatures within 1°C of 31°C despite external fluctuations of 30°C or more. They achieve this through a network of tunnels and chimneys that create convective airflow: hot air rises through central shafts, drawing cool air through subterranean tunnels moistened by the water table.",
      "This natural ventilation principle directly inspired the Eastgate Centre in Harare, Zimbabwe — designed by architect Mick Pearce in collaboration with engineer Ove Arup. The building uses no conventional air conditioning, instead relying on passive ventilation chimneys, thermal mass, and nighttime cooling — reducing energy consumption by 90% compared to conventional buildings of the same size.",
      "BioCircuit extends this biomimicry further: we consult on integrating microbial processes into building ventilation systems (biofilter walls that clean air while passively ventilating), thermal mass materials enhanced with phase-change bio-composites, and computational modeling of natural ventilation patterns for new building designs. Nature solved HVAC millions of years ago — our job is to translate those solutions into architecture.",
    ],
  },
];

const ArchitectureDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/biotechnology-consulting" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Consulting</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground">Architecture & Design</span>
        </div>
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">Built to Last, Grown to Adapt</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Architecture & <span className="text-gradient-primary">Design</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From Great Zimbabwe's dry-stone masonry to self-healing bio-concrete — African architectural traditions solved problems that modern buildings still struggle with. We bring both worlds together.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group">
              <div className="flex items-center gap-3 mb-4">
                {section.era.includes("Traditional") ? <Leaf size={18} className="text-bio-warm" /> : <Zap size={18} className="text-primary" />}
                <span className={`text-[10px] tracking-[0.3em] uppercase font-body ${section.era.includes("Traditional") && !section.era.includes("Frontier") ? "text-bio-warm" : "text-primary"}`}>{section.era}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{section.title}</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed pl-6 border-l-2 border-border group-hover:border-primary/40 transition-colors duration-500">
                {section.content.map((p, j) => (<p key={j}>{p}</p>))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Build the Future with Biology</h2>
          <p className="font-body text-muted-foreground mb-6">Whether you're designing a home, a commercial building, or an entire development — let's explore how biotechnology and ancestral engineering can shape your project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:consulting@biocircuitlaboratories.org?subject=Architecture Consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">Start a Conversation</a>
            <Link to="/biotechnology-consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">← All Consulting Areas</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitectureDesign;
