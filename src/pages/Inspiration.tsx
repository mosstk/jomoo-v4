import DesktopInspirationPage from "@/components/desktop/DesktopInspirationPage";
import MobileInspirationPage from "@/components/mobile/MobileInspirationPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Inspiration = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileInspirationPage /> : <DesktopInspirationPage />;
};

export default Inspiration;