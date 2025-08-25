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
      <div className="aspect-square overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 bg-gray-100 rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-lg"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.style.backgroundColor = '#f3f4f6';
            target.parentElement!.innerHTML += `<div class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">${name}</div>`;
          }}
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