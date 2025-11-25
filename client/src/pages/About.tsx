import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield, 
  Wrench, 
  Award,
  Users,
  ThumbsUp,
  Zap
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import technicianImage from "@assets/IMG-20250827-WA0009~2_1764087863392.jpg";
import workImage from "@assets/IMG-20250625-WA0033~2_1764087863391.jpg";

const values = [
  {
    icon: ThumbsUp,
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that work for you."
  },
  {
    icon: Shield,
    title: "Honest & Transparent",
    description: "No hidden fees or unnecessary repairs. We provide honest assessments and fair pricing."
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "We understand appliance problems can't wait. That's why we offer same-day service when possible."
  },
  {
    icon: Award,
    title: "Quality Work",
    description: "Every repair is done right the first time. We stand behind our work with a guarantee."
  }
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Happy Customers" },
  { value: "Same Day", label: "Service Available" },
  { value: "100%", label: "Satisfaction Goal" }
];

export default function About() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27692159042?text=Hi%2C%20I%20need%20appliance%20repair%20services", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            About Pretoria Fridge Repairs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for professional appliance repair services in Pretoria. 
            Fast, reliable, and affordable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-success" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/90 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Albert Section */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-about-albert">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={technicianImage} 
                alt="Albert Mwansa - Pretoria Fridge Repairs owner and technician"
                className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <span className="text-success font-semibold text-sm uppercase tracking-wider">Meet Your Technician</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">
                Albert Mwansa
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Albert is the founder and lead technician at Pretoria Fridge Repairs. With over a decade 
                of hands-on experience in appliance repair, he brings a wealth of knowledge and expertise 
                to every job.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Starting his career fixing refrigerators and air conditioning units, Albert quickly 
                expanded his skills to include washing machines, freezers, and commercial refrigeration 
                systems. His dedication to quality workmanship and customer satisfaction has built a 
                strong reputation throughout Pretoria.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Certified appliance repair technician</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Specialized in refrigeration systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Commercial & domestic expertise</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Committed to ongoing training & development</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleCall}
                  className="bg-success hover:bg-success/90 text-white border-success-border gap-2"
                  data-testid="button-about-call"
                >
                  <Phone className="h-4 w-4" />
                  Call Albert
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 gap-2"
                  data-testid="button-about-whatsapp"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  WhatsApp Albert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="section-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-success font-semibold text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">
                Our Approach to Repairs
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe in doing things right. When you call Pretoria Fridge Repairs, you get more 
                than just a quick fix – you get a thorough diagnosis, honest advice, and lasting repairs.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Diagnosis</h3>
                    <p className="text-muted-foreground">We thoroughly inspect your appliance to identify the root cause of the problem.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Quote</h3>
                    <p className="text-muted-foreground">You receive a clear, upfront quote with no hidden costs before any work begins.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Repair</h3>
                    <p className="text-muted-foreground">Our skilled technician performs the repair using quality parts and proper techniques.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-success text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Guarantee</h3>
                    <p className="text-muted-foreground">We stand behind our work with a satisfaction guarantee on all repairs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={workImage} 
                alt="Pretoria Fridge Repairs technician at work"
                className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-success font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-success" data-testid="section-about-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Experience the Difference?
              </h2>
              <p className="text-white/90">Contact us today for professional appliance repair service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-white text-success hover:bg-white/90 gap-2"
                data-testid="button-about-cta-call"
              >
                <Phone className="h-5 w-5" />
                Call: 079 782 2184
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                data-testid="button-about-cta-whatsapp"
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
