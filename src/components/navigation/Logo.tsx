interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
    />
  );
};

export default Logo;