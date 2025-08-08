import Logo from "@/components/navigation/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ActionButtons from "@/components/navigation/ActionButtons";
import { navigationItems } from "@/data/navigation";

const Header = () => {
  return (
    <header className="luxury-backdrop border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo 
              src="/lovable-uploads/45d93c9d-39e5-448a-95f0-bb91d447f112.png"
              alt="TOA JOMOO Logo"
            />
          </div>
          
          <NavigationMenu items={navigationItems} />
          
          <ActionButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;