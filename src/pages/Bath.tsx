import DesktopBathPage from "@/components/desktop/DesktopBathPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Bath = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopBathPage />;
};

export default Bath;