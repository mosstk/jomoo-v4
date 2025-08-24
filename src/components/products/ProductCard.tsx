interface ProductCardProps {
  name: string;
  image: string;
  onClick?: () => void;
  className?: string;
}

const ProductCard = ({ name, image, onClick, className = "" }: ProductCardProps) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] animate-fade-in ${className}`}
      onClick={onClick}
    >
      {/* Image Container with Enhanced Responsive Design */}
      <div className="aspect-square overflow-hidden relative rounded-lg shadow-card group-hover:shadow-luxury transition-all duration-500 bg-gradient-to-br from-slate-50 to-slate-100">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 p-4 sm:p-6 lg:p-8"
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Title with Enhanced Typography */}
      <div className="mt-3 sm:mt-4 lg:mt-6 text-center">
        <h3 className="text-subtitle font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;