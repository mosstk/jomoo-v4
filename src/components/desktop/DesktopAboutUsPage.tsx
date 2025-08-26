import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DesktopAboutUsPage = () => {
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
          src="/lovable-uploads/16a45631-9e9c-418c-a127-cf56324e80f2.png"
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-8 w-[1120px] mx-auto">
        <div className="px-4 text-center">
          <img 
            src="/lovable-uploads/c2171c32-6150-4688-870a-1815a6b2ce9b.png" 
            alt="TOA | JOMOO Logo" 
            className="h-16 mx-auto mb-8"
          />
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">TOA x JOMOO – Leaders in Global Innovation for Building Materials and Sanitaryware</h2>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;TOA, Thailand's No.1 leader in paints and building materials with over 60 years of expertise, is committed to delivering high-quality 
              products that meet every consumer need. Guided by the vision "Creating a Better Quality of Life", TOA continuously develops innovative 
              solutions that are safe, environmentally friendly, and certified to international standards.
            </p>
            
            <p className="text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;JOMOO, a world-renowned brand from China, is a leading provider of sanitaryware and bathroom solutions. With cutting-edge 
              technology, elegant design, and premium quality, JOMOO is dedicated to creating products that reflect modern lifestyles—combining 
              convenience, advanced functionality, and sustainability.
            </p>
            
            <p className="text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;The collaboration between TOA and JOMOO represents the synergy of two industry leaders, joining strengths to deliver an enhanced 
              living experience for customers in Thailand. Together, they provide a comprehensive range of superior products, from exterior and 
              structural solutions to sanitaryware and bathroom innovations—bringing excellence to every corner of the home.
            </p>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default DesktopAboutUsPage;