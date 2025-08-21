import { products } from "@/data/products";

const MobileProductGrid = () => {
  const handleProductClick = (productName: string) => {
    console.log(`Product clicked: ${productName}`);
  };

  // จัดเรียงสินค้าตามรูป
  const productOrder = [
    "Smart Toilet", "One Piece Toilet",
    "Basin", "Bathtub",
    "Shower Enclosure", "Faucet", 
    "Rain Shower", "Bidet Sprayer",
    "Urinal", "Accessories"
  ];

  const orderedProducts = productOrder.map(name => 
    products.find(p => p.name === name)
  ).filter(Boolean);

  return (
    <div className="bg-[#1a1f2e] pb-12">
      <div className="grid grid-cols-2 gap-6 mx-auto px-6 w-full max-w-sm">
        {orderedProducts.map((product) => (
          <div
            key={product?.id}
            className="group cursor-pointer transition-all duration-300"
            onClick={() => handleProductClick(product?.name || '')}
          >
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img 
                src={product?.imageMobile || product?.image} 
                alt={product?.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-white text-sm font-medium text-center">
              {product?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProductGrid;