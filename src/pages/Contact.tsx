import DesktopContactPage from "@/components/desktop/DesktopContactPage";
import MobileContactPage from "@/components/mobile/MobileContactPage";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileContactPage /> : <DesktopContactPage />;
};

export default Contact;