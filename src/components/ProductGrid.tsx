import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/products/ProductCard";
import ProductSection from "@/components/products/ProductSection";
import { products } from "@/data/products";

const ProductGrid = () => {
  const handleProductClick = (productName: string) => {
    console.log(`Product clicked: ${productName}`);
  };

  return (
    <ProductSection
      title="Our Premium Collection"
      description=""
      backgroundImage=""
    >
      <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            onClick={() => handleProductClick(product.name)}
          />
        ))}
      </div>
    </ProductSection>
  );
};

export default ProductGrid;