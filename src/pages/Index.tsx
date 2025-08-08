import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Debug: Check if background image loads */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/lovable-uploads/fecfa687-54e8-4e82-bc9f-82f86b4f534b.png)`,
          backgroundColor: '#1e3a8a' // fallback blue color
        }}
        onError={(e) => console.log('Background image failed to load')}
      >
        <div className="absolute inset-0 bg-background/10"></div>
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
