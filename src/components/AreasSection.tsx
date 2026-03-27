import { motion } from "framer-motion";
import { Scale, Home, Users, Landmark, FileText, Shield, Briefcase, Leaf } from "lucide-react";

const areas = [
  { icon: Users, title: "Família & Sucessões", desc: "Planejamento sucessório, inventários, testamentos e proteção patrimonial familiar." },
  { icon: Home, title: "Imobiliário & Patrimonial", desc: "Transações imobiliárias complexas, regularização fundiária e contratos de alto valor." },
  { icon: Scale, title: "Contencioso Cível", desc: "Litígios estratégicos com foco em resultados e gestão inteligente de riscos processuais." },
  { icon: Landmark, title: "Direito Bancário", desc: "Revisão contratual, defesa em execuções e negociações com instituições financeiras." },
  { icon: FileText, title: "Contratos Empresariais", desc: "Elaboração e revisão de contratos societários, comerciais e de alta complexidade." },
  { icon: Shield, title: "Proteção de Ativos", desc: "Blindagem patrimonial lícita, holdings familiares e estruturação societária." },
  { icon: Briefcase, title: "Consultoria Preventiva", desc: "Análise de riscos, pareceres jurídicos e assessoria contínua para tomada de decisões." },
  { icon: Leaf, title: "Direito Rural & Ambiental", desc: "Regularização de propriedades rurais, licenciamento ambiental e defesa agrária." },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-28 noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-luxury uppercase text-gold-gradient mb-4">
            Áreas de Atuação
          </h2>
          <div className="divider-gold w-48 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-primary/10 rounded p-6 hover:border-primary/40 hover:shadow-gold transition-all duration-500"
            >
              <area.icon className="text-primary mb-4" size={28} strokeWidth={1} />
              <h3 className="font-heading text-sm tracking-wide text-foreground mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
