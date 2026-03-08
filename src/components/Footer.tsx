const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <span className="font-display text-xs tracking-wider text-muted-foreground">
            BIOCIRCUIT LABORATORIES
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} BioCircuit Laboratories. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/biocircuitlaboratories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
          >
            Instagram
          </a>
          <a
            href="https://biocircuitlaboratories.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
          >
            Original Site
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
