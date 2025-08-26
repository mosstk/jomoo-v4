import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { accessoriesProducts } from "@/data/accessories-products";

const DesktopAccessoriesPage = () => {
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
          src="/lovable-uploads/d35d0c4a-dbf0-4372-94a3-0540dd5e6c1b.png"
          alt="Accessories Banner"
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
          <p className="text-muted-foreground">Product &gt; Accessories</p>
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

export default DesktopAccessoriesPage;