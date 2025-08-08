import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/lovable-uploads/64e96829-9671-4609-a2bc-69581b7933ef.png)`,
          backgroundColor: '#1e3a8a'
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
