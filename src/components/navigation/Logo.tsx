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
        src="/lovable-uploads/4bdd0664-2ee7-44cb-8267-852580b20b49.png" 
        alt="TOA JOMOO Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;