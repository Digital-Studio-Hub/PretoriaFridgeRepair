import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingCTA() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27692159042?text=Hi%2C%20I%20need%20appliance%20repair%20services", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      <button
        onClick={handleCall}
        className="p-4 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Call now"
        data-testid="button-floating-call"
      >
        <Phone className="h-6 w-6" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="p-4 bg-success text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="WhatsApp us"
        data-testid="button-floating-whatsapp"
      >
        <SiWhatsapp className="h-6 w-6" />
      </button>
    </div>
  );
}
