import DesktopAboutUsPage from "@/components/desktop/DesktopAboutUsPage";
import MobileAboutUsPage from "@/components/mobile/MobileAboutUsPage";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUs = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileAboutUsPage /> : <DesktopAboutUsPage />;
};

export default AboutUs;