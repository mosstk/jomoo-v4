import DesktopOnePieceToiletPage from "@/components/desktop/DesktopOnePieceToiletPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const OnePieceToilet = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopOnePieceToiletPage />;
};

export default OnePieceToilet;