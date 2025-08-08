import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import backgroundImage from "@/assets/background-blue-gradient.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
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
