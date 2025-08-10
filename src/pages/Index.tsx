import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  // ใช้รูป BG.jpg เป็นพื้นหลัง
  const backgroundImage = "/lovable-uploads/68cc554b-bdb6-457e-8131-9524ef60f8c6.png";
  
  return (
    <div className="min-h-screen relative">
      {/* Background image full width */}
      <div 
        className="fixed inset-0 z-[-1] bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% auto',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) saturate(1.2) brightness(1.05)'
        }}
      />
      
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
