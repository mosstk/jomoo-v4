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
        src="/lovable-uploads/75a8be44-9f26-41d5-81df-bdbc9039ceb8.png" 
        alt="TOA Living Space Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;