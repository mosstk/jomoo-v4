import { Card, CardContent } from "@/components/ui/card";
import smartToiletImg from "@/assets/smart-toilet.jpg";
import basinImg from "@/assets/basin.jpg";
import bathtubImg from "@/assets/bathtub.jpg";
import showerImg from "@/assets/shower-enclosure.jpg";
import faucetImg from "@/assets/faucet.jpg";

const products = [
  { name: "Smart Toilet", image: smartToiletImg },
  { name: "Toilet", image: smartToiletImg },
  { name: "Basin", image: basinImg },
  { name: "Bathtub", image: bathtubImg },
  { name: "Shower Enclosure", image: showerImg },
  { name: "Faucet", image: faucetImg },
  { name: "Rain Shower", image: showerImg },
  { name: "Bidet Sprayer", image: faucetImg },
  { name: "Urinal", image: smartToiletImg },
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-title font-playfair text-foreground mb-4">
            Our Premium Collection
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground text-center">
                    {product.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accessories Section */}
        <div className="mt-16">
          <Card className="gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Accessories</h3>
              <p className="text-muted-foreground">
                Complete your bathroom with our premium accessories collection
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;