import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileProductPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/126761bf-015e-4d63-8193-81bb462dc1eb.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-6">Product</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Our Product Range</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Discover our comprehensive collection of premium bathroom fixtures and accessories.
            </p>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Bathroom Fixtures</h3>
                <p className="text-sm text-gray-600">High-quality fixtures for modern bathrooms</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Accessories</h3>
                <p className="text-sm text-gray-600">Complete your bathroom with our accessories</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileProductPage;