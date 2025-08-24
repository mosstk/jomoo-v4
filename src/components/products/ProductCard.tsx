interface ProductCardProps {
  name: string;
  image: string;
  onClick?: () => void;
  className?: string;
}

const ProductCard = ({ name, image, onClick, className = "" }: ProductCardProps) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
        <img 
          src={image} 
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