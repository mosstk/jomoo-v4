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
        src="/lovable-uploads/e249e750-5c20-4915-bb68-993713e3f674.png" 
        alt="TOA Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;