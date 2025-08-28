import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DesktopContactPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden w-full max-w-[1120px] mx-auto" 
        style={{ 
          height: '587px',
          aspectRatio: '1120/587'
        }}>
        <img 
          src="/lovable-uploads/a794be13-6e9e-4fc0-b40d-f601cd3763dd.png"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-8 w-[1120px] mx-auto">
        <div className="px-4 text-center">
          <img 
            src="/lovable-uploads/c2171c32-6150-4688-870a-1815a6b2ce9b.png" 
            alt="TOA | JOMOO Logo" 
            className="h-11 mx-auto mb-8"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4 ml-[50px]">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Contact</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/27ad0ff6-7ca2-455c-b951-d7d0fa542716.png" 
                alt="Location Icon" 
                className="w-11 h-11"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Showroom Office, Sukhumvit 26</h3>
                <p className="text-gray-600">100/68 (Shop B) Warehouse 26, Soi Ari, Sukhumvit 26 Road, Khlong Ton, Khlong Toei, Bangkok 10110</p>
              </div>
            </div>
            
            <a href="mailto:toalivingspace@toagroup.com" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0d95b0f0-4e1c-40ff-b185-19016ad7bf48.png" 
                alt="Email Icon" 
                className="w-11 h-11"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
                <p className="text-gray-600">toalivingspace@toagroup.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4 ml-[50px]">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Follow Us</h2>
          
          <div className="flex justify-center items-center gap-32">
            <a href="https://page.line.me/656fflaj" target="_blank" rel="noopener noreferrer" className="text-center hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/7142c809-bcc0-4ec0-a304-db05ffb65e42.png" 
                alt="LINE Icon" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-gray-900 font-medium">TOA_LivingSpace</p>
            </a>
            
            <a href="https://www.facebook.com/profile.php?id=61579248608655" target="_blank" rel="noopener noreferrer" className="text-center hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/472b8958-3e12-4f36-945e-70c960ecf0dd.png" 
                alt="Facebook Icon" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-gray-900 font-medium">TOA Living Space</p>
            </a>
            
            <a href="https://www.instagram.com/toalivingspace" target="_blank" rel="noopener noreferrer" className="text-center hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/491b5425-c914-40b6-a250-0437d768e12d.png" 
                alt="Instagram Icon" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-gray-900 font-medium">TOA Living Space</p>
            </a>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default DesktopContactPage;