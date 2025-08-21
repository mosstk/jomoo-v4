import Header from "@/components/Header";
import MobileHeroSection from "./MobileHeroSection";
import MobileProductGrid from "./MobileProductGrid";
import Footer from "@/components/Footer";

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-[#1a1f2e]">
      <Header />
      <MobileHeroSection />
      
      {/* TOA JOMOO Logo and Message */}
      <div className="flex flex-col items-center pt-8 pb-6 bg-[#1a1f2e]">
        <div className="flex items-center gap-2 mb-4">
          <img 
            src="/lovable-uploads/fbb21cd6-6867-4142-a293-5a5ad5f201ae.png" 
            alt="TOA Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-white text-xl font-bold">|</span>
          <span className="text-white text-xl font-bold">JOMOO</span>
        </div>
        <p className="text-white text-center text-sm px-6 leading-relaxed">
          Just make sure the visitor can know it is TOA | JOMOO.<br />
          And you are selling JOMOO products
        </p>
      </div>
      
      <MobileProductGrid />
      <Footer />
    </div>
  );
};

export default MobileLayout;