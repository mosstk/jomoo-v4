import DesktopProductPage from "@/components/desktop/DesktopProductPage";
import MobileProductPage from "@/components/mobile/MobileProductPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Product = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileProductPage /> : <DesktopProductPage />;
};

export default Product;