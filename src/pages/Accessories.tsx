import DesktopAccessoriesPage from "@/components/desktop/DesktopAccessoriesPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Accessories = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopAccessoriesPage />;
};

export default Accessories;