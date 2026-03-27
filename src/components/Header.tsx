import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoLM from "@/assets/logo-lm.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#inicio">
          <img src={logoLM} alt="Lucas Morais Advogado" className="h-12" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-xs tracking-luxury text-foreground/80 hover:text-primary transition-colors duration-300 uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-gold-gradient text-primary-foreground font-heading text-xs tracking-luxury uppercase px-6 py-3 rounded hover:shadow-gold transition-all duration-300"
          >
            Consulta
          </a>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-sm tracking-luxury text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-gold-gradient text-primary-foreground font-heading text-xs tracking-luxury uppercase px-6 py-3 rounded text-center"
          >
            Consulta
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
