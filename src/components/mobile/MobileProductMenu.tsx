import { useState } from "react";
import { ChevronDown, ChevronRight, Package } from "lucide-react";
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Package className="text-primary" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-white">Products</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleProductClick(product.name)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-primary/30 shadow-lg hover:shadow-primary/20">
                    <div className="aspect-square overflow-hidden rounded-xl mb-3 bg-white/5">
                      <img
                        src={product.imageMobile}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-white text-sm font-medium text-center leading-tight px-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <div className="text-center">
              <p className="text-white/70 text-sm font-medium">
                Choose from our premium collection
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductMenu;