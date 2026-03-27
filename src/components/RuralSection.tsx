import { motion } from "framer-motion";
import fazendaBg from "@/assets/fazenda-bg.jpg";

const RuralSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src={fazendaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-luxury uppercase text-gold-gradient">
            Direito Rural & Ambiental
          </h2>
          <div className="divider-gold w-48 mx-auto" />
          <p className="text-foreground font-light leading-relaxed text-lg">
            Protegemos seu patrimônio rural com a mesma precisão e sofisticação aplicada aos negócios urbanos. Da regularização fundiária ao licenciamento ambiental, atuamos com profundo conhecimento da legislação agrária.
          </p>
          <a
            href="#contato"
            className="inline-block border border-primary/40 text-primary font-heading text-sm tracking-luxury uppercase px-8 py-4 rounded hover:border-primary/70 hover:shadow-gold transition-all duration-500"
          >
            Saiba Mais
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RuralSection;
