import { Link } from "wouter";
import { Phone, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import lekkerLogo from "@assets/lekkerlogo_1764087711293.png";
import verifiedBadge from "@assets/Badge Level 1_1764087703145.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Pretoria Fridge Repairs</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Fast, reliable, and affordable mobile appliance repair services in Pretoria and surrounding areas. 
              Same-day service available.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/27797822184"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-success rounded-full hover:bg-success/90 transition-colors"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="tel:+27797822184"
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Phone"
                data-testid="link-footer-phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-footer-services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <div>
                  <p className="text-white/80">Call: <a href="tel:+27797822184" className="text-white hover:underline">079 782 2184</a></p>
                  <p className="text-white/80">WhatsApp: <a href="https://wa.me/27797822184" className="text-white hover:underline">079 782 2184</a></p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <span className="text-white/80">Pretoria & Surrounding Areas, Gauteng, South Africa</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 mt-0.5 text-success flex-shrink-0" />
                <span className="text-white/80">Mon - Sat: 7:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Fridge Repairs</li>
              <li>Freezer Repairs</li>
              <li>Washing Machine Repairs</li>
              <li>Gas Refill & Leak Detection</li>
              <li>Cooling System Diagnostics</li>
              <li>Commercial Refrigeration</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://lekker.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
                data-testid="link-lekker-network"
              >
                <img 
                  src={lekkerLogo} 
                  alt="Lekker Network Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-xs text-white/60">Powered by Lekker Network</span>
              </a>
              
              <a
                href="https://lekker.network/the-lekker-network-verified"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
                data-testid="link-verified-badge"
              >
                <img 
                  src={verifiedBadge} 
                  alt="Lekker Network Verified Badge Level 1" 
                  className="h-16 w-auto"
                />
                <span className="text-xs text-white/60">Lekker Network Verified</span>
              </a>
            </div>

            <div className="text-center text-sm text-white/60">
              <p>&copy; {currentYear} Pretoria Fridge Repairs. All rights reserved.</p>
              <p className="mt-1">Fast, Reliable, Affordable Appliance Repairs in Pretoria</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
