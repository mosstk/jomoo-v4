import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </MainLayout>
  );
};

export default Index;
