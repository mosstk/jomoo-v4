import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-[45px] w-auto" }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <span className="text-white text-xl">
        <span className="font-bold">TOA</span>{" "}
        <span className="font-normal">Living Space</span>
      </span>
    </Link>
  );
};

export default Logo;