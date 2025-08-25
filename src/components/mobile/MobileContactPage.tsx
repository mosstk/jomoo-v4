import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileContactPage = () => {
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
          <h1 className="text-2xl font-bold text-foreground mb-6">Contact</h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div>
                    <strong>Address:</strong><br />
                    TOA Living Space Showroom<br />
                    Bangkok, Thailand
                  </div>
                  <div>
                    <strong>Phone:</strong><br />
                    +66 (0) 2-xxx-xxxx
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    info@toalivingspace.com
                  </div>
                  <div>
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea rows={3} className="w-full px-3 py-2 border rounded-md"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileContactPage;