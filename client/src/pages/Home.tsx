import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield, 
  Wrench, 
  ThermometerSnowflake,
  WashingMachine,
  Fuel,
  Activity,
  Building2,
  Star,
  MapPin,
  Award
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@assets/engineers-inspect-the-cooling-system-of-a-large-bu-2025-10-07-_1765823313990.jpg";
import technicianImage from "@assets/PretoriaFridgeRepairs_2_1765784291561.webp";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "Fridge Repairs",
    description: "Not cooling, over-freezing, compressor issues. Domestic & commercial units.",
    href: "/services#fridge"
  },
  {
    icon: ThermometerSnowflake,
    title: "Freezer Repairs",
    description: "Ice buildup, not freezing, gas loss diagnostics and repairs.",
    href: "/services#freezer"
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repairs",
    description: "Not spinning, draining issues, water leakage, drum problems.",
    href: "/services#washing"
  },
  {
    icon: Fuel,
    title: "Gas Refill & Leak Detection",
    description: "Professional gas refilling and leak detection services.",
    href: "/services#gas"
  },
  {
    icon: Activity,
    title: "Cooling Diagnostics",
    description: "Comprehensive diagnostics to identify and fix cooling issues.",
    href: "/services#diagnostics"
  },
  {
    icon: Building2,
    title: "Commercial Refrigeration",
    description: "Display fridges, cold rooms, and commercial units.",
    href: "/services#commercial"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Quick response and same-day repairs when you need them most."
  },
  {
    icon: Shield,
    title: "Guaranteed Work",
    description: "All repairs come with our quality workmanship guarantee."
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Skilled professionals with years of appliance repair experience."
  },
  {
    icon: Award,
    title: "Affordable Prices",
    description: "Competitive rates without compromising on quality."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Centurion",
    rating: 5,
    text: "Albert fixed my fridge the same day I called. Very professional and affordable. Highly recommended!"
  },
  {
    name: "John D.",
    location: "Pretoria East",
    rating: 5,
    text: "Excellent service! My washing machine is working perfectly again. Quick response on WhatsApp too."
  },
  {
    name: "Thabo K.",
    location: "Hatfield",
    rating: 5,
    text: "Best appliance repair service in Pretoria. Fair prices and honest advice. Will use again!"
  }
];

const serviceAreas = [
  "Pretoria Central", "Centurion", "Pretoria East", "Pretoria North",
  "Pretoria West", "Hatfield", "Brooklyn", "Menlo Park",
  "Arcadia", "Sunnyside", "Montana", "Wonderboom"
];

export default function Home() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27797822184?text=Hi%2C%20I%20need%20appliance%20repair%20services", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pretoria Fridge Repairs technician fixing a fridge in Pretoria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Fast & Reliable Appliance Repairs in Pretoria
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium" style={{ animationDelay: "0.1s" }}>
              Fridges &bull; Freezers &bull; Washing Machines &bull; Commercial Refrigeration
            </p>
            <p className="text-lg text-white/80 mb-8" style={{ animationDelay: "0.2s" }}>
              Professional same-day mobile repair service. We come to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-success hover:bg-success/90 text-white border-success-border text-lg px-8 py-6 gap-3"
                data-testid="button-hero-call"
              >
                <Phone className="h-5 w-5" />
                Call Now: 079 782 2184
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 text-lg px-8 py-6 gap-3"
                data-testid="button-hero-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Albert Section */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-success font-semibold text-sm uppercase tracking-wider">About Your Technician</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">
                Meet Albert Mwansa
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With years of experience in appliance repair, Albert brings expertise and dedication to every job. 
                Specializing in fridges, freezers, washing machines, and commercial refrigeration, he provides 
                fast, reliable service throughout Pretoria and surrounding areas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Professional & experienced technician</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Mobile service - we come to you</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Same-day repairs available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Honest advice & transparent pricing</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="bg-success hover:bg-success/90 text-white border-success-border" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={technicianImage} 
                  alt="Albert Mwansa - Pretoria Fridge Repairs technician"
                  className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-success text-white p-4 rounded-lg shadow-lg hidden sm:block">
                  <p className="font-heading font-bold text-2xl">10+</p>
                  <p className="text-sm text-white/90">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-success font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
              Our Repair Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From domestic fridges to commercial refrigeration, we handle all your appliance repair needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <Button className="bg-success hover:bg-success/90 text-white border-success-border w-full" data-testid={`button-service-${index}`}>
                      Request Repair
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-success font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
              The Pretoria Fridge Repairs Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 lg:py-24 bg-primary" data-testid="section-areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-success font-semibold text-sm uppercase tracking-wider">Coverage Area</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Service Areas in Pretoria
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We provide mobile appliance repair services throughout Pretoria and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-success flex-shrink-0" />
                <span className="text-white text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">Don't see your area? Contact us - we may still be able to help!</p>
            <Button
              onClick={handleWhatsApp}
              className="bg-success hover:bg-success/90 text-white border-success-border gap-2"
              data-testid="button-areas-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4" />
              Ask About Your Area
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-success font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip CTA */}
      <section className="py-12 bg-success" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Need an Appliance Repair?
              </h2>
              <p className="text-white/90">Contact us now for fast, reliable service in Pretoria.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-white text-success hover:bg-white/90 gap-2"
                data-testid="button-cta-call"
              >
                <Phone className="h-5 w-5" />
                Call: 079 782 2184
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                data-testid="button-cta-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp: 079 782 2184
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
