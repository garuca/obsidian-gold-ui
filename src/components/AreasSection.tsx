import { motion } from "framer-motion";
import { Users, Home, FileText, Shield, ShoppingBag, Building2, Stamp, Leaf } from "lucide-react";
import { useState } from "react";

const areas = [
  {
    icon: Users,
    title: "Família & Sucessões",
    tagline: "Preservação de Legado e Harmonia Familiar.",
    items: [
      { label: "Planejamento Sucessório", desc: "Estruturação de holdings familiares e elaboração de testamentos." },
      { label: "Inventários e Arrolamentos", desc: "Condução estratégica de espólios complexos para uma transição patrimonial eficiente." },
      { label: "Dissolução de Vínculos", desc: "Divórcios (consensuais ou litigiosos) conduzidos com o máximo de discrição e técnica." },
    ],
  },
  {
    icon: Home,
    title: "Imobiliário & Patrimonial",
    tagline: "Segurança Jurídica em Ativos de Valor.",
    items: [
      { label: "Transações Imobiliárias", desc: "Assessoria integral na compra, venda e estruturação de incorporações." },
      { label: "Proteção Patrimonial", desc: "Estratégias legais para gestão de riscos e blindagem de ativos." },
      { label: "Due Diligence Imobiliária", desc: "Auditoria rigorosa para garantir a segurança jurídica em aquisições de alta relevância." },
    ],
  },
  {
    icon: FileText,
    title: "Contratos Estratégicos & Negócios",
    tagline: "Engenharia Jurídica para Viabilizar Oportunidades.",
    items: [
      { label: "Instrumentos Personalizados", desc: "Elaboração e revisão de contratos atípicos e instrumentos complexos." },
      { label: "Governança e Parcerias", desc: "Redação de acordos de sócios e estruturação de parcerias comerciais sólidas." },
      { label: "Gestão de Riscos Contratuais", desc: "Consultoria preventiva para assegurar o fiel cumprimento de obrigações." },
    ],
  },
  {
    icon: Shield,
    title: "Responsabilidade Civil & Indenizações",
    tagline: "Proteção da Reputação e Reparação de Danos.",
    items: [
      { label: "Erro Profissional", desc: "Defesa técnica em casos de responsabilidade médica, engenharia e outras profissões regulamentadas." },
      { label: "Danos Materiais e Morais", desc: "Pleitos e defesas envolvendo reparação por danos ao patrimônio e à honra." },
      { label: "Direito Digital", desc: "Proteção da imagem e gestão de crises em ambientes virtuais." },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    tagline: "Equilíbrio e Excelência nas Relações de Consumo.",
    items: [
      { label: "Bens de Alto Valor", desc: "Resolução de conflitos envolvendo veículos, embarcações e aeronaves." },
      { label: "Serviços Exclusivos", desc: "Atuação em questões de seguros de alto limite, hotelaria e aviação." },
      { label: "Práticas Abusivas", desc: "Ações para garantir a transparência e o cumprimento de contratos de adesão." },
    ],
  },
  {
    icon: Building2,
    title: "Direito Administrativo",
    tagline: "Interface Estratégica com o Poder Público.",
    items: [
      { label: "Processos Sancionatórios", desc: "Defesa técnica em processos administrativos e disciplinares." },
      { label: "Propriedade e Estado", desc: "Atuação em desapropriações e intervenções estatais na propriedade privada." },
      { label: "Consultoria Regulatória", desc: "Orientação sobre normas e exigências de órgãos governamentais e agências." },
    ],
  },
  {
    icon: Stamp,
    title: "Serviços Extrajudiciais",
    tagline: "Agilidade, Discrição e Eficiência.",
    items: [
      { label: "Atos Notariais", desc: "Realização de inventários, divórcios e escrituras diretamente em cartório." },
      { label: "Resolução de Conflitos", desc: "Mediação e conciliação privada como alternativa célere ao Judiciário." },
      { label: "Regularização Documental", desc: "Saneamento de registros e documentação imobiliária de forma estratégica." },
    ],
  },
  {
    icon: Leaf,
    title: "Direito Rural & Ambiental",
    tagline: "Segurança Jurídica e Sustentabilidade no Agronegócio.",
    items: [
      { label: "Contratos Agrários", desc: "Arrendamentos e parcerias rurais estruturadas para prevenção de litígios." },
      { label: "Sucessão no Agro", desc: "Planejamento para a continuidade da gestão em propriedades rurais familiares." },
      { label: "Conformidade Ambiental", desc: "Consultoria em licenciamentos, defesa em autos de infração e gestão de passivos." },
    ],
  },
];

const AreasSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

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
          {areas.map((area, i) => {
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="group bg-card border border-primary/10 rounded p-6 hover:border-primary/40 hover:shadow-gold transition-all duration-500 cursor-pointer"
              >
                <area.icon className="text-primary mb-4" size={28} strokeWidth={1} />
                <h3 className="font-heading text-sm tracking-wide text-foreground mb-1">{area.title}</h3>
                <p className="text-primary/70 text-xs font-light italic mb-3">{area.tagline}</p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-2 border-t border-primary/10">
                    {area.items.map((item) => (
                      <div key={item.label} className="pt-2">
                        <p className="text-foreground text-xs font-medium mb-0.5">{item.label}</p>
                        <p className="text-muted-foreground text-xs font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <p className="text-primary/50 text-[10px] uppercase tracking-luxury mt-3 group-hover:text-primary/80 transition-colors">
                  {isExpanded ? "Fechar" : "Ver detalhes"}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
