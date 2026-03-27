import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Home, Building2, FileSignature, Shield, Users, TreePine, Scale, Globe, Leaf } from "lucide-react";
import ArticleModal from "./ArticleModal";

const articles = [
  {
    category: "Patrimônio",
    title: "A Reificação da Herança e a Exegese da Cessão de Direitos Hereditários",
    excerpt: "Uma análise prospectiva ante a Reforma do Código Civil: transmissão patrimonial, gestão de riscos e planejamento sucessório.",
    readTime: "15 min",
    icon: Scale
  },
  {
    category: "Imobiliário",
    title: "A Dimensão Jurídica da Intermediação Imobiliária",
    excerpt: "Deveres de informação, responsabilidade civil e a exegese do Artigo 723 do Código Civil.",
    readTime: "12 min",
    icon: Home
  },
  {
    category: "Contratos",
    title: "O Negócio Jurídico no Século XXI",
    excerpt: "Da Hermenêutica Clássica à Eficácia do Legal Design e Visual Law.",
    readTime: "10 min",
    icon: FileSignature
  },
  {
    category: "Empresarial",
    title: "A Tutela Coletiva e Individual da Imaterialidade",
    excerpt: "Uma análise doutrinária sobre a blindagem da reputação corporativa.",
    readTime: "11 min",
    icon: Shield
  },
  {
    category: "Consumidor",
    title: "Tratado sobre a Defesa do Consumidor na Economia de Alto Valor",
    excerpt: "Da Vulnerabilidade Técnica à Tutela da Expectativa Qualificada.",
    readTime: "14 min",
    icon: Users
  },
  {
    category: "Administrativo",
    title: "O Estatuto Jurídico do Servidor Público",
    excerpt: "Prerrogativas, direitos remuneratórios e a estabilidade como garantia institucional.",
    readTime: "13 min",
    icon: Building2
  },
  {
    category: "Digital",
    title: "A Desmaterialização do Extrajudicial",
    excerpt: "Atos eletrônicos, assinatura digital e a nova era da fé pública.",
    readTime: "12 min",
    icon: Globe
  },
  {
    category: "Ambiental",
    title: "O Direito Ambiental Sancionador no Século XXI",
    excerpt: "Defesa técnica, gestão de riscos e a estabilidade da atividade econômica.",
    readTime: "13 min",
    icon: Leaf
  }
];

const BlogSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(1);

  const handleArticleClick = (index: number) => {
    setSelectedArticle(index + 1);
    setModalOpen(true);
  };

  return (
    <>
      <section id="blog" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.05)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-heading text-xs tracking-luxury text-primary uppercase">Conteúdo Exclusivo</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl tracking-luxury uppercase mb-4">
              <span className="text-gold-gradient">Insights</span>
              <span className="text-foreground"> Jurídicos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Artigos especializados sobre temas relevantes para quem busca excelência em gestão patrimonial e estratégia jurídica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 p-8 cursor-pointer"
                onClick={() => handleArticleClick(i)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                        <article.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-heading text-xs tracking-luxury text-primary uppercase">{article.category}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">{article.readTime} de leitura</span>
                  </div>
                  
                  <h3 className="font-heading text-xl text-foreground group-hover:text-gold-gradient transition-colors duration-300 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-heading tracking-luxury uppercase group-hover:gap-3 transition-all duration-300">
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/10 group-hover:border-primary/30 transition-colors duration-500" />
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a 
              href="#"
              className="inline-flex items-center gap-3 border border-primary/30 text-primary font-heading text-sm tracking-luxury uppercase px-8 py-4 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
            >
              Ver todos os artigos
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      <ArticleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} articleId={selectedArticle} />
    </>
  );
};

export default BlogSection;