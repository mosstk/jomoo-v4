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
  console.log('MainLayout backgroundImage:', backgroundImage);
  return (
    <div className="min-h-screen relative">
      {backgroundImage && (
        <div 
          className="fixed inset-0 z-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
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