import HeroBackground from "@/components/hero/HeroBackground";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesktopHeroSection = () => {
  const bannerImages = [
    "/lovable-uploads/43dfaf93-72c8-47d1-bc4d-a393734006e7.png",
    "/lovable-uploads/e6b5c584-c03d-4de5-97a2-5b655f7d50a9.png",
    "/lovable-uploads/e44145de-6665-449f-a669-bc78646e2090.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <section 
      className="relative overflow-hidden bg-transparent group container-content aspect-hero"
      style={{ 
        marginTop: '0', 
        minHeight: 'clamp(250px, 40vh, 500px)',
        maxHeight: '600px'
      }}
    >
      <HeroBackground 
        image={bannerImages[currentImageIndex]}
        overlay={false}
      />
      
      {/* Navigation Arrows - Responsive */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevImage}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextImage}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </Button>
      
      {/* Enhanced Banner indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative transition-all duration-300 ${
              index === currentImageIndex 
                ? "w-6 h-2.5 sm:w-7 sm:h-3 lg:w-8 lg:h-3 bg-white rounded-full shadow-lg" 
                : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
          >
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
            )}
          </button>
        ))}
        
        {/* Progress indicator for current slide */}
        <div className="ml-1 sm:ml-2 text-white/80 text-xs font-medium">
          {currentImageIndex + 1} / {bannerImages.length}
        </div>
      </div>
    </section>
  );
};

export default DesktopHeroSection;