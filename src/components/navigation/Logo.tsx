interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/5a98564f-737a-45e3-961b-bb8cc763c8da.png" 
        alt="TOA JOMOO Logo" 
        className={className}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
};

export default Logo;