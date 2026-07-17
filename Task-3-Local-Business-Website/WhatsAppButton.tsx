import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold">M.S. Yadav</span>
                <span className="block text-xs opacity-70">Transport Service</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Professional transport contractors & commission agents offering reliable goods transportation across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/fleet", label: "Fleet" },
                { to: "/book", label: "Book Transport" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 opacity-70" />
                <div>
                  <p>Dileep Kumar: <a href="tel:9910138901" className="hover:text-accent">9910138901</a></p>
                  <p>Jeevan Kisore: <a href="tel:9839626437" className="hover:text-accent">9839626437</a></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 opacity-70" />
                <a href="mailto:monuy7@gmail.com" className="hover:text-accent">monuy7@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Office Address</h4>
            <div className="flex items-start gap-2 text-sm opacity-70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <p>Front of TVS Showroom, Chaprolla, Gautam Buddh Nagar, Uttar Pradesh – 203207, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} M.S. Yadav Transport Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
