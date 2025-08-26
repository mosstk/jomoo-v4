import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ProductCardProps {
  name: string;
  image: string;
  imageMobile: string;
  onClick?: () => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, imageMobile, onClick, className = "" }) => {
  const isMobile = useIsMobile();
  const displayImage = isMobile ? imageMobile : image;

  return (
    <div 
      className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
        <img 
          src={displayImage} 
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>
      <div className="mt-2 md:mt-4">
        <h3 className="text-base font-medium text-foreground text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;