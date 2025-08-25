import DesktopRainShowerPage from "@/components/desktop/DesktopRainShowerPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const RainShower = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopRainShowerPage />;
};

export default RainShower;