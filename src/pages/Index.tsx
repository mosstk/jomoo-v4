import MobileLayout from "@/components/mobile/MobileLayout";
import DesktopLayout from "@/components/desktop/DesktopLayout";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Index;
