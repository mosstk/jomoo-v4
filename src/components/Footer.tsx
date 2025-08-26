import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";

// Line icon component (since Line icon is not in lucide-react)
const LineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

interface FooterProps {
  useProductPageStyle?: boolean;
}

const Footer = ({ useProductPageStyle = false }: FooterProps) => {
  return (
    <footer>
      {/* White divider line */}
      <div className="mx-auto px-4" style={{ width: '1080px', maxWidth: '100%' }}>
        <div className="w-full bg-white/30" style={{ height: '2px' }}></div>
      </div>
      
      {/* Main Footer Content - Same background as header */}
      <div className={`luxury-backdrop py-8 w-[1120px] mx-auto ${useProductPageStyle ? 'luxury-backdrop' : ''}`}>
        <div className="mx-auto px-4" style={{ width: '1080px', maxWidth: '100%' }}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            {/* Left Side */}
            <div className="flex flex-col space-y-4 mb-6 lg:mb-0">
              {/* Follow TOA LIVING SPACE */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">Follow TOA LIVING SPACE</span>
                <div className="flex space-x-2">
                  <a href="https://www.facebook.com/profile.php?id=61579248608655" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-8 h-8 p-0">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/toalivingspace/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-8 h-8 p-0">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://page.line.me/656fflaj" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-8 h-8 p-0">
                      <LineIcon />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Showroom */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">Contact Showroom</span>
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right Side - Empty space where newsletter was */}
            <div className="flex flex-col items-end space-y-4">
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright with dark background */}
      <div className="bg-slate-800">
        <div className="mx-auto px-4" style={{ width: '1080px', maxWidth: '100%' }}>
          <div className="pt-6 pb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-xs">
                © Copyright 2023 TOA Paint (Thailand) Public Company Limited. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs">Terms & Conditions</a>
                <span className="text-gray-400 text-xs">|</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs">Privacy Notice</a>
                <span className="text-gray-400 text-xs">|</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs">Cookies Policy</a>
                <span className="text-gray-400 text-xs">|</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;