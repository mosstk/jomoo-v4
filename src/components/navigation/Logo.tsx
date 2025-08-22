import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-[45px] w-auto" }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <img 
        src="/lovable-uploads/75840f22-bf19-4be1-acd5-29d143424b5f.png" 
        alt="TOA Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;