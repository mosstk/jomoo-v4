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
          backgroundImage: `url(/lovable-uploads/17673e22-20b4-4bdb-ad9c-923e45fa1ae3.png)`,
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
