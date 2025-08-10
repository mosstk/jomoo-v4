import { ReactNode } from "react";

interface FullBackgroundLayoutProps {
  children: ReactNode;
  backgroundImage: string;
  option?: "fixed" | "parallax";
}

const FullBackgroundLayout = ({ 
  children, 
  backgroundImage,
  option = "fixed" 
}: FullBackgroundLayoutProps) => {
  
  // Option 1: Fixed Background - พื้นหลังคงที่ไม่เลื่อน
  if (option === "fixed") {
    return (
      <div className="min-h-screen relative">
        {/* Fixed Background */}
        <div 
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Content with semi-transparent overlay for better readability */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  // Option 2: Parallax Effect - พื้นหลังเลื่อนช้ากว่าเนื้อหา
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-[-1] will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '120%', // ขยายความสูงเพื่อให้ parallax ทำงาน
          transform: 'translateZ(0)', // เพิ่มประสิทธิภาพ GPU
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Simple CSS for parallax effect */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .parallax-bg {
            transform: translateY(calc(var(--scroll) * 0.5px));
          }
        }
      `}</style>
    </div>
  );
};

export default FullBackgroundLayout;