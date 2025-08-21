import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { smartToiletProducts } from "@/data/smart-toilet-products";

const DesktopSmartToiletPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-auto">
        <img 
          src="/lovable-uploads/fe68ebd1-80f1-48dd-aa7d-03dec6c88f3a.png"
          alt="Smart Toilet Banner"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/lovable-uploads/ac4ab13c-fd1d-4f37-af92-0deb14387cfd.png" 
              alt="TOA Logo" 
              className="h-16 w-auto object-contain"
            />
            <span className="text-3xl font-bold text-gray-600">|</span>
            <span className="text-3xl font-bold text-gray-800">JOMOO</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">Product &gt; Smart Toilet</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {smartToiletProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square bg-gray-100 p-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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

export default DesktopSmartToiletPage;