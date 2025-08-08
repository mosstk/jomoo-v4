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
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground text-center">
            {name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;