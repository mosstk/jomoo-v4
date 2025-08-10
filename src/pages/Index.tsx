import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background color layer */}
      <div className="fixed inset-0 z-[-2] bg-background" />
      
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
