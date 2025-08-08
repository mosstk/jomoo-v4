import { Button } from "@/components/ui/button";
import { Globe, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="luxury-backdrop border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/45d93c9d-39e5-448a-95f0-bb91d447f112.png" 
              alt="TOA JOMOO Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Product</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Inspiration</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Service</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;