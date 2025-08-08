import { ReactNode, useEffect } from "react";

interface MainLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
}

const MainLayout = ({ 
  children, 
  backgroundImage,
  overlay = true 
}: MainLayoutProps) => {
  useEffect(() => {
    // ลบพื้นหลังจาก body
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundAttachment = '';

    return () => {
      // Cleanup เมื่อ component unmount
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, [backgroundImage]);

  return (
    <div className="min-h-screen relative">
      {children}
      {/* Background section ที่แสดงจากใต้ Hero Banner ลงไป */}
      {backgroundImage && (
        <div 
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            top: '100vh', // เริ่มจากใต้ Hero Banner
            height: 'calc(100vh * 2)' // ขยายความสูงให้ครอบคลุม
          }}
        />
      )}
    </div>
  );
};

export default MainLayout;