import ProductCard from "@/components/products/ProductCard";
import ProductSection from "@/components/products/ProductSection";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";

const DesktopProductGrid = () => {
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
      className="section-spacing"
    >
      <div className="container-content">
        <div className="grid-products animate-fade-in">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                name={product.name}
                image={product.image}
                onClick={() => handleProductClick(product.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </ProductSection>
  );
};

export default DesktopProductGrid;