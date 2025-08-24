import Logo from "@/components/navigation/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ActionButtons from "@/components/navigation/ActionButtons";
import { navigationItems } from "@/data/navigation";

const Header = () => {
  return (
    <header className="luxury-backdrop border-b border-border/50 sticky top-0 z-50">
      <div className="container-content">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <Logo 
              src=""
              alt="TOA living space"
            />
          </div>
          
          {/* Desktop Navigation - Hide on smaller screens */}
          <div className="hidden lg:flex">
            <NavigationMenu items={navigationItems} />
          </div>
          
          {/* Action Buttons - Responsive sizing */}
          <div className="flex">
            <ActionButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;