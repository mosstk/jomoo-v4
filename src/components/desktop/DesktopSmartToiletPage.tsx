import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { smartToiletProducts } from "@/data/smart-toilet-products";

const DesktopSmartToiletPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/lovable-uploads/fe68ebd1-80f1-48dd-aa7d-03dec6c88f3a.png)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-bold mb-6">Smart Toilet</h1>
            <p className="text-lg leading-relaxed">
              JOMOO offers smart toilets, smart bathroom tech,<br />
              and collections like ELEMENT, MUA, MX, and FONTAINE,<br />
              with touchless technology and antibacterial glaze.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="/lovable-uploads/smart-toilet.jpg" 
              alt="Smart Toilet"
              className="max-w-md h-auto object-contain"
            />
          </div>
        </div>
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

      {/* Footer Section */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow TOA LIVING SPACE</h3>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">@</span>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">▶</span>
                </div>
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌐</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Contact Showroom</h4>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-600 mb-4">
                Sign up to receive email, news, promotions<br />
                and information about JOMOO.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="E-mail Address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded bg-gray-100"
                />
                <button className="px-6 py-2 bg-gray-400 text-white rounded">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesktopSmartToiletPage;