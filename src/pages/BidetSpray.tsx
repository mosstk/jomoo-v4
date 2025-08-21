import DesktopBidetSprayPage from "@/components/desktop/DesktopBidetSprayPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const BidetSpray = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopBidetSprayPage />;
};

export default BidetSpray;