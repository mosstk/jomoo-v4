import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/126761bf-015e-4d63-8193-81bb462dc1eb.png)',
          backgroundSize: '1120px 100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
