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
      
      {/* TOA JOMOO Logo */}
      <div className="flex justify-center py-8 bg-transparent">
        <img 
          src="/lovable-uploads/fbb21cd6-6867-4142-a293-5a5ad5f201ae.png" 
          alt="TOA JOMOO Logo" 
          className="h-8 w-auto object-contain"
        />
      </div>
      
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
