import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  // ใช้รูป BG.jpg เป็นพื้นหลัง
  const backgroundImage = "/lovable-uploads/68cc554b-bdb6-457e-8131-9524ef60f8c6.png";
  
  return (
    <div className="min-h-screen relative">
      {/* Background with side gradients */}
      <div className="fixed inset-0 z-[-1]">
        {/* Center background image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 100%',
            left: '10%',
            right: '10%',
            width: '80%'
          }}
        />
        
        {/* Left gradient */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[10%]"
          style={{
            background: 'linear-gradient(to right, hsl(220 40% 15%), hsl(220 40% 15% / 0.8), transparent)'
          }}
        />
        
        {/* Right gradient */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[10%]"
          style={{
            background: 'linear-gradient(to left, hsl(220 40% 15%), hsl(220 40% 15% / 0.8), transparent)'
          }}
        />
      </div>
      
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
