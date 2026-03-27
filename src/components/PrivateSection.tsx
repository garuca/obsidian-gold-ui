import { motion } from "framer-motion";
import lucasOffice from "@/assets/lucas-office.jpg";

const PrivateSection = () => {
  return (
    <section id="sobre" className="py-28 bg-muted/30 noise-overlay">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[480px]">
            <img
              src={lucasOffice}
              alt="Lucas Morais no escritório"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `
                linear-gradient(to right, transparent 50%, hsl(0 0% 4%) 100%),
                linear-gradient(to top, hsl(0 0% 4%) 0%, transparent 30%),
                linear-gradient(to bottom, hsl(0 0% 4%) 0%, transparent 25%),
                linear-gradient(to left, transparent 80%, hsl(0 0% 4%) 100%)
              `
            }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-luxury uppercase text-gold-gradient">
            O Padrão de Atendimento Lucas Morais
          </h2>
          <div className="divider-gold w-32" />
          <p className="text-foreground font-light leading-relaxed text-lg">
            Entendemos que casos de alta complexidade exigem mais do que técnica; exigem exclusividade.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            Nosso escritório opera com um número limitado de causas para garantir que cada cliente receba atenção direta, sigilo rigoroso e respostas em tempo real. Cada caso é tratado como único, com estratégias personalizadas e acompanhamento integral.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              { num: "100%", label: "Dedicação" },
              { num: "10+", label: "Anos" },
              { num: "∞", label: "Sigilo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl text-primary mb-1">{stat.num}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-luxury">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateSection;
