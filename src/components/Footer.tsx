import { Youtube, Instagram, Newspaper, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@biocircuitlaboratories", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/biocircuitlaboratories/", icon: Instagram },
  { label: "Newsletter", href: "https://fuzzymustard.substack.com/", icon: Newspaper },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mfonnta", icon: Linkedin },
];

const columns = [
  {
    title: "Services",
    links: [
      { label: "Agentic AI", to: "/agentic-ai" },
      { label: "Security & Governance", to: "/security-governance" },
      { label: "Deep Research", to: "/deep-research" },
      { label: "All services", to: "/services" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research index", to: "/research" },
      { label: "Water", to: "/research/water" },
      { label: "Mycelium electrode arrays", to: "/research/mycelium-electrode-arrays" },
      { label: "Autism and neurodivergence", to: "/research/autism-neurodivergence" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-platinum/10 pt-20 pb-10 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-14 md:grid-cols-4 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="BioCircuit Laboratories" className="w-9 h-9 rounded-full object-cover" />
              <span className="font-display text-lg text-foreground">BioCircuit Laboratories</span>
            </div>
            <p className="font-body text-sm text-platinum-dim leading-relaxed max-w-sm mb-6">
              We build agentic AI, secure the systems it runs on, and do the research that tells you
              where to point it. Based in Abuja, Nigeria. Working wherever the problem is.
            </p>
            <a
              href="https://fuzzymustard.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-body uppercase tracking-[0.22em] border border-platinum/20 px-5 py-3 text-foreground hover:border-primary hover:text-primary transition-colors duration-500"
            >
              Subscribe to the newsletter
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="overline text-platinum-dim mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body text-sm text-platinum-dim hover:text-primary transition-colors duration-500"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-body text-platinum-dim hover:text-primary transition-colors"
              >
                <link.icon size={14} />
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs font-body text-platinum-dim">
            © 2024–{new Date().getFullYear()} BioCircuit Laboratories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
