import Header from "@/components/Header";
import DesktopHeroSection from "./DesktopHeroSection";
import DesktopProductGrid from "./DesktopProductGrid";
import Footer from "@/components/Footer";

const DesktopLayout = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/126761bf-015e-4d63-8193-81bb462dc1eb.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <Header />
      <DesktopHeroSection />
      
      {/* TOA JOMOO Logo and Message */}
      <div className="flex flex-col items-center pt-8 pb-0 bg-transparent px-4">
        <img 
          src="/lovable-uploads/75840f22-bf19-4be1-acd5-29d143424b5f.png" 
          alt="TOA Logo" 
          className="h-8 md:h-10 w-auto object-contain mb-4"
        />
        <p className="text-white text-center max-w-2xl text-sm md:text-base px-4">
          Just make sure the visitor can know it is TOA JOMOO. And you are selling JOMOO products
        </p>
      </div>
      
      <DesktopProductGrid />
      <Footer />
    </div>
  );
};

export default DesktopLayout;