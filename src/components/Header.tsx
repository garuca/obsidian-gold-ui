import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLM from "@/assets/logo-lm.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Insights", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group relative font-heading text-xs tracking-luxury text-foreground/70 hover:text-primary transition-all duration-300 uppercase"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
        <a href="#inicio" className="relative group">
          <img src={logoLM} alt="Lucas Morais Advogado" className="h-12 relative z-10 transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <a
            href="#contato"
            className="relative overflow-hidden group bg-gold-gradient text-primary-foreground font-heading text-xs tracking-luxury uppercase px-8 py-3 rounded-sm"
          >
            <span className="relative z-10">Consulta</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </nav>

        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="relative">
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-6 h-[2px] bg-current mt-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-current mt-1.5 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-heading text-sm tracking-luxury text-foreground/70 hover:text-primary transition-colors uppercase border-b border-primary/10 pb-3"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gold-gradient text-primary-foreground font-heading text-xs tracking-luxury uppercase px-6 py-4 rounded-sm text-center mt-2"
              >
                Agendar Consulta
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
