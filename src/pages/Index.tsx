import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout 
      backgroundImage="/lovable-uploads/17673e22-20b4-4bdb-ad9c-923e45fa1ae3.png"
      overlay={true}
    >
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </MainLayout>
  );
};

export default Index;
