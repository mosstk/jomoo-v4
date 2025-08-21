import DesktopServicePage from "@/components/desktop/DesktopServicePage";
import MobileServicePage from "@/components/mobile/MobileServicePage";
import { useIsMobile } from "@/hooks/use-mobile";

const Service = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileServicePage /> : <DesktopServicePage />;
};

export default Service;