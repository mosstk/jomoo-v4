import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
  onClick?: () => void;
  className?: string;
}

const ProductCard = ({ name, image, onClick, className = "" }: ProductCardProps) => {
  return (
    <Card 
      className={`gradient-card border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105 group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="aspect-[1/0.9] overflow-hidden rounded-t-lg relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
          <div className="absolute inset-0 rounded-t-lg group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-opacity-60 transition-all duration-500"></div>
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
          />
        </div>
        <div className="p-2 md:p-4">
          <h3 className="text-sm md:text-lg font-semibold text-foreground text-center">
            {name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;