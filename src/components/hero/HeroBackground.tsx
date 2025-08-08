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
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%'
      }}
    >
      {overlay && <div className={`absolute inset-0 ${overlayClass}`}></div>}
    </div>
  );
};

export default HeroBackground;