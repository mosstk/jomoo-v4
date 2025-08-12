import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/navigation/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ActionButtons from "@/components/navigation/ActionButtons";
import { navigationItems } from "@/data/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="luxury-backdrop border-b border-border/50 sticky top-0 z-50 mb-0">
      <div className="max-w-[1120px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo 
              src=""
              alt="TOA living space"
            />
          </div>
          
          {/* Desktop Navigation */}
          <NavigationMenu items={navigationItems} />
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex">
            <ActionButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border/50">
              <ActionButtons />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;