import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout 
      backgroundImage="/lovable-uploads/56c06d20-fcda-4122-97d7-117e4abb615a.png"
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
