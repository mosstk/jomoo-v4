import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faucetProducts } from "@/data/faucet-products";

const DesktopFaucetPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full max-w-[1120px] mx-auto" 
        style={{ 
          height: '587px',
          aspectRatio: '1120/587'
        }}>
        <img 
          src="/lovable-uploads/fb6e7afc-6c54-45cc-978d-04c44eca7195.png"
          alt="Faucet Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-background py-8">
        <div className="max-w-[1120px] mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/71ce025e-b030-4065-ab22-8ca999d67ebc.png" 
            alt="TOA | JOMOO Logo" 
            className="h-11 w-auto object-contain mx-auto"
          />
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-background py-4">
        <div className="max-w-[1120px] mx-auto px-4">
          <p className="text-muted-foreground">Product &gt; Faucet</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {faucetProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square bg-gray-100 p-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-black">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description} {product.model}</p>
                  <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    รายละเอียดเพิ่มเติม
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesktopFaucetPage;