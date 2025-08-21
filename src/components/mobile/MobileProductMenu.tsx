import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

interface MobileProductMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileProductMenu = ({ isOpen, onClose }: MobileProductMenuProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductClick = (productName: string) => {
    console.log(`Product selected: ${productName}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#2a3441] shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Products</h2>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleProductClick(product.name)}
                >
                  <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
                    <div className="aspect-square overflow-hidden rounded-lg mb-3">
                      <img
                        src={product.imageMobile}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-white text-xs font-medium text-center leading-tight px-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/70 text-sm">
                Choose from our premium collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductMenu;