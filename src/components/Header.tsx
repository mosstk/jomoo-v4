import Logo from "@/components/navigation/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ActionButtons from "@/components/navigation/ActionButtons";
import { navigationItems } from "@/data/navigation";

const Header = () => {
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
          <div className="flex">
            <ActionButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;