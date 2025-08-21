import { useState, useEffect } from "react";

const MobileHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bannerImages = [
    "/lovable-uploads/5074e192-082a-470f-bc0b-8aeed6d4c361.png",
    "/lovable-uploads/2cef6700-e14a-4830-8afc-b790f55eb240.png", 
    "/lovable-uploads/f6920c41-cec1-4470-81bb-ae2e1f72c2f9.png"
  ];

  // Auto slide images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <section className="relative w-full bg-[#1a1f2e] overflow-hidden">
      {/* Hero Banner Carousel */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[4/3]">
        <div className="relative w-full h-full overflow-hidden">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentImageIndex ? 'translate-x-0' : 
                index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img 
                src={image}
                alt={`JOMOO Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;