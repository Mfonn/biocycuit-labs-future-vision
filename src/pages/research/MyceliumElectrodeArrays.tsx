import ResearchArticleLayout from "@/components/ResearchArticleLayout";

const MyceliumElectrodeArrays = () => {
  return (
    <ResearchArticleLayout
      title="Mycelium as Multi-Electrode Arrays: Living Bioelectronic Substrates"
      field="Bioelectronics"
      status="Published"
      abstract="This research investigates the potential of fungal mycelium networks to function as biological multi-electrode arrays (MEAs). Mycelium — the vegetative body of fungi — forms vast, electrically active networks that naturally sense, process, and transmit signals. We examine the electrophysiological properties of mycelium, review emerging evidence for mycelium-based biocomputation, and propose applications in biosensing, environmental monitoring, and unconventional computing."
      references={[
        { title: "Sensorimotor control of robots mediated by electrophysiological measurements of fungal mycelia — Science Robotics (2024)", url: "https://www.science.org/doi/10.1126/scirobotics.adk8019" },
        { title: "Directional Electrical Spiking, Bursting, and Information Propagation in Oyster Mycelium — arXiv (2025)", url: "https://arxiv.org/abs/2601.08099" },
        { title: "Sustainable memristors from shiitake mycelium for high-frequency bioelectronics — PLOS ONE (2025)", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328965" },
        { title: "Adamatzky, A. — Fungal Electronics. Biosystems (2018)", url: "https://www.sciencedirect.com/science/article/pii/S0303264718302247" },
        { title: "Stamets, P. — Mycelium Running: How Mushrooms Can Help Save the World. Ten Speed Press (2005)", url: "https://fungi.com/pages/mycelium-running" },
      ]}
    >
      <div className="space-y-10">
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Multi-electrode arrays (MEAs) are devices used in neuroscience and bioelectronics to simultaneously record and stimulate electrical activity across biological tissues. Traditional MEAs are manufactured from rigid substrates — silicon, glass, or flexible polymers — with metallic electrodes arranged in precise geometric patterns. While powerful, these synthetic arrays are expensive, non-biodegradable, and limited in their ability to interface organically with living systems.
            </p>
            <p>
              Mycelium — the thread-like vegetative network of fungi — presents a radical alternative. Fungal networks naturally grow into three-dimensional, self-organizing architectures that conduct electrical signals, respond to environmental stimuli, and process information through complex spike train patterns. The question this research asks is: <strong>can mycelium function as a living, self-growing, biodegradable multi-electrode array?</strong>
            </p>
            <p>
              Emerging evidence from multiple laboratories worldwide suggests the answer is yes — and that mycelium-based bioelectronics may represent a paradigm shift in how we think about sensing, computing, and interfacing with biological environments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Electrophysiology of Mycelium</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Fungal mycelium generates spontaneous electrical activity — action potential-like spikes that propagate along hyphae (individual filaments) and through the broader mycelial network. These electrical signals, first documented by Olsson and Hansson (1995), have properties remarkably similar to neural action potentials: they are voltage-gated, exhibit refractory periods, and can be modulated by external stimuli.
            </p>
            <p>
              Research by Professor Andrew Adamatzky at the University of the West of England has demonstrated that mycelial spike trains contain structured information. The patterns are not random — they exhibit regular frequencies, burst patterns, and directional propagation that suggest the mycelium is performing computation: integrating environmental signals and coordinating growth responses across the network.
            </p>
            <p>
              A 2025 study published on arXiv documented <strong>directional electrical spiking, bursting, and information propagation</strong> in oyster mushroom mycelium recorded with a star-shaped electrode array. The researchers found that electrical signals propagated preferentially along specific hyphal pathways, suggesting that the mycelial network has a functional architecture — certain paths are "highways" for information transfer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Mycelium as Sensing Platform</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Mycelium naturally responds to a wide range of environmental stimuli: chemical gradients (nutrients, toxins), mechanical pressure, light (particularly UV and blue wavelengths), temperature changes, and electromagnetic fields. Each stimulus modulates the electrical activity of the network in characteristic ways, effectively making mycelium a multi-modal biosensor.
            </p>
            <p>
              A groundbreaking 2024 paper in <em>Science Robotics</em> demonstrated sensorimotor control of robots mediated by fungal mycelium electrophysiology. The researchers developed an electrical interface to house mycelium and measure its action potentials, then built a control model that translated the mycelium's rhythmic electrical output into robotic movements. The fungal mycelium served as both sensor and signal processor — detecting light stimuli and generating control signals without any digital computation.
            </p>
            <p>
              This work establishes mycelium as a viable biological substrate for real-time environmental sensing. Unlike synthetic sensors, mycelium is self-repairing, self-growing, and capable of adapting its sensitivity based on environmental conditions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Memristive Properties</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              A memristor is an electronic component whose resistance depends on the history of current that has passed through it — effectively giving it a form of memory. Memristors are considered foundational components for neuromorphic computing (hardware that mimics brain architecture).
            </p>
            <p>
              A 2025 study in <em>PLOS ONE</em> demonstrated that shiitake mushroom mycelium exhibits <strong>memristive behavior</strong> — its electrical resistance changes in response to applied voltage in a history-dependent manner, and these changes persist over time. The mycelium-based memristors operated at frequencies up to the kilohertz range, demonstrating potential for high-frequency bioelectronic applications.
            </p>
            <p>
              The combination of memristive properties and spike-generating capability means that mycelium possesses two of the fundamental requirements for biological computing: <strong>memory</strong> and <strong>signal processing</strong>. This positions mycelium not merely as a passive sensing substrate but as an active computational medium.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Toward Living MEAs</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Traditional MEAs provide spatial resolution through fixed electrode positions. Mycelium offers something different: a <strong>distributed, adaptive, self-organizing electrode network</strong> that grows to fill its environment, with each hyphal tip functioning as a sensing and signal-processing node.
            </p>
            <p>
              Our research at BioCircuit Laboratories proposes a framework for engineering mycelium-based MEAs by:
            </p>
            <p>
              <strong>Substrate Design:</strong> Growing mycelium on structured templates that guide network topology — creating defined geometries while allowing biological self-organization within those constraints.
            </p>
            <p>
              <strong>Signal Interface:</strong> Developing biocompatible electrode interfaces that can both record from and stimulate mycelial networks without disrupting their natural electrical activity.
            </p>
            <p>
              <strong>Data Processing:</strong> Applying machine learning to decode the information content of mycelial spike trains — translating biological signals into interpretable environmental data.
            </p>
            <p>
              <strong>Application Domains:</strong> Environmental monitoring (soil health, pollution detection), agricultural sensing (nutrient status, pathogen early warning), and unconventional computing substrates that merge biological and electronic processing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Conclusion</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Fungal mycelium represents a living technology that has been computing, sensing, and networking for over a billion years. The convergence of recent discoveries — directional signal propagation, memristive memory, robotic control interfaces, and high-frequency bioelectronic applications — makes a compelling case for mycelium as the substrate of a new class of biological electrode arrays.
            </p>
            <p>
              At BioCircuit Laboratories, we see mycelium-based MEAs as emblematic of our broader mission: technology that grows from biology rather than being imposed upon it. Living electrode arrays that self-repair, adapt, and decompose at end-of-life represent not just a technological advance but a philosophical one — engineering with nature's circuits rather than replacing them.
            </p>
          </div>
        </section>
      </div>
    </ResearchArticleLayout>
  );
};

export default MyceliumElectrodeArrays;
