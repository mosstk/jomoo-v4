import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DesktopServicePage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Content Container with 1120px width and white background */}
      <div className="max-w-[1120px] mx-auto bg-white">
        {/* Hero Section */}
        <section className="relative">
          <div>
            <img 
              src="/lovable-uploads/b71eac7f-5d6a-4a76-90d4-0df515997797.png"
              alt="Smart Digital Services"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* TOA JOMOO Logo Section */}
        <section className="py-8 text-center">
          <div className="px-4">
            <img 
              src="/lovable-uploads/c2171c32-6150-4688-870a-1815a6b2ce9b.png"
              alt="TOA | JOMOO Logo"
              className="h-16 mx-auto mb-2"
            />
            <p className="text-gray-600">register your warranty</p>
          </div>
        </section>

        {/* Warranty Registration Form */}
        <section className="py-16">
          <div className="px-4 bg-white">
            {/* Customer Information */}
            <div className="bg-[#6B7DB8] text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl">📋</span> ข้อมูลลูกค้า
              </h2>
            </div>
            
            <div className="bg-white p-8 border-x border-gray-200">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">ชื่อ *</label>
                  <Input placeholder="กรอกชื่อ" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">นามสกุล *</label>
                  <Input placeholder="กรอกนามสกุล" className="w-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">อีเมล</label>
                  <Input placeholder="example@email.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">เบอร์โทรศัพท์ *</label>
                  <Input placeholder="08X-XXX-XXXX" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">ที่อยู่ *</label>
                <Textarea placeholder="ที่อยู่สำหรับจัดส่ง" className="w-full h-24" />
              </div>
            </div>

            {/* Product Information */}
            <div className="bg-[#6B7DB8] text-white p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl">📦</span> ข้อมูลสินค้า
              </h2>
            </div>
            
            <div className="bg-white p-8 border-x border-b border-gray-200 rounded-b-lg">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">หมวดหมู่สินค้า *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกหมวดหมู่สินค้า" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basin">อ่างล้างหน้า</SelectItem>
                      <SelectItem value="toilet">สุขภัณฑ์</SelectItem>
                      <SelectItem value="faucet">ก๊อกน้ำ</SelectItem>
                      <SelectItem value="shower">ฝักบัว</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ชื่อสินค้า หรือ รหัสสินค้า *</label>
                  <Input placeholder="กรอกชื่อสินค้า" className="w-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">หมายเลข serial</label>
                  <Input placeholder="กรอกหมายเลข serial" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">วันที่ Warranty (ระบบจะกรอกวันที่อัตโนมัติหากไม่กรอก)</label>
                  <Input placeholder="JM202400000000" className="w-full" />
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-[#6B7DB8] hover:bg-[#5A6BA5] text-white px-8 py-3 rounded-lg">
                  ลงทะเบียน
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DesktopServicePage;