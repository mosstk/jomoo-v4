import DesktopUniralPage from "@/components/desktop/DesktopUniralPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Uniral = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopUniralPage />;
};

export default Uniral;