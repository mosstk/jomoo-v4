interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo = ({ src, alt, className = "h-10 w-auto" }: LogoProps) => {
  return (
    <div className="flex items-center space-x-3">
      {/* TOA Logo - สีเดิม */}
      <div className="flex items-center">
        <div className="bg-red-500 px-3 py-1 rounded-md">
          <span className="text-white font-bold text-lg">TOA</span>
        </div>
      </div>
      
      {/* ขีดแบ่ง */}
      <div className="w-px h-6 bg-white/30"></div>
      
      {/* JOMOO - สีขาว */}
      <div className="text-white font-bold text-xl tracking-wider">
        JOMOO
      </div>
    </div>
  );
};

export default Logo;