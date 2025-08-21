import DesktopBasinPage from "@/components/desktop/DesktopBasinPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Basin = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopBasinPage />;
};

export default Basin;