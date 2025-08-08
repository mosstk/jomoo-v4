const BannerSection = () => {
  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/ef788fc8-157e-43fb-bc62-b97b5cc5b4ea.png",
      title: "Header Banner 01",
      alt: "Luxurious modern bathroom with marble walls and city view"
    },
    {
      id: 2,
      image: "/lovable-uploads/563c65af-a3f5-4e90-9bf3-a5adbae2869f.png",
      title: "Header Banner 02", 
      alt: "Elegant bathroom with marble vanity and gold mirrors"
    },
    {
      id: 3,
      image: "/lovable-uploads/01d27af5-b467-44a8-9c78-346a121236f0.png",
      title: "Header Banner 03",
      alt: "Contemporary bathroom with smart toilet and city skyline"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-playfair mb-12 text-foreground">
          Premium Bathroom Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500 hover-scale"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair text-foreground mb-2">
                  {banner.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Experience luxury redefined
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;