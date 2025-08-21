import ProductCard from "@/components/products/ProductCard";
import ProductSection from "@/components/products/ProductSection";
import { products } from "@/data/products";

const DesktopProductGrid = () => {
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
      <div className="grid grid-cols-3 gap-6 mx-auto px-0 w-full max-w-[864px]">
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

export default DesktopProductGrid;