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
    <div className="bg-[#1a1f2e] pb-16 px-4">
      <div className="grid grid-cols-2 gap-4 mx-auto w-full max-w-lg">
        {orderedProducts.map((product) => (
          <div
            key={product?.id}
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => handleProductClick(product?.name || '')}
          >
            <div className="aspect-square overflow-hidden rounded-xl mb-3 shadow-lg">
              <img 
                src={product?.imageMobile || product?.image} 
                alt={product?.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-white text-sm font-medium text-center leading-tight px-1">
              {product?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProductGrid;