interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl font-bold text-white tracking-wider">
        JOMOO
      </h1>
    </div>
  );
};

export default Logo;