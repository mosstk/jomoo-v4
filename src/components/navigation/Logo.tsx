import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-[45px] w-auto" }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <span className="text-white">
        <span className="font-bold text-2xl">TOA</span>{" "}
        <span className="font-normal text-lg">Living Space</span>
      </span>
    </Link>
  );
};

export default Logo;