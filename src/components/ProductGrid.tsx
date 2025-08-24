import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/products/ProductCard";
import ProductSection from "@/components/products/ProductSection";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const navigate = useNavigate();
  
  const handleProductClick = (productName: string) => {
    if (productName === "Smart Toilet") {
      navigate("/smart-toilet");
    } else if (productName === "One Piece Toilet") {
      navigate("/one-piece-toilet");
    } else if (productName === "Basin") {
      navigate("/basin");
    } else if (productName === "Bathtub") {
      navigate("/bathtub");
    } else if (productName === "Shower Enclosure") {
      navigate("/shower-enclosure");
    } else if (productName === "Faucet") {
      navigate("/faucet");
    } else if (productName === "Rain Shower") {
      navigate("/rain-shower");
    } else if (productName === "Bidet Sprayer") {
      navigate("/bidet-spray");
    } else if (productName === "Urinal") {
      navigate("/uniral");
    } else if (productName === "Accessories") {
      navigate("/accessories");
    }
  };

  return (
    <ProductSection
      title=""
      description=""
      backgroundImage=""
      className="relative pt-0 pb-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mx-auto px-4 md:px-6 lg:px-0 w-full max-w-[864px]">
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