import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";

// Line icon component (since Line icon is not in lucide-react)
const LineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

const Footer = ({ useProductPageStyle = false }: { useProductPageStyle?: boolean }) => {
  return (
    <footer>
      {/* White divider line */}
      <div className="container-content">
        <div className="w-full bg-white/30 h-0.5"></div>
      </div>
      
      {/* Main Footer Content - Enhanced Responsive design */}
      <div className={`section-spacing ${useProductPageStyle ? 'luxury-backdrop' : ''}`}>
        <div className="container-content">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 space-y-8 xl:space-y-0 gap-8">
            {/* Left Side */}
            <div className="flex flex-col space-y-6 w-full xl:w-auto">
              {/* Follow TOA LIVING SPACE */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                <span className="text-gray-300 text-body font-medium">Follow TOA LIVING SPACE</span>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 w-10 h-10 p-0 transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 w-10 h-10 p-0 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 w-10 h-10 p-0 transition-all duration-300">
                    <Youtube className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 w-10 h-10 p-0 transition-all duration-300">
                    <LineIcon />
                  </Button>
                </div>
              </div>

              {/* Contact Showroom */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-body font-medium">Contact Showroom</span>
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Side - Newsletter */}
            <div className="flex flex-col items-start xl:items-end space-y-6 w-full xl:w-auto">
              <div className="text-left xl:text-right max-w-md xl:max-w-none">
                <p className="text-body text-white leading-relaxed">
                  Sign up to receive email, news, promotions<br className="hidden sm:block" />
                  and information about <span className="text-white font-semibold">JOMOO</span>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full xl:w-auto">
                <Input 
                  placeholder="E-mail Address" 
                  className="bg-gray-600/80 border-gray-500 text-white placeholder:text-gray-400 w-full sm:w-72 h-12 px-4 rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300"
                />
                <Button className="bg-gray-500 hover:bg-gray-400 text-white px-8 h-12 w-full sm:w-auto rounded-lg font-medium transition-all duration-300 hover-lift">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright with dark background */}
      <div className="bg-slate-800">
        <div className="container-content py-8">
          <div className="flex flex-col xl:flex-row justify-between items-center space-y-6 xl:space-y-0 gap-6">
            <p className="text-gray-400 text-caption text-center xl:text-left max-w-md xl:max-w-none">
              © Copyright 2023 TOA Paint (Thailand) Public Company Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center xl:justify-end gap-x-6 gap-y-2">
              <a href="#" className="text-gray-400 hover:text-white text-caption transition-colors duration-300">Terms & Conditions</a>
              <span className="text-gray-400 text-caption hidden sm:inline">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-caption transition-colors duration-300">Privacy Notice</a>
              <span className="text-gray-400 text-caption hidden sm:inline">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-caption transition-colors duration-300">Cookies Policy</a>
              <span className="text-gray-400 text-caption hidden sm:inline">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-caption transition-colors duration-300">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;