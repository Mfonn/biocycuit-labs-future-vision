import { motion } from "framer-motion";
import { ArrowLeft, Shield, Database, Wifi, WifiOff, Lock, Download, Monitor, Terminal, HardDrive, Brain, Eye, EyeOff, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  {
    icon: WifiOff,
    title: "Fully Offline",
    description: "Obsidian runs entirely on your local machine. No internet required after installation. Your AI works in airplane mode, in a bunker, anywhere.",
  },
  {
    icon: Lock,
    title: "Zero Data Leakage",
    description: "No telemetry. No analytics. No API calls to external servers. Your conversations, your documents, your knowledge — none of it ever leaves your device.",
  },
  {
    icon: Database,
    title: "Custom Knowledge Base",
    description: "Feed Obsidian your PDFs, text files, research papers, and notes. It learns only what you give it. Add knowledge, remove knowledge — you're in full control.",
  },
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description: "Engineered to run efficiently on consumer hardware. No GPU required for base operation. Minimal resource footprint, maximum intelligence.",
  },
  {
    icon: Brain,
    title: "Full AI Capability",
    description: "Natural language understanding, document analysis, question answering, summarisation, reasoning — all the capabilities you expect from modern AI, without the surveillance.",
  },
  {
    icon: EyeOff,
    title: "Privacy by Architecture",
    description: "This isn't privacy by policy — it's privacy by design. There is no server to breach, no cloud to subpoena, no account to hack. The architecture makes data exfiltration impossible.",
  },
];

const useCases = [
  "Journalists protecting sources and sensitive investigation notes",
  "Lawyers managing confidential case files and legal research",
  "Medical researchers handling patient data under strict compliance",
  "Government analysts processing classified intelligence",
  "Corporate R&D teams safeguarding trade secrets and IP",
  "Activists and dissidents in surveillance-heavy environments",
  "Anyone who believes their thoughts are their own",
];

const dockerDownloads = [
  {
    os: "Linux",
    icon: Terminal,
    filename: "obsidian-linux-x86_64.tar.gz",
    description: "Ubuntu 20.04+, Debian, Fedora, Arch",
    command: "docker pull biocircuit/obsidian:latest",
  },
  {
    os: "macOS",
    icon: Monitor,
    filename: "obsidian-macos-arm64.tar.gz",
    description: "macOS 12+ (Apple Silicon & Intel)",
    command: "docker pull biocircuit/obsidian:latest-macos",
  },
  {
    os: "Windows",
    icon: HardDrive,
    filename: "obsidian-windows-x64.zip",
    description: "Windows 10/11 with WSL2 or Docker Desktop",
    command: "docker pull biocircuit/obsidian:latest-windows",
  },
];

const Obsidian = () => {
  const [activeOS, setActiveOS] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <ArrowLeft size={16} />
            <span>Back to Shop</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground">Obsidian</span>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[150px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8"
          >
            <Shield size={40} className="text-primary" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-body block mb-4"
          >
            BioCircuit Laboratories
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6"
          >
            Obsidian
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-xl sm:text-2xl text-primary mb-4"
          >
            Your Private AI. Offline. Forever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            A self-contained artificial intelligence system that runs entirely on your hardware.
            No cloud dependencies. No data transmission. No compromises on your privacy.
            Just pure, local intelligence — under your complete control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#download"
              className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
            >
              Get Obsidian — ₦350,000
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Obsidian */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Obsidian?
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Every major AI platform processes your data on their servers. Your prompts, your documents,
              your ideas — all transmitted, stored, and potentially used to train their models.
              Obsidian eliminates this entirely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-destructive/30 bg-destructive/5"
            >
              <Wifi className="text-destructive mb-4" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                Traditional AI (Cloud-Based)
              </h3>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>• Your data sent to external servers</li>
                <li>• Subject to data breaches and subpoenas</li>
                <li>• Your prompts may train their models</li>
                <li>• Requires constant internet connection</li>
                <li>• Monthly subscription fees, indefinitely</li>
                <li>• Terms of service can change without notice</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-primary/30 bg-primary/5"
            >
              <Shield className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                Obsidian (Local-First)
              </h3>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>• All data stays on your machine</li>
                <li>• No server to breach — nothing to subpoena</li>
                <li>• Your data never trains anyone's model</li>
                <li>• Works completely offline</li>
                <li>• One-time purchase, own it forever</li>
                <li>• You control every byte of data</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center"
          >
            Built for Sovereignty
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-500"
              >
                <feature.icon size={22} className="text-primary mb-4" />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center"
          >
            How It Works
          </motion.h2>

          <div className="space-y-8">
            {[
              { step: "01", title: "Install via Docker", desc: "Download the Docker image for your operating system. One command to pull, one command to run. No complex setup, no dependencies to manage." },
              { step: "02", title: "Feed Your Knowledge", desc: "Drop in your PDFs, research papers, notes, documents — any text-based knowledge. Obsidian indexes everything locally using vector embeddings stored on your disk." },
              { step: "03", title: "Ask Anything", desc: "Interact through a clean, minimal dashboard. Ask questions, get summaries, cross-reference documents, reason through problems — all powered by a local language model." },
              { step: "04", title: "Stay in Control", desc: "Add new knowledge anytime. Remove what you don't need. Export your data. Delete everything with one click. Your system, your rules." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <span className="font-display text-3xl font-bold text-primary/30 shrink-0 w-12">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Who Is This For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto"
          >
            Obsidian is for anyone who refuses to trade their privacy for intelligence.
          </motion.p>

          <div className="space-y-3">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/30"
              >
                <Eye size={16} className="text-primary shrink-0" />
                <span className="font-body text-sm text-foreground">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Download Obsidian
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground text-center mb-4"
          >
            Choose your operating system and get started in minutes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-primary text-center mb-12"
          >
            ₦350,000 <span className="text-sm text-muted-foreground font-body font-normal">— one-time purchase</span>
          </motion.p>

          {/* OS Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {dockerDownloads.map((d, i) => (
              <button
                key={d.os}
                onClick={() => setActiveOS(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-display text-sm tracking-wider transition-all duration-300 ${
                  activeOS === i
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <d.icon size={16} />
                {d.os}
              </button>
            ))}
          </div>

          {/* Active download card */}
          <motion.div
            key={activeOS}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto rounded-xl border border-primary/30 bg-card/80 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const Icon = dockerDownloads[activeOS].icon;
                return <Icon size={24} className="text-primary" />;
              })()}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {dockerDownloads[activeOS].os}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {dockerDownloads[activeOS].description}
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-background border border-border p-4 mb-6 font-mono text-sm text-primary">
              <span className="text-muted-foreground">$ </span>
              {dockerDownloads[activeOS].command}
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Docker downloads will be available upon purchase. Contact us at contact@biocircuitlaboratories.org to proceed.");
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
            >
              <Download size={16} />
              Download for {dockerDownloads[activeOS].os}
            </a>

            <p className="font-body text-xs text-muted-foreground text-center mt-4">
              Requires Docker installed on your system. ~2GB download.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Runtime", "Docker Container (OCI compliant)"],
              ["Model", "Local LLM (quantised, CPU-optimised)"],
              ["RAM Required", "8 GB minimum, 16 GB recommended"],
              ["Storage", "~2 GB base + your knowledge files"],
              ["GPU", "Optional (CUDA support for acceleration)"],
              ["Interface", "Browser-based dashboard (localhost)"],
              ["Knowledge Formats", "PDF, TXT, MD, DOCX, CSV"],
              ["Network", "Zero outbound connections"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col p-4 rounded-lg border border-border/50 bg-card/30">
                <span className="font-display text-xs tracking-wider uppercase text-primary mb-1">{label}</span>
                <span className="font-body text-sm text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Own Your Intelligence
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            In an age of surveillance capitalism, Obsidian is a statement: your data belongs to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@biocircuitlaboratories.org?subject=Obsidian%20Purchase%20Inquiry"
              className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
            >
              Purchase Obsidian — ₦350,000
            </a>
            <Link
              to="/shop"
              className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Obsidian;
