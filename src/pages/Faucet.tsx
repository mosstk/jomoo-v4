import DesktopFaucetPage from "@/components/desktop/DesktopFaucetPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Faucet = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopFaucetPage />;
};

export default Faucet;