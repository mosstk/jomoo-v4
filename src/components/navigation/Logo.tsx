import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <img 
        src="/lovable-uploads/cc43ba2f-53c9-4c90-958b-3e28f6f2e4b3.png" 
        alt="TOA JOMOO Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;