import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Agentic AI", to: "/agentic-ai" },
  { label: "Security & Governance", to: "/security-governance" },
  { label: "Deep Research", to: "/deep-research" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-platinum/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="BioCircuit Laboratories" className="w-9 h-9 rounded-full object-cover" />
          <span className="leading-none">
            <span className="font-display text-lg text-foreground block group-hover:text-primary transition-colors duration-500">
              BioCircuit
            </span>
            <span className="overline text-platinum-dim block mt-1">Laboratories</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[13px] font-body font-light text-platinum-dim hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:Biocircuitlaboratories@gmail.com?subject=Enquiry%20from%20the%20website"
            className="text-[11px] font-body uppercase tracking-[0.22em] border border-platinum/20 px-5 py-2.5 text-foreground hover:border-primary hover:text-primary transition-colors duration-500"
          >
            Talk to us
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-platinum/10 bg-background/97 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-sm text-platinum-dim hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:Biocircuitlaboratories@gmail.com?subject=Enquiry%20from%20the%20website"
                className="font-body text-sm text-primary"
              >
                Talk to us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
