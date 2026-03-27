import { motion } from "framer-motion";
import lucasOffice from "@/assets/lucas-office.jpg";

const PrivateSection = () => {
  return (
    <section id="sobre" className="py-28 bg-muted/30 noise-overlay overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent z-10" />
              <img
                src={lucasOffice}
                alt="Lucas Morais no escritório"
                className="w-full h-full object-cover object-[25%_0%]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-primary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl tracking-luxury uppercase text-gold-gradient mb-6">
              O Padrão de Atendimento Lucas Morais
            </h2>
            <div className="divider-gold w-32 mb-8" />
            <p className="text-foreground font-light leading-relaxed text-lg mb-6">
              Entendemos que casos de alta complexidade exigem mais do que técnica; exigem exclusividade.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              Nosso escritório opera com um número limitado de causas para garantir que cada cliente receba atenção direta, sigilo rigoroso e respostas em tempo real. Cada caso é tratado como único, com estratégias personalizadas e acompanhamento integral.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-primary/10">
              {[
                { num: "Silêncio", label: "Absoluto" },
                { num: "Excelência", label: "Jurídica" },
                { num: "Legado", label: "Protegido" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-xl text-gold-gradient mb-2">{stat.num}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-luxury">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivateSection;
