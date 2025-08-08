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
    // ใช้ CSS variable เพื่อกำหนดพื้นหลัง
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = '100% 100%';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      // รีเซ็ตกลับเป็นค่าเดิม
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    }

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
    </div>
  );
};

export default MainLayout;