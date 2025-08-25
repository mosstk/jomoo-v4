import { useEffect, useState } from "react";

interface HeroBackgroundProps {
  image: string;
  overlay?: boolean;
  overlayClass?: string;
}

const HeroBackground = ({ 
  image, 
  overlay = true, 
  overlayClass = "bg-gradient-to-r from-background/90 via-background/50 to-transparent" 
}: HeroBackgroundProps) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [nextImage, setNextImage] = useState(image);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (image !== currentImage) {
      setNextImage(image);
      setIsTransitioning(true);
      
      // After transition completes, update current image and reset
      const timer = setTimeout(() => {
        setCurrentImage(image);
        setIsTransitioning(false);
      }, 800); // Match the transition duration
      
      return () => clearTimeout(timer);
    }
  }, [image, currentImage]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Current background image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Next background image for smooth transition */}
      <div 
        className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          backgroundImage: `url(${nextImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      />
      
      {overlay && <div className={`absolute inset-0 z-10 ${overlayClass}`}></div>}
    </div>
  );
};

export default HeroBackground;