interface ProductSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

const ProductSection = ({ 
  title, 
  description, 
  children, 
  backgroundImage,
  className = "relative py-20"
}: ProductSectionProps) => {
  return (
    <section className={className}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-navy-950/20"></div>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-16" style={{ marginTop: '50px' }}>
            <h2 className="text-title font-playfair text-foreground mb-4">
              {title}
            </h2>
            <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;