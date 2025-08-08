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
  return (
    <div 
      className="absolute inset-0 transition-all duration-1000 ease-in-out transform"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}
    >
      {overlay && <div className={`absolute inset-0 ${overlayClass}`}></div>}
    </div>
  );
};

export default HeroBackground;