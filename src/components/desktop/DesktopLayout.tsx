import Header from "@/components/Header";
import DesktopHeroSection from "./DesktopHeroSection";
import DesktopProductGrid from "./DesktopProductGrid";
import Footer from "@/components/Footer";

const DesktopLayout = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced Background image with responsive handling */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/126761bf-015e-4d63-8193-81bb462dc1eb.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content with proper stacking */}
      <div className="relative z-10">
        <Header />
        <DesktopHeroSection />
        
        {/* TOA JOMOO Logo and Message - Enhanced Responsive */}
        <section className="container-content section-spacing bg-transparent">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
            <img 
              src="/lovable-uploads/75840f22-bf19-4be1-acd5-29d143424b5f.png" 
              alt="TOA Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain animate-float"
            />
            <div className="container-text">
              <p className="text-body text-white leading-relaxed opacity-90">
                Just make sure the visitor can know it is TOA JOMOO. And you are selling JOMOO products
              </p>
            </div>
          </div>
        </section>
        
        <DesktopProductGrid />
        <Footer />
      </div>
    </div>
  );
};

export default DesktopLayout;