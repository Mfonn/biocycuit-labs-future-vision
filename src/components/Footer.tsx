import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={logo} alt="BioCircuit Laboratories" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-xs tracking-wider text-muted-foreground">
            BIOCIRCUIT LABORATORIES
          </span>
        </Link>

        <div className="flex gap-6">
          <Link to="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
            Services
          </Link>
          <Link to="/consultants" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
            Consultants
          </Link>
          <a href="mailto:biocircuitlaboratories@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
            Contact
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © 2024–{new Date().getFullYear()} BioCircuit Laboratories. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
