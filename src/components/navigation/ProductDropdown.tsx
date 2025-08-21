import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // จัดเรียงสินค้าตามรูปที่ให้มา
  const topRowProducts = ["Smart Toilet", "Basin", "Rain Shower", "Shower Enclosure", "Urinal"];
  const bottomRowProducts = ["One Piece Toilet", "Bathtub", "Bidet Sprayer", "Faucet", "Accessories"];

  const getProductsByNames = (names: string[]) => {
    return names.map(name => products.find(p => p.name === name)).filter(Boolean);
  };

  const topProducts = getProductsByNames(topRowProducts);
  const bottomProducts = getProductsByNames(bottomRowProducts);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger 
        className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Product
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[750px] p-4 bg-black/65 backdrop-blur-md border-0 shadow-2xl z-50" 
        align="start" 
        alignOffset={0}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* แถวบน */}
          {topProducts.map((product) => (
            <DropdownMenuItem key={product?.id} className="flex flex-col items-start p-0 cursor-pointer hover:bg-transparent focus:bg-transparent min-w-0">
              <div className="text-white text-xs font-normal pb-1 border-b border-white/30 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {product?.name}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4">
          {/* แถวล่าง */}
          {bottomProducts.map((product) => (
            <DropdownMenuItem key={product?.id} className="flex flex-col items-start p-0 cursor-pointer hover:bg-transparent focus:bg-transparent min-w-0">
              <div className="text-white text-xs font-normal pb-1 border-b border-white/30 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {product?.name}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductDropdown;