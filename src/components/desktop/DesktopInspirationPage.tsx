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
          src="/lovable-uploads/969f7461-9793-42f0-8cac-3474cb4a8e0a.png"
          alt="Inspiration Hero"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-5 w-[1120px] mx-auto">
        <div className="px-4 text-center">
          <img 
            src="/lovable-uploads/dcb2abeb-2ea6-4570-ae55-7fa7c9ae2801.png" 
            alt="TOA | JOMOO Logo" 
            className="w-auto h-auto object-contain mx-auto mb-3 scale-[0.225]"
          />
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
          <div className="flex justify-center items-center gap-4 flex-nowrap overflow-x-auto">
            <img src="/lovable-uploads/643dca45-bbaf-4fa7-a0f2-b554b80fbfa9.png" alt="Gold Award 2023" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/8d79bb69-1927-44bf-84f3-d482d88422f3.png" alt="Iconic Awards Innovative Interior" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/3bc5a26c-f5ec-4013-b4d0-7c2d46a19e3b.png" alt="Iconic Awards 2022" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/b9a1771d-0904-42df-a8c1-6799e4b0cc65.png" alt="German Innovation Award" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/88c74e39-0813-4038-a337-4bd14cd15137.png" alt="iF Design Award 2025" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/c1dcdea8-624b-4dca-b161-ca7ef235a9e0.png" alt="German Design Award Winner 2025" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/ee8e3349-4894-40e4-b8d2-3d831706b2da.png" alt="Red Dot Winner 2025" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/386d006c-ddca-4437-b432-9098e467594b.png" alt="iF Design Award 2024" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/ce2ea7ce-5d4a-4900-ab43-51c0e96bec09.png" alt="German Design Award Gold 2024" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/dd3f61dd-7b11-41b8-aa8b-51762d05d3ed.png" alt="Red Dot Winner 2024" className="h-16 w-auto object-contain flex-shrink-0" />
            <img src="/lovable-uploads/6f635279-5f30-410b-8d50-8393755019aa.png" alt="Good Design Award 2023" className="h-16 w-auto object-contain flex-shrink-0" />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DesktopInspirationPage;