import { Button } from "@/components/ui/button";
import { Globe, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="luxury-backdrop border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-lg">J</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground font-playfair">JOMOO</span>
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