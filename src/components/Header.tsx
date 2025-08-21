import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/navigation/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ActionButtons from "@/components/navigation/ActionButtons";
import { navigationItems } from "@/data/navigation";
import { products } from "@/data/products";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuExpanded, setIsProductMenuExpanded] = useState(false);

  const handleMobileProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductMenuExpanded(!isProductMenuExpanded);
  };

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
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 z-40">
            <div className="max-w-[1120px] mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  item.label === "Product" ? (
                    <div key={item.label}>
                      <button
                        onClick={handleMobileProductClick}
                        className="text-foreground hover:text-primary transition-colors font-medium py-3 text-left w-full flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent rounded-lg px-3 hover:from-primary/20"
                      >
                        <span className="text-lg">{item.label}</span>
                        <span className={`transition-transform duration-300 text-primary ${isProductMenuExpanded ? 'rotate-180' : ''}`}>
                          ▲
                        </span>
                      </button>
                      
                      {/* Product Sub Menu */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProductMenuExpanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-2 gap-3 mt-4 p-4 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-lg border border-slate-600/50">
                          {products.map((product, index) => (
                            <div
                              key={product.id}
                              className="group cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in text-center"
                              style={{ animationDelay: `${index * 80}ms` }}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsProductMenuExpanded(false);
                              }}
                            >
                              <img
                                src={`/lovable-uploads/${product.imageMobile.split('/').pop()}`}
                                alt={product.name}
                                className="w-16 h-16 mx-auto mb-2 object-cover rounded"
                                style={{ 
                                  display: 'block',
                                  minWidth: '64px',
                                  minHeight: '64px',
                                  backgroundColor: '#e5e7eb'
                                }}
                              />
                              <h3 className="text-white text-xs font-medium group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border/50">
                <ActionButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;