import Header from "@/components/Header";
import MobileHeroSection from "./MobileHeroSection";
import MobileProductGrid from "./MobileProductGrid";
import Footer from "@/components/Footer";

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-[#1a1f2e] overflow-x-hidden">
      <Header />
      <MobileHeroSection />
      
      {/* TOA JOMOO Logo and Message */}
      <div className="flex flex-col items-center py-8 bg-[#1a1f2e]">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/lovable-uploads/75840f22-bf19-4be1-acd5-29d143424b5f.png" 
            alt="TOA Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <p className="text-white text-center text-sm px-6 leading-relaxed max-w-xs">
          Just make sure the visitor can know it is TOA | JOMOO. And you are selling JOMOO products
        </p>
      </div>
      
      <MobileProductGrid />
      <Footer />
    </div>
  );
};

export default MobileLayout;