import { Card, CardContent } from "@/components/ui/card";

const BannerSection = () => {
  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/8d9680ae-dbde-4350-bba6-c100b31f818c.png",
      title: "Luxury Modern Bathroom",
      description: "Experience ultimate luxury with premium marble finishes"
    },
    {
      id: 2,
      image: "/lovable-uploads/0759ad5b-db9b-43aa-93bb-6dba422796b7.png",
      title: "Elegant Double Vanity",
      description: "Sophisticated design with dual mirrors and premium lighting"
    },
    {
      id: 3,
      image: "/lovable-uploads/ddedf5ab-15bb-47d6-ae4e-07bc9db1216a.png",
      title: "Contemporary Smart Bathroom",
      description: "Modern technology meets elegant design"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-title font-playfair text-foreground mb-4">
            Premium Bathroom Collections
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive range of luxury bathroom designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner) => (
            <Card key={banner.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{banner.title}</h3>
                    <p className="text-sm opacity-90">{banner.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;