import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const bannerImages = [
    "/lovable-uploads/ef788fc8-157e-43fb-bc62-b97b5cc5b4ea.png",
    "/lovable-uploads/563c65af-a3f5-4e90-9bf3-a5adbae2869f.png", 
    "/lovable-uploads/01d27af5-b467-44a8-9c78-346a121236f0.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length, isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsPaused(!isPaused);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    if (!isPaused) {
      setIsPlaying(true);
    }
  };

  const handleExploreProducts = () => {
    console.log("Explore products clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn more clicked");
  };

  return (
    <section 
      className="relative h-[60vh] md:min-h-screen overflow-hidden bg-transparent group" 
      style={{ marginTop: '-80px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackground 
        image={bannerImages[currentImageIndex]}
        overlay={false}
      />
      
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Play/Pause Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      
      {/* Enhanced Banner indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative transition-all duration-300 ${
              index === currentImageIndex 
                ? "w-8 h-3 bg-white rounded-full shadow-lg" 
                : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
          >
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
            )}
          </button>
        ))}
        
        {/* Progress indicator for current slide */}
        <div className="ml-2 text-white/80 text-xs font-medium">
          {currentImageIndex + 1} / {bannerImages.length}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;