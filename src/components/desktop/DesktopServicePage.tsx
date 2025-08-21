import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DesktopServicePage = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Service</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
            <p className="text-gray-700 mb-6">
              Comprehensive services to support your bathroom renovation journey from start to finish.
            </p>
            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Design Consultation</h3>
                <p className="text-gray-600">Professional design advice tailored to your space and needs</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Installation Service</h3>
                <p className="text-gray-600">Expert installation by certified professionals</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-3">After-Sales Support</h3>
                <p className="text-gray-600">Ongoing support and maintenance services</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesktopServicePage;