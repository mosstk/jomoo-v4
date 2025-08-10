import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import FullBackgroundLayout from "@/components/layout/FullBackgroundLayout";

const Index = () => {
  // ใช้รูป BG.jpg เป็นพื้นหลัง
  const backgroundImage = "/lovable-uploads/68cc554b-bdb6-457e-8131-9524ef60f8c6.png";
  
  return (
    <FullBackgroundLayout 
      backgroundImage={backgroundImage}
      option="fixed" // เปลี่ยนเป็น "parallax" สำหรับ option 2
    >
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </FullBackgroundLayout>
  );
};

export default Index;
