import { Youtube, Instagram, Newspaper } from "lucide-react";
import logo from "@/assets/logo.svg";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@biocircuitlaboratories",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/biocircuitlaboratories/",
    icon: Instagram,
  },
  {
    label: "Newsletter",
    href: "https://fuzzymustard.substack.com/",
    icon: Newspaper,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <span className="font-display text-xs tracking-wider text-muted-foreground">
            BIOCIRCUIT LABORATORIES
          </span>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <link.icon size={14} />
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © 2024–{new Date().getFullYear()} BioCircuit Laboratories. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
