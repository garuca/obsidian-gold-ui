import { motion } from "framer-motion";
import lucasPortrait from "@/assets/lucas-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center noise-overlay">
      <div className="container mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight tracking-luxury uppercase text-gold-gradient">
            Estratégia Jurídica para a Preservação de Ativos e Legados.
          </h1>
          <p className="text-foreground text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Advocacia civil de alta precisão dedicada a soluções complexas e gestão de riscos patrimoniais com absoluta discrição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contato"
              className="bg-gold-gradient text-primary-foreground font-heading text-sm tracking-luxury uppercase px-8 py-4 rounded hover:shadow-gold-lg transition-all duration-500 text-center"
            >
              Agendar Consultoria Estratégica
            </a>
            <a
              href="#areas"
              className="border border-primary/40 text-primary font-heading text-sm tracking-luxury uppercase px-8 py-4 rounded hover:border-primary/70 transition-all duration-500 text-center"
            >
              Áreas de Atuação
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gold-gradient rounded opacity-20 blur-sm" />
            <img
              src={lucasPortrait}
              alt="Lucas Morais - Advogado"
              className="relative rounded w-[420px] h-[560px] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
};

export default HeroSection;
