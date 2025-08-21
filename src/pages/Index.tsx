import MobileLayout from "@/components/mobile/MobileLayout";
import DesktopLayout from "@/components/desktop/DesktopLayout";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  // Force mobile view for testing
  return <MobileLayout />;
};

export default Index;
