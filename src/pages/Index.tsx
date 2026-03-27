import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AreasSection from "@/components/AreasSection";
import PrivateSection from "@/components/PrivateSection";
import RuralSection from "@/components/RuralSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AreasSection />
      <PrivateSection />
      <RuralSection />
      <Footer />
    </div>
  );
};

export default Index;
