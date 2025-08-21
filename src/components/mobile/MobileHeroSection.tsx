import HeroBackground from "@/components/hero/HeroBackground";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileHeroSection = () => {
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
      className="relative overflow-hidden bg-transparent group w-full max-w-[1120px] mx-auto" 
      style={{ 
        marginTop: '0', 
        height: 'clamp(240px, 50vw, 400px)',
        aspectRatio: '1120/587'
      }}
    >
      <HeroBackground 
        image={bannerImages[currentImageIndex]}
        overlay={false}
      />
      
      {/* Navigation Arrows - Mobile optimized */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevImage}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextImage}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Enhanced Banner indicators - Mobile optimized */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative transition-all duration-300 ${
              index === currentImageIndex 
                ? "w-5 h-2 bg-white rounded-full shadow-lg" 
                : "w-2 h-2 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
          >
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
            )}
          </button>
        ))}
        
        {/* Progress indicator for current slide */}
        <div className="ml-1 text-white/80 text-xs font-medium">
          {currentImageIndex + 1} / {bannerImages.length}
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;