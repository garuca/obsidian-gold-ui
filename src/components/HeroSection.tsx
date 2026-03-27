import { motion } from "framer-motion";
import { ArrowRight, Shield, Scale, Award } from "lucide-react";
import lucasPortrait from "@/assets/lucas-portrait.jpg";

const stats = [
  { icon: Scale, label: "Experiência", value: "Excelência" },
  { icon: Shield, label: "Estratégia", value: "Precisão" },
  { icon: Award, label: "Comprometimento", value: "Dedicação" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,160,89,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(138,109,59,0.1)_0%,_transparent_40%)]" />
      
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-heading text-xs tracking-luxury text-primary uppercase">
                Advocacia de Excelência
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide uppercase">
              <span className="text-foreground">Defendendo</span>
              <br />
              <span className="text-gold-gradient">seu Legado</span>
              <br />
              <span className="text-foreground">com Excelência</span>
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Advocacia civil de alta precisão dedicada a{' '}
              <span className="text-primary">soluções complexas</span> e gestão de 
              riscos patrimoniais com <span className="text-primary">absoluta discrição</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#contato"
                className="group relative inline-flex items-center justify-center gap-3 bg-gold-gradient text-primary-foreground font-heading text-sm tracking-luxury uppercase px-10 py-5 overflow-hidden"
              >
                <span className="relative z-10">Agendar Consultoria</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </a>
              <a
                href="#areas"
                className="group inline-flex items-center justify-center gap-3 border border-primary/30 text-primary font-heading text-sm tracking-luxury uppercase px-10 py-5 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
              >
                <span>Áreas de Atuação</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary/70" />
                  <div className="font-heading text-2xl text-gold-gradient">{stat.value}</div>
                  <div className="text-foreground/50 text-xs tracking-wide mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full max-w-[480px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-sm blur-2xl" />
              <div className="relative border border-primary/20 p-3 bg-background/50 backdrop-blur-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={lucasPortrait}
                    alt="Lucas Morais - Advogado"
                    className="w-full h-full object-cover object-[30%_5%] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="border-l-2 border-primary pl-4">
                      <p className="font-heading text-sm text-primary tracking-luxury uppercase mb-1">OAB/GO 77.021</p>
                      <p className="text-foreground/60 text-sm">Dr. Lucas Morais</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 bg-background/80 backdrop-blur-sm p-4 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-12 h-12"
                  stroke="url(#gold-gradient)" 
                  strokeWidth="1"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#C5A059" />
                      <stop offset="100%" stopColor="#8A6D3B" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2L4 6V12C4 16.42 7.58 20.58 12 22C16.42 20.58 20 16.42 20 12V6L12 2Z" />
                  <path d="M12 22V10" />
                  <path d="M8 6L16 6" />
                  <path d="M9 14L15 14" />
                </svg>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/10 flex items-center justify-center">
                <div className="w-16 h-16 border border-primary/30 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary/60" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
