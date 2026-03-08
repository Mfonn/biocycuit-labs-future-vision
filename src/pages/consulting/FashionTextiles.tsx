import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Barkcloth — The Original Sustainable Textile",
    era: "Traditional Foundation",
    content: [
      "Barkcloth (olubugo) is one of Africa's oldest textile technologies, produced by the Baganda people of Uganda for over 600 years. Harvested from the inner bark of the Mutuba tree (Ficus natalensis), barkcloth is made by repeatedly beating the bark with wooden mallets until it becomes soft, supple, and fabric-like — all without killing the tree. The bark regenerates annually, making it one of the earliest examples of sustainable, renewable textile production.",
      "Barkcloth served multiple ceremonial and practical purposes: it was worn by royalty during coronations, used as burial shrouds, draped during wedding ceremonies, and fashioned into garments for warriors. Its terracotta color and organic texture carried cultural significance — different treatments and patterns indicated social status, clan affiliation, and spiritual protection.",
      "In 2005, UNESCO recognized Ugandan barkcloth making as an Intangible Cultural Heritage of Humanity. Today, designers are rediscovering barkcloth as a zero-chemical, biodegradable alternative to synthetic fabrics — a material that was sustainable before sustainability had a name.",
    ],
  },
  {
    title: "Bogolanfini (Mud Cloth) — Biochemistry in Pattern",
    era: "Traditional Foundation",
    content: [
      "Bogolanfini — literally 'earth cloth' — is a Malian textile tradition dating back to at least the 12th century. The process is a masterclass in natural biochemistry: handspun cotton is soaked in a bath of n'galama tree leaves (Anogeissus leiocarpa), which deposits tannins into the fibers. Fermented river mud, rich in iron oxide, is then painted onto the fabric in intricate patterns. The iron in the mud reacts with the tannins through a chelation reaction, forming a permanent, washfast dark pigment.",
      "This is not folk art — it is applied chemistry. The mordanting (tannin fixation), iron-oxide reaction, and sun-bleaching steps mirror industrial dyeing processes but use entirely biological reagents. Mud cloth patterns were historically encoded with meaning: specific motifs indicated a warrior's bravery, a woman's marital status, or protective spiritual symbols worn during battle.",
      "BioCircuit's consulting practice helps fashion brands reverse-engineer these biochemical dyeing processes, optimize them for scale using fermentation biotechnology, and develop new bio-based colorants inspired by the chelation chemistry that Malian artisans perfected centuries ago.",
    ],
  },
  {
    title: "Kente — Engineering in Thread",
    era: "Traditional Foundation",
    content: [
      "Kente cloth, originating from the Ashanti and Ewe peoples of Ghana and Togo, is one of the most technically complex textiles ever produced by hand. Woven on narrow-strip looms, kente involves the precise interlocking of warp and weft threads in mathematical patterns — each strip is typically 4 inches wide and must be joined edge-to-edge to create larger cloths with perfectly aligned geometric designs.",
      "The weaving patterns encode information: specific color combinations and geometric arrangements carry names and proverbs. Gold represents royalty and wealth (associated with the Ashanti monarchy), blue represents peace and harmony, green represents growth and renewal. The cloth was historically reserved for sacred ceremonies — enstoolment of chiefs, religious festivals, and rites of passage.",
      "From a biotechnology perspective, kente's precision weaving anticipates modern textile engineering principles: controlled fiber orientation, repeating unit cells, and hierarchical structure. Our consulting work explores how bio-fabricated fibers — spider silk proteins, cellulose nanofibers, and mycelium-based textiles — can be woven using kente-inspired patterns, merging ancestral engineering with synthetic biology.",
    ],
  },
  {
    title: "Bio-Fabricated Materials — The Future",
    era: "Biotechnology Frontier",
    content: [
      "Modern biotechnology is producing materials that would have been recognizable to African textile ancestors: grown, not manufactured. Mycelium leather (from companies like Bolt Threads and MycoWorks) grows fungal networks into leather-like sheets. Bacterial cellulose, produced by Acetobacter xylinum, self-assembles into strong, flexible films. Recombinant spider silk proteins, expressed in engineered yeast or bacteria, produce fibers with tensile strength exceeding steel.",
      "These bio-fabricated materials share a philosophy with traditional African textiles: they work with biological processes rather than against them. Barkcloth grows on trees; mycelium leather grows in trays. Mud cloth uses fermentation chemistry; bacterial cellulose is a fermentation product. The through-line is biological manufacturing.",
      "BioCircuit Laboratories consults fashion brands on integrating these materials into their supply chains — from fiber selection and bio-fabrication protocol design to scaling production. We also develop hybrid approaches: bio-dyed textiles using optimized versions of traditional African dyeing chemistries, structural textiles inspired by kente weaving mathematics, and sustainable packaging derived from barkcloth processing techniques.",
    ],
  },
  {
    title: "Smart Textiles & Wearable Biosensors",
    era: "Biotechnology Frontier",
    content: [
      "The next frontier merges African textile artistry with wearable biotechnology. Smart textiles incorporate biosensors — conductive fibers, piezoelectric elements, or biological sensing components — directly into fabric. These garments can monitor heart rate, hydration, muscle activation, and even biochemical markers in sweat.",
      "Traditional African garments were already 'smart' in a cultural sense — mud cloth patterns communicated identity and status, barkcloth treatment indicated ceremony type. We envision textiles that are smart in both senses: culturally meaningful patterns woven from bio-sensing fibers, garments that honor ancestral design while monitoring the wearer's health.",
      "Our consulting services help sportswear brands, fashion houses, and health-tech companies design wearable biosensor textiles — from fiber-level engineering to garment construction — drawing on both cutting-edge bioelectronics and the deep textile intelligence of African traditions.",
    ],
  },
];

const FashionTextiles = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/biotechnology-consulting" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} />
            <span>Consulting</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground">Fashion & Textiles</span>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">
            Past × Future
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Fashion & <span className="text-gradient-primary">Textiles</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From barkcloth and mud cloth to mycelium leather and biosensor garments — African textile traditions pioneered sustainable, biologically-integrated fabrication centuries before modern biotech. We bridge both worlds.
          </motion.p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.era === "Traditional Foundation" ? (
                  <Leaf size={18} className="text-bio-warm" />
                ) : (
                  <Zap size={18} className="text-primary" />
                )}
                <span className={`text-[10px] tracking-[0.3em] uppercase font-body ${section.era === "Traditional Foundation" ? "text-bio-warm" : "text-primary"}`}>
                  {section.era}
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{section.title}</h2>

              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed pl-6 border-l-2 border-border group-hover:border-primary/40 transition-colors duration-500">
                {section.content.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Ready to Weave the Future?</h2>
          <p className="font-body text-muted-foreground mb-6">Whether you're a fashion brand, textile innovator, or cultural institution — let's explore what biotechnology and tradition can build together.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:Biocircuitlaboratories@gmail.com?subject=Fashion & Textiles Consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
              Start a Conversation
            </a>
            <Link to="/biotechnology-consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">
              ← All Consulting Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionTextiles;
