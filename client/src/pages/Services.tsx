import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone,
  ThermometerSnowflake,
  WashingMachine,
  Fuel,
  Activity,
  Building2,
  CheckCircle,
  Snowflake
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import fridgeRepairImage from "@assets/IMG-20250821-WA0005~2_1764087863391.jpg";
import washingMachineImage from "@assets/IMG-20250611-WA0005_1764087863390.jpeg";
import commercialImage from "@assets/IMG_20251117_144337_877_1764087863390.jpg";

const services = [
  {
    id: "fridge",
    icon: ThermometerSnowflake,
    title: "Fridge Repairs",
    description: "Complete domestic and commercial fridge repair services. We diagnose and fix all types of refrigerator problems quickly and efficiently.",
    image: fridgeRepairImage,
    features: [
      "Not cooling or poor cooling",
      "Over-freezing issues",
      "Compressor problems",
      "Thermostat repairs",
      "Door seal replacement",
      "Strange noises",
      "Ice maker issues",
      "Domestic & commercial units"
    ]
  },
  {
    id: "freezer",
    icon: Snowflake,
    title: "Freezer Repairs",
    description: "Expert freezer repair services for all makes and models. From ice buildup to complete system failures, we've got you covered.",
    image: null,
    features: [
      "Ice buildup problems",
      "Not freezing properly",
      "Gas loss diagnostics",
      "Temperature inconsistencies",
      "Defrost system issues",
      "Compressor repairs",
      "Chest & upright freezers",
      "Commercial freezer units"
    ]
  },
  {
    id: "washing",
    icon: WashingMachine,
    title: "Washing Machine Repairs",
    description: "Professional washing machine repairs for front-loaders and top-loaders. We fix all common issues and restore your machine to perfect working order.",
    image: washingMachineImage,
    features: [
      "Not spinning",
      "Not draining properly",
      "Water leakage issues",
      "Drum not turning",
      "Electrical faults",
      "Unusual noises or vibrations",
      "Front-loader repairs",
      "Top-loader repairs"
    ]
  },
  {
    id: "gas",
    icon: Fuel,
    title: "Gas Refill & Leak Detection",
    description: "Professional refrigerant gas services including leak detection and refilling. Proper gas levels are essential for efficient cooling.",
    image: null,
    features: [
      "Refrigerant gas refilling",
      "Leak detection services",
      "System pressure testing",
      "Pipe repairs and sealing",
      "Gas recovery services",
      "Environmentally safe disposal",
      "All refrigerant types",
      "Certified handling"
    ]
  },
  {
    id: "diagnostics",
    icon: Activity,
    title: "Cooling System Diagnostics",
    description: "Comprehensive diagnostic services to identify exactly what's wrong with your cooling appliances before we begin repairs.",
    image: null,
    features: [
      "Complete system analysis",
      "Temperature testing",
      "Electrical diagnostics",
      "Compressor testing",
      "Thermostat calibration",
      "Efficiency assessment",
      "Written diagnostic report",
      "Repair recommendations"
    ]
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Refrigeration",
    description: "Specialized repair services for commercial refrigeration units. Keep your business running with minimal downtime.",
    image: commercialImage,
    features: [
      "Display fridges",
      "Cold room repairs",
      "Walk-in freezers",
      "Ice machines",
      "Beverage coolers",
      "Restaurant equipment",
      "Supermarket units",
      "Emergency services available"
    ]
  }
];

export default function Services() {
  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi, I need help with ${service}. Can you assist?`);
    window.open(`https://wa.me/27797822184?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Repair Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Professional appliance repair services in Pretoria. From fridges to commercial refrigeration, 
            we have the expertise to fix it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-success hover:bg-success/90 text-white border-success-border gap-2"
              data-testid="button-services-call"
            >
              <Phone className="h-5 w-5" />
              Call Now: 079 782 2184
            </Button>
            <Button
              onClick={() => handleWhatsApp("appliance repair")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 gap-2"
              data-testid="button-services-whatsapp"
            >
              <SiWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    className="bg-success hover:bg-success/90 text-white border-success-border gap-2"
                    data-testid={`button-request-${service.id}`}
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    Request {service.title.split(" ")[0]} Repair
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={`${service.title} service by Pretoria Fridge Repairs`}
                      className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
                    />
                  ) : (
                    <Card className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center">
                      <CardContent className="text-center p-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <service.icon className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          Professional service you can trust
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-success" data-testid="section-services-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Get Your Appliance Fixed?
              </h2>
              <p className="text-white/90">Contact us now for fast, professional service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-white text-success hover:bg-white/90 gap-2"
                data-testid="button-services-cta-call"
              >
                <Phone className="h-5 w-5" />
                Call: 079 782 2184
              </Button>
              <Button
                onClick={() => handleWhatsApp("appliance repair")}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                data-testid="button-services-cta-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
