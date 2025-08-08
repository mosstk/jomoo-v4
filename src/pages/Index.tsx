import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BannerSection from "@/components/BannerSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout backgroundImage="/lovable-uploads/c366600e-3443-4d33-b8d0-73044d37fb9e.png">
      <Header />
      <HeroSection />
      <BannerSection />
      <ProductGrid />
      <Footer />
    </MainLayout>
  );
};

export default Index;
