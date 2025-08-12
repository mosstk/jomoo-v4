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
        src="/lovable-uploads/e6fa2337-8982-444f-9717-577c0ef5e3c4.png" 
        alt="TOA Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;