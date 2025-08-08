interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/08e95c0e-ffcc-4205-8c9f-8b124ba30728.png" 
        alt="TOA JOMOO Logo" 
        className={className}
      />
    </div>
  );
};

export default Logo;