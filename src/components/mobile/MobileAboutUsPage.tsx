import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileAboutUsPage = () => {
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
          <h1 className="text-2xl font-bold text-foreground mb-6">About Us</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">TOA Living Space</h2>
            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                TOA Living Space is a leading provider of premium bathroom fixtures and design solutions. 
                With decades of experience in the industry, we are committed to transforming bathrooms 
                into beautiful, functional spaces that enhance your daily life.
              </p>
              <p>
                Our team of expert designers and craftsmen work closely with clients to create 
                personalized bathroom solutions that reflect individual style and meet specific needs.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                <p>
                  To provide exceptional bathroom design solutions that combine innovation, 
                  quality, and style to create spaces where comfort meets luxury.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Our Values</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Quality craftsmanship in every product</li>
                  <li>Innovative design solutions</li>
                  <li>Exceptional customer service</li>
                  <li>Sustainable practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileAboutUsPage;