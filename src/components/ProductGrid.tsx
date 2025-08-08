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
      backgroundImage="/lovable-uploads/f423a3af-1d01-4bff-9f92-dac7f73b7c6d.png"
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

      {/* Accessories Section */}
      <div className="mt-16">
        <Card className="gradient-card border-border/50 shadow-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Accessories</h3>
            <p className="text-muted-foreground">
              Complete your bathroom with our premium accessories collection
            </p>
          </CardContent>
        </Card>
      </div>
    </ProductSection>
  );
};

export default ProductGrid;