import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout backgroundImage="/lovable-uploads/ef605ef2-7357-461a-b7ee-ef4e8c7891bc.png">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </MainLayout>
  );
};

export default Index;
