import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bidetSprayProducts } from "@/data/bidet-spray-products";

const DesktopBidetSprayPage = () => {
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
          src="/lovable-uploads/133433bd-14e7-4eae-9336-455cfd6fcdf3.png"
          alt="Bidet Spray Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TOA | JOMOO Logo Section */}
      <section className="bg-white py-8 w-[1120px] mx-auto">
        <div className="px-4 text-center">
          <img 
            src="/lovable-uploads/71ce025e-b030-4065-ab22-8ca999d67ebc.png" 
            alt="TOA | JOMOO Logo" 
            className="h-11 w-auto object-contain mx-auto"
          />
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white py-4 w-[1120px] mx-auto">
        <div className="px-4">
          <p className="text-muted-foreground">Product &gt; Bidet Spray</p>
        </div>
      </section>

      {/* Coming Soon Image */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4 flex justify-center">
          <img 
            src="/lovable-uploads/04173ca3-1ca8-4151-a2af-1ef6448d7bdc.png" 
            alt="Coming Soon"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesktopBidetSprayPage;