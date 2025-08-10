import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  // ใช้รูป BG.jpg เป็นพื้นหลัง
  const backgroundImage = "/lovable-uploads/68cc554b-bdb6-457e-8131-9524ef60f8c6.png";
  
  return (
    <div className="min-h-screen relative">
      {/* Background color layer */}
      <div className="fixed inset-0 z-[-2] bg-background" />
      
      {/* Background image aligned with header content */}
      <div 
        className="fixed inset-0 z-[-1] bg-bottom bg-no-repeat bg-primary/5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'bottom center',
          marginLeft: '2rem', // Align with logo left edge
          marginRight: 'calc(2rem + 80px)', // Account for action buttons width
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
