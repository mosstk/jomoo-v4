import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary rounded-lg p-2">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <span className="text-primary font-bold">J</span>
                </div>
              </div>
              <span className="text-xl font-bold text-foreground font-playfair">JOMOO</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Follow TOA LIVING SPACE
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Showroom</h4>
            <p className="text-muted-foreground">
              Visit our showroom for hands-on experience with our premium bathroom fixtures.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Sign up to receive email, news, promotions and information about JOMOO
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Email Address" 
                className="bg-secondary border-border text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © Copyright 2023 TOA Roca (Thailand) Public Company Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Notice</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookies Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;