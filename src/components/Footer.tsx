import logoLM from "@/assets/logo-lm.png";

const Footer = () => {
  return (
    <footer id="contato" className="py-20 border-t border-border noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <img src={logoLM} alt="LM" className="h-10" />
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Advocacia civil de alta precisão. Estratégia, sigilo e resultados.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-sm tracking-luxury uppercase text-primary">Navegação</h4>
            {["Início", "Áreas de Atuação", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className="block text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-sm tracking-luxury uppercase text-primary">Contato</h4>
            <p className="text-muted-foreground text-sm">lucasdemorais.geo@gmai.lcom</p>
            <p className="text-muted-foreground text-sm">(62) 98281-5055</p>
            <a
              href="#contato"
              className="inline-block bg-gold-gradient text-primary-foreground font-heading text-xs tracking-luxury uppercase px-6 py-3 rounded hover:shadow-gold transition-all duration-300 mt-2"
            >
              Agendar Consulta
            </a>
          </div>
        </div>

        <div className="divider-gold mt-16 mb-8" />
        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Lucas Morais Advogado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
