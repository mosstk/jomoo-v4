import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Gradient background layer - จากอ่อนไปเข้ม แนวทแยง */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-background via-secondary to-card" />
      
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
