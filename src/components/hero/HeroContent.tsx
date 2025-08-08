import { Button } from "@/components/ui/button";

interface HeroContentProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  maxWidth?: string;
}

const HeroContent = ({ 
  title, 
  description, 
  primaryButtonText = "Explore Products",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  maxWidth = "max-w-2xl"
}: HeroContentProps) => {
  return (
    <div className={maxWidth}>
      <h1 className="text-hero font-playfair mb-6 text-foreground">
        {title}
      </h1>
      <p className="text-subtitle text-muted-foreground mb-8 max-w-lg">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          onClick={onPrimaryClick}
        >
          {primaryButtonText}
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-border text-foreground hover:bg-secondary"
          onClick={onSecondaryClick}
        >
          {secondaryButtonText}
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;