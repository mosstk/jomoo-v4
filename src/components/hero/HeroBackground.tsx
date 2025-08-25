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
  const [imageError, setImageError] = useState(false);

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
      <img
        src={currentImage}
        alt="Hero Banner"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        onError={() => setImageError(true)}
        style={{ objectPosition: 'center center' }}
      />
      
      {/* Next background image for smooth transition */}
      <img
        src={nextImage}
        alt="Hero Banner"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setImageError(true)}
        style={{ objectPosition: 'center center' }}
      />
      
      {/* Fallback background if images fail to load */}
      {imageError && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-700" />
      )}
      
      {overlay && <div className={`absolute inset-0 z-10 ${overlayClass}`}></div>}
    </div>
  );
};

export default HeroBackground;