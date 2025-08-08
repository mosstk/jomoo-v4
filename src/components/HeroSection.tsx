import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import heroImage from "@/assets/hero-bathroom.jpg";

const HeroSection = () => {
  const handleExploreProducts = () => {
    // Scroll to products section or navigate
    console.log("Explore products clicked");
  };

  const handleLearnMore = () => {
    // Navigate to about page or show more info
    console.log("Learn more clicked");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/e5027f69-aeb8-4655-bfc9-d4b856028c32.png)` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <HeroContent
          title="Lorem Text"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          onPrimaryClick={handleExploreProducts}
          onSecondaryClick={handleLearnMore}
        />
      </div>
    </section>
  );
};

export default HeroSection;