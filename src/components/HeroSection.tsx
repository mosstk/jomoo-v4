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
      <HeroBackground 
        image="/lovable-uploads/d08d6c2d-cc4c-4246-a89c-3c1423a90d00.png"
        overlay={true}
        overlayClass="bg-gradient-to-r from-background/95 via-background/70 to-background/40"
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