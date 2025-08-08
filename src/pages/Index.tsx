import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
