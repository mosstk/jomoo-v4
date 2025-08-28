import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DesktopSiteMapPage = () => {
  const siteStructure = [
    {
      title: "หน้าหลัก",
      links: [
        { name: "หน้าแรก", path: "/" },
        { name: "ผลิตภัณฑ์ทั้งหมด", path: "/product" },
      ]
    },
    {
      title: "ผลิตภัณฑ์สุขภัณฑ์",
      links: [
        { name: "โถสุขภัณฑ์อัจฉริยะ", path: "/smart-toilet" },
        { name: "โถสุขภัณฑ์ชิ้นเดียว", path: "/one-piece-toilet" },
        { name: "อ่างล้างหน้า", path: "/basin" },
        { name: "อ่างอาบน้ำ", path: "/bathtub" },
        { name: "ห้องอาบน้ำ", path: "/shower-enclosure" },
        { name: "ก๊อกน้ำ", path: "/faucet" },
        { name: "ฝักบัวฝน", path: "/rain-shower" },
        { name: "สายฉีดชำระ", path: "/bidet-spray" },
        { name: "โถปัสสาวะ", path: "/uniral" },
        { name: "อุปกรณ์เสริม", path: "/accessories" },
      ]
    },
    {
      title: "บริการและข้อมูล",
      links: [
        { name: "แรงบันดาลใจ", path: "/inspiration" },
        { name: "บริการ", path: "/service" },
        { name: "เกี่ยวกับเรา", path: "/about-us" },
        { name: "ติดต่อเรา", path: "/contact" },
      ]
    },
    {
      title: "นโยบายและเงื่อนไข",
      links: [
        { name: "นโยบายความเป็นส่วนตัว", path: "/privacy-notice" },
        { name: "นโยบายการใช้คุกกี้", path: "/cookies-policy" },
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Content Section */}
      <section className="bg-white py-16 w-[1120px] mx-auto">
        <div className="px-4 ml-[50px]">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Site Map</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {siteStructure.map((section, index) => (
              <div key={index} className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                    {section.title}
                  </h2>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="text-lg text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-200"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">เกี่ยวกับ TOA Living Space</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              TOA Living Space คือแบรนด์สุขภัณฑ์คุณภาพสูงจากประเทศไทย ที่มุ่งมั่นในการสร้างสรรค์ผลิตภัณฑ์สุขภัณฑ์ที่ทันสมัย 
              มีคุณภาพ และตอบสนองต่อความต้องการของลูกค้าในทุกไลฟ์สไตล์ ด้วยเทคโนโลยีที่ล้ำสมัยและการออกแบบที่เป็นเอกลักษณ์
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="mt-8 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">ข้อมูลติดต่อ</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <p>
                <strong>Showroom Office:</strong> 100/68 (Shop B) Warehouse 26, Soi Ari, Sukhumvit 26 Road, Khlong Ton, Khlong Toei, Bangkok 10110
              </p>
              <p>
                <strong>Email:</strong> toalivingspace@toagroup.com
              </p>
              <p>
                <strong>โทรศัพท์:</strong> 02-335-5555
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DesktopSiteMapPage;