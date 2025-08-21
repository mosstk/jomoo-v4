import { ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    if (productName === "Smart Toilet") {
      navigate("/smart-toilet");
    } else if (productName === "One Piece Toilet") {
      navigate("/one-piece-toilet");
    } else if (productName === "Basin") {
      navigate("/basin");
    }
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay ก่อนที่เมนูจะหาย
    setHoverTimeout(timeout);
  };
  
  // จัดเรียงสินค้าตามรูปที่ให้มา
  const topRowProducts = ["Smart Toilet", "Basin", "Rain Shower", "Shower Enclosure", "Urinal"];
  const bottomRowProducts = ["One Piece Toilet", "Bathtub", "Bidet Sprayer", "Faucet", "Accessories"];

  const getProductsByNames = (names: string[]) => {
    return names.map(name => products.find(p => p.name === name)).filter(Boolean);
  };

  const topProducts = getProductsByNames(topRowProducts);
  const bottomProducts = getProductsByNames(bottomRowProducts);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 py-2">
        Product
        <ChevronDown size={16} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 w-[750px] max-w-[calc(100vw-2rem)] py-8 px-4 bg-black/20 backdrop-blur-md border-0 shadow-2xl z-50 rounded"
          style={{ transform: 'translateX(-25px)', marginTop: '0px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-5 gap-4 mb-2">
            {/* แถวบน */}
            {topProducts.map((product) => (
              <div 
                key={product?.id} 
                className="flex flex-col items-start p-2 cursor-pointer hover:bg-blue-500/30 focus:bg-blue-500/30 min-w-0 rounded"
                onClick={() => handleProductClick(product?.name || "")}
              >
                <div className="text-white text-xs font-normal pb-1 border-b border-white/30 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {product?.name}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4">
            {/* แถวล่าง */}
            {bottomProducts.map((product) => (
              <div 
                key={product?.id} 
                className="flex flex-col items-start p-2 cursor-pointer hover:bg-blue-500/30 focus:bg-blue-500/30 min-w-0 rounded"
                onClick={() => handleProductClick(product?.name || "")}
              >
                <div className="text-white text-xs font-normal pb-1 border-b border-white/30 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {product?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomProductDropdown;