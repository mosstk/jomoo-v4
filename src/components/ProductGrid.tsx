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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      backgroundImage=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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