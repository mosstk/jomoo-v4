import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DesktopInspirationPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/775eda3f-ca6c-419c-a23c-490dd2295f81.png)',
          backgroundSize: '1400px 100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Inspiration</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Design Inspiration</h2>
            <p className="text-gray-700 mb-4">
              Get inspired by our curated collection of bathroom design ideas and trends.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Modern Minimalist</h3>
                <p className="text-sm text-gray-600">Clean lines and sophisticated simplicity</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Luxury Spa</h3>
                <p className="text-sm text-gray-600">Transform your bathroom into a spa experience</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Contemporary Classic</h3>
                <p className="text-sm text-gray-600">Timeless elegance with modern functionality</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesktopInspirationPage;