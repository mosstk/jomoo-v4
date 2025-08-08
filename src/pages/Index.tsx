import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout backgroundImage="/lovable-uploads/f0616fac-9f12-4e7a-8f2a-4a9e5353b83a.png">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </MainLayout>
  );
};

export default Index;
