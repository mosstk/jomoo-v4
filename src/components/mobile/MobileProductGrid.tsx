import ProductCard from "@/components/products/ProductCard";
import ProductSection from "@/components/products/ProductSection";
import { products } from "@/data/products";

const MobileProductGrid = () => {
  const handleProductClick = (productName: string) => {
    console.log(`Product clicked: ${productName}`);
  };

  return (
    <ProductSection
      title=""
      description=""
      backgroundImage=""
      className="relative pt-0 pb-20"
    >
      <div className="grid grid-cols-2 gap-3 mx-auto px-4 w-full max-w-[400px]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            imageMobile={product.imageMobile}
            onClick={() => handleProductClick(product.name)}
          />
        ))}
      </div>
    </ProductSection>
  );
};

export default MobileProductGrid;