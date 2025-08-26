import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DesktopInspirationPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section with Inspiration text overlay */}
      <section className="relative overflow-hidden w-full max-w-[1120px] mx-auto" 
        style={{ 
          height: '587px',
          aspectRatio: '1120/587'
        }}>
        <img 
          src="/lovable-uploads/25231772-4d2b-4b34-851b-15c7587c7410.png"
          alt="Inspiration Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white tracking-wide">Inspiration</h1>
        </div>
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-12 w-[1120px] mx-auto">
        <div className="px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img 
              src="/lovable-uploads/b44d42d9-a83a-4154-8988-faa57edbe1cc.png" 
              alt="TOA Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-2xl font-medium text-gray-800">|</span>
            <img 
              src="/lovable-uploads/8fd2f234-50b7-439f-9827-338a4978eeda.png" 
              alt="JOMOO Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Our design seamlessly blends comfort, convenience, and health, offering a sophisticated, user-centric experience.
          </p>
        </div>
      </section>

      {/* SIGNATURE Collection Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0df691d9-30f3-4bf4-8cc2-0c10a8a03391.png"
              alt="SIGNATURE Collection"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">SIGNATURE Collection</h2>
            <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed text-base">
              SIGNATURE is a bathroom collection that can be highly customized to customer requirements. The vanity unit can be put together from 
              different modules to measure and function. A selection of interchangeable drawer fronts in a variety of materials gives the ensemble a 
              personal touch. Thanks to customizable panels, fittings and toilets can also be matched to the material of the front panels.
            </p>
          </div>
        </div>
      </section>

      {/* VOYAGE Collection Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/27b3024e-b9c1-4aff-92be-bb3b67f38013.png"
              alt="VOYAGE Collection"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">VOYAGE Collection</h2>
            <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed text-base">
              The VOYAGE collection is a holistic sanitary system, developed for and with hotel architects. In order to meet the diverse international 
              building situations, the system is designed for different versions: surface-mounted as well as flush-mounted, free-standing as well as 
              for built-in situations, floor-standing as well as wall-mounted. The generic form of the VOYAGE collection enables planners to always 
              develop a harmonious, seamless room concept.
            </p>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Award</h2>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/5a467e79-4f95-485a-ae3a-ad3509137f68.png"
              alt="Awards"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DesktopInspirationPage;