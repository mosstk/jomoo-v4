import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-[300px] w-auto" }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <img 
        src="/lovable-uploads/05a2ca3e-18d2-4905-8e38-5b8ea9269bad.png" 
        alt="TOA Logo" 
        className={className}
      />
    </Link>
  );
};

export default Logo;