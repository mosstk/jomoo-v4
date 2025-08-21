import DesktopShowerPage from "@/components/desktop/DesktopShowerPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Shower = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopShowerPage />;
};

export default Shower;