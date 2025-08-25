import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileServicePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/775eda3f-ca6c-419c-a23c-490dd2295f81.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-6">Service</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Comprehensive services to support your bathroom renovation journey from start to finish.
            </p>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-base mb-2">Design Consultation</h3>
                <p className="text-gray-600 text-sm">Professional design advice tailored to your space and needs</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-base mb-2">Installation Service</h3>
                <p className="text-gray-600 text-sm">Expert installation by certified professionals</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-base mb-2">After-Sales Support</h3>
                <p className="text-gray-600 text-sm">Ongoing support and maintenance services</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileServicePage;