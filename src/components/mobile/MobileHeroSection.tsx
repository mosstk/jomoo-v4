const MobileHeroSection = () => {
  return (
    <section className="relative w-full bg-[#1a1f2e] overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[4/3]">
        <img 
          src="/lovable-uploads/ac4ab13c-fd1d-4f37-af92-0deb14387cfd.png"
          alt="Luxury Bathroom"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-wider">JOMOO</h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              We are an innovative international enterprise,<br />
              and a global leader in digital bathroom solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;