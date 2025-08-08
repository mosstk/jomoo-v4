import { ReactNode } from "react";

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
  return (
    <div className="min-h-screen relative">
      {backgroundImage && (
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`
          }}
        >
          {overlay && <div className="absolute inset-0 bg-black/10"></div>}
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;