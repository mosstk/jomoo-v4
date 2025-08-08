import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const bannerImages = [
    "/lovable-uploads/ef788fc8-157e-43fb-bc62-b97b5cc5b4ea.png",
    "/lovable-uploads/563c65af-a3f5-4e90-9bf3-a5adbae2869f.png", 
    "/lovable-uploads/01d27af5-b467-44a8-9c78-346a121236f0.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // ลดเวลาให้เหมาะกับ mobile

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handleExploreProducts = () => {
    console.log("Explore products clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn more clicked");
  };

  return (
    <section className="relative h-[60vh] md:min-h-screen overflow-hidden bg-transparent" style={{ marginTop: '-80px' }}>
      <HeroBackground 
        image={bannerImages[currentImageIndex]}
        overlay={false}
      />
      
      {/* Banner indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-primary scale-125 shadow-lg" 
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;