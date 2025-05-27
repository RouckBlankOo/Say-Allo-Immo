
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <PropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
