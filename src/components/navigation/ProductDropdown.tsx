import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { products } from "@/data/products";

const ProductDropdown = () => {
  // จัดเรียงสินค้าตามรูปที่ให้มา
  const topRowProducts = ["Smart Toilet", "Basin", "Rain Shower", "Shower Enclosure", "Urinal"];
  const bottomRowProducts = ["One Piece Toilet", "Bathtub", "Bidet Sprayer", "Faucet", "Accessories"];

  const getProductsByNames = (names: string[]) => {
    return names.map(name => products.find(p => p.name === name)).filter(Boolean);
  };

  const topProducts = getProductsByNames(topRowProducts);
  const bottomProducts = getProductsByNames(bottomRowProducts);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
        Product
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-4 bg-background border border-border shadow-lg z-50">
        <div className="grid grid-cols-5 gap-4">
          {/* แถวบน */}
          {topProducts.map((product) => (
            <DropdownMenuItem key={product?.id} className="flex flex-col items-center p-2 cursor-pointer">
              <div className="text-sm font-medium text-center">{product?.name}</div>
            </DropdownMenuItem>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {/* แถวล่าง */}
          {bottomProducts.map((product) => (
            <DropdownMenuItem key={product?.id} className="flex flex-col items-center p-2 cursor-pointer">
              <div className="text-sm font-medium text-center">{product?.name}</div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductDropdown;