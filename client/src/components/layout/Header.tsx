import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import mainLogo from "@assets/Main Logo_1764087693743.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/27797822184?text=Hi%2C%20I%20need%20appliance%20repair%20services",
      "_blank",
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2"
            data-testid="link-home-logo"
          >
            <img
              src={mainLogo}
              alt="Pretoria Fridge Repairs Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            data-testid="nav-desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "bg-white/20 text-primary"
                    : "text-primary/90 hover:bg-primary/10 hover:text-primary"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              className="bg-success hover:bg-success/90 text-white border-success-border gap-2"
              data-testid="button-header-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </Button>
            <Button
              onClick={handleCall}
              variant="outline"
              className="bg-white/10 border-white/30 text-primary hover:bg-white/20 gap-2"
              data-testid="button-header-call"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">079 782 2184</span>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-primary hover:bg-white/10 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white border-t border-white/10"
          data-testid="nav-mobile"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "bg-white/20 text-primary"
                    : "text-primary/90 hover:bg-primary/10 hover:text-primary"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
              <Button
                onClick={handleWhatsApp}
                className="bg-success hover:bg-success/90 text-white border-success-border gap-2 w-full justify-center"
                data-testid="button-mobile-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="bg-white/10 border-white/30 text-primary hover:bg-white/20 gap-2 w-full justify-center"
                data-testid="button-mobile-call"
              >
                <Phone className="h-5 w-5" />
                Call 079 782 2184
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
