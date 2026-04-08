import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Consultants", href: "/consultants" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <img src={logo} alt="BioCircuit Laboratories" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-display text-sm font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              BIOCIRCUIT
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">
              Laboratories
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
