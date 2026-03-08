import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Wrestling Traditions — Biomechanics & Conditioning",
    era: "Traditional Foundation",
    content: [
      "West African wrestling (Laamb in Senegal, Lutte Traditionnelle across the Sahel) is one of the oldest organized sports on the continent, with traditions dating back centuries. Senegalese wrestlers undergo rigorous physical conditioning regimens that combine strength training, flexibility work, and spiritual preparation — a holistic approach that modern sports science is only now beginning to validate.",
      "The training methods are biomechanically sophisticated: wrestlers practice explosive hip drives, rotational throws, and ground control techniques that develop functional strength across multiple planes of motion. Training camps (écuries) prescribe diets rich in millet porridge (thiéré), baobab fruit juice (bouye), and fermented milk (lait caillé) — foods now recognized for their high mineral content, complex carbohydrates, and probiotic benefits.",
      "Traditional pre-fight rituals involve the application of gris-gris (amulets) and herbal preparations to the skin. While the spiritual dimensions are culturally specific, many of the plant extracts used — shea butter for joint lubrication, neem oil for anti-inflammatory properties, and eucalyptus preparations for respiratory opening — have documented pharmacological activity.",
    ],
  },
  {
    title: "Long-Distance Running — Altitude Adaptation & Nutrition",
    era: "Traditional Foundation",
    content: [
      "East African distance running dominance — particularly among Kenyan Kalenjin and Ethiopian athletes — is one of the most studied phenomena in sports science. While genetics play a role (specific polymorphisms in the ACE gene and ACTN3 gene are more prevalent), the traditional lifestyle factors are equally significant: high-altitude living (2,000-2,500m), which naturally elevates hemoglobin and erythropoietin levels, and childhood patterns of running long distances to school.",
      "Traditional diets in running communities center on ugali (maize meal), mursik (fermented milk from the Kalenjin), sukuma wiki (collard greens), and chai with high sugar content for energy. Nutritional analysis reveals these diets are naturally high in complex carbohydrates (70-75% of calories), moderate in protein, and rich in iron and B-vitamins — closely matching what modern sports nutrition recommends for endurance athletes.",
      "The fermented milk tradition is particularly notable: mursik is fermented in gourds lined with charcoal from the cromwo tree (Senna didymobotrya), creating a probiotic-rich food with potential gut-microbiome benefits for nutrient absorption and immune function during intense training. BioCircuit's consulting practice helps sports brands understand and apply these ancestral nutritional strategies alongside modern microbiome science.",
    ],
  },
  {
    title: "Herbal Medicine for Athletic Performance",
    era: "Traditional Foundation",
    content: [
      "African ethnobotanical traditions contain a rich pharmacopeia of performance-enhancing plants — not in the banned-substance sense, but as natural adaptogens, anti-inflammatories, and recovery aids. Research published in Clinical Phytoscience (2025) and the Journal of Ethnopharmacology documents several traditionally used plants with scientifically validated effects:",
      "Ashwagandha (Withania somnifera), used across East African traditional medicine, has been shown in randomized controlled trials to increase VO₂ max, improve muscular strength, and reduce exercise-induced cortisol levels. Moringa oleifera, widely consumed in West African communities, contains high concentrations of quercetin and chlorogenic acid — antioxidants that reduce exercise-induced oxidative stress and inflammation.",
      "Devil's Claw (Harpagophytum procumbens), indigenous to Southern Africa, contains harpagoside — an iridoid glycoside with anti-inflammatory potency comparable to low-dose NSAIDs without gastrointestinal side effects. Rooibos (Aspalathus linearis) provides aspalathin, a unique flavonoid with demonstrated anti-oxidant and cardioprotective properties relevant to endurance athletes.",
      "BioCircuit consults sports nutrition brands on developing evidence-based formulations inspired by African ethnobotany — ensuring proper dosing, bioavailability optimization (using liposomal delivery or cyclodextrin encapsulation), and rigorous quality control while honoring the traditional knowledge systems that identified these compounds.",
    ],
  },
  {
    title: "Recovery & Regeneration — Traditional Bodywork",
    era: "Traditional Foundation",
    content: [
      "African healing traditions include sophisticated bodywork modalities that address musculoskeletal recovery. The Maasai practice of olmurrana (warrior-stage) body conditioning includes deep tissue manipulation, passive stretching, and the application of heated herbal compresses — techniques that parallel modern myofascial release, PNF stretching, and thermotherapy.",
      "South African traditional healers (izinyanga) use steam baths (ukufutha) infused with medicinal plants — eucalyptus, wild garlic (Tulbaghia violacea), and African ginger (Siphonochilus aethiopicus) — for respiratory recovery and muscle relaxation. The active compounds in these plants (1,8-cineole from eucalyptus, allicin from garlic, and furanoterpenoids from African ginger) have demonstrated anti-inflammatory, bronchodilatory, and analgesic properties.",
      "Our consulting practice helps wellness and sports recovery brands develop protocols that integrate these traditional modalities with modern recovery science: contrast therapy, pneumatic compression, and photobiomodulation — creating holistic recovery systems rooted in evidence from both traditions.",
    ],
  },
  {
    title: "Biotech-Enhanced Performance Analytics",
    era: "Biotechnology Frontier",
    content: [
      "Modern sports biotechnology offers tools that can quantify and optimize what traditional practices achieved intuitively. Wearable biosensors continuously monitor lactate threshold, muscle oxygenation (SmO₂), heart rate variability, and sweat electrolyte composition — providing real-time biofeedback that guides training intensity and recovery timing.",
      "Microbiome profiling — analyzing the gut bacteria of athletes — reveals that elite endurance athletes harbor distinct microbial communities (particularly Veillonella atypica, which metabolizes exercise-produced lactate into propionate, a short-chain fatty acid that enhances endurance). Traditional fermented foods like mursik, ogi (fermented maize), and dawadawa may naturally cultivate beneficial athletic microbiomes.",
      "Genomic and epigenomic analysis can identify individual variations in muscle fiber composition (slow-twitch vs. fast-twitch ratios), recovery capacity (inflammatory response genes), and injury susceptibility (collagen gene variants) — enabling truly personalized training programs. Combined with traditional conditioning wisdom, this creates a complete picture: ancestral knowledge tells us what works; biotechnology tells us why and for whom.",
      "BioCircuit consults sports organizations, athletic brands, and performance centers on integrating biotechnology analytics with culturally-informed training methodologies — building performance systems that are both cutting-edge and deeply human.",
    ],
  },
];

const SportsPerformance = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/biotechnology-consulting" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Consulting</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground">Sports & Performance</span>
        </div>
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-bio-warm/5 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4">Train Like Ancestors, Perform Like the Future</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Sports & <span className="text-gradient-primary">Performance</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            African athletic traditions — from Senegalese wrestling to East African endurance running — contain performance wisdom that modern sports science is only beginning to decode. We bridge ancestral conditioning with biotech analytics.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group">
              <div className="flex items-center gap-3 mb-4">
                {section.era === "Traditional Foundation" ? <Leaf size={18} className="text-bio-warm" /> : <Zap size={18} className="text-primary" />}
                <span className={`text-[10px] tracking-[0.3em] uppercase font-body ${section.era === "Traditional Foundation" ? "text-bio-warm" : "text-primary"}`}>{section.era}</span>
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
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Elevate Your Performance Program</h2>
          <p className="font-body text-muted-foreground mb-6">For sports brands, athletic organizations, and performance centers looking to integrate biotechnology with time-tested conditioning wisdom.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:consulting@biocircuitlaboratories.org?subject=Sports Consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">Start a Conversation</a>
            <Link to="/biotechnology-consulting" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">← All Consulting Areas</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPerformance;
