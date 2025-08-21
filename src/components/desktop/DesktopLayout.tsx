import Header from "@/components/Header";
import DesktopHeroSection from "./DesktopHeroSection";
import DesktopProductGrid from "./DesktopProductGrid";
import Footer from "@/components/Footer";

const DesktopLayout = () => {
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
      <DesktopHeroSection />
      
      {/* TOA JOMOO Logo and Message */}
      <div className="flex flex-col items-center pt-8 pb-0 bg-transparent">
        <img 
          src="/lovable-uploads/fbb21cd6-6867-4142-a293-5a5ad5f201ae.png" 
          alt="TOA JOMOO Logo" 
          className="h-10 w-auto object-contain mb-4"
        />
        <p className="text-white text-center max-w-2xl">
          Just make sure the visitor can know it is TOA JOMOO. And you are selling JOMOO products
        </p>
      </div>
      
      <DesktopProductGrid />
      <Footer />
    </div>
  );
};

export default DesktopLayout;