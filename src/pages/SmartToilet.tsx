import DesktopSmartToiletPage from "@/components/desktop/DesktopSmartToiletPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const SmartToilet = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopSmartToiletPage />;
};

export default SmartToilet;