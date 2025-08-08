import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Main Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/background-blue.png)` }}
      >
        <div className="absolute inset-0 bg-background/20"></div>
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
