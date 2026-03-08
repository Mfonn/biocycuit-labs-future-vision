import { motion } from "framer-motion";
import { Database, Download, FileText, BarChart3, Lock } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const datasets = [
  {
    title: "Water Molecular Properties Dataset",
    description: "Measurements of water conductivity, pH, and structural properties across 50+ natural sources. Collected as part of our ongoing water research initiative.",
    size: "2.3 GB",
    format: "CSV / JSON",
    access: "Open",
  },
  {
    title: "Biomarker Expression Profiles",
    description: "Gene expression data from various wellness-related biomarkers, curated for machine learning applications in health prediction.",
    size: "5.1 GB",
    format: "Parquet / CSV",
    access: "Open",
  },
  {
    title: "Environmental Microbiome Samples",
    description: "16S rRNA sequencing data from urban and rural environments. Ideal for training classification models on microbial ecosystems.",
    size: "12 GB",
    format: "FASTQ / CSV",
    access: "Request",
  },
  {
    title: "Biotechnology Industry Trends",
    description: "Scraped and curated dataset of biotech industry news, patent filings, and research papers, structured for NLP and trend analysis.",
    size: "800 MB",
    format: "JSON",
    access: "Open",
  },
];

const MachineLearningData = () => {
  return (
    <ServicePageLayout
      title="Machine Learning Data"
      subtitle="Access curated datasets powering the next generation of biological insights. Open data for open science."
      overline="Data & ML"
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
      >
        {[
          { value: "4+", label: "Datasets" },
          { value: "20GB+", label: "Total Data" },
          { value: "Open", label: "Access Model" },
          { value: "Active", label: "Updates" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 rounded-xl border border-border bg-card/50">
            <span className="font-display text-2xl font-bold text-primary">{stat.value}</span>
            <span className="block font-body text-xs text-muted-foreground mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Dataset cards */}
      <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
        Available Datasets
      </h2>
      <div className="space-y-6 mb-16">
        {datasets.map((ds, i) => (
          <motion.div
            key={ds.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Database size={18} className="text-primary shrink-0" />
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {ds.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {ds.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-secondary">
                    <FileText size={10} /> {ds.format}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-secondary">
                    <BarChart3 size={10} /> {ds.size}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-secondary">
                    {ds.access === "Open" ? <Download size={10} /> : <Lock size={10} />}
                    {ds.access}
                  </span>
                </div>
              </div>
              <a
                href={`mailto:Biocircuitlaboratories@gmail.com?subject=Dataset Access: ${ds.title}`}
                className="shrink-0 px-5 py-2.5 rounded-lg font-display text-xs tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                {ds.access === "Open" ? "Access Data" : "Request Access"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Usage note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
      >
        <h2 className="font-display text-xl font-bold text-foreground mb-4">Data Usage Policy</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          All open datasets are free for research, education, and non-commercial use. 
          Attribution to BioCircuit Laboratories is appreciated. For commercial licensing, 
          please reach out to our data team.
        </p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default MachineLearningData;
