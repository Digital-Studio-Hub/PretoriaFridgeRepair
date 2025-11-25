import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import image1 from "@assets/IMG-20250827-WA0001~2_1764087863392.jpg";
import image2 from "@assets/IMG-20250827-WA0009~2_1764087863392.jpg";
import image3 from "@assets/IMG-20250827-WA0033~2_1764087863393.jpg";
import image4 from "@assets/IMG-20250821-WA0005~2_1764087863391.jpg";
import image5 from "@assets/IMG-20250821-WA0010~2_1764087863391.jpg";
import image6 from "@assets/IMG-20250625-WA0033~2_1764087863391.jpg";
import image7 from "@assets/IMG-20250611-WA0005_1764087863390.jpeg";
import image8 from "@assets/IMG-20251115-WA0001_1764087863393.jpg";
import image9 from "@assets/IMG_20251117_144337_877_1764087863390.jpg";

const galleryImages = [
  {
    src: image1,
    alt: "Pretoria Fridge Repairs technician repairing a fridge in a modern kitchen",
    category: "Fridge Repairs"
  },
  {
    src: image2,
    alt: "Professional technician with toolbox inspecting a freezer unit",
    category: "Freezer Repairs"
  },
  {
    src: image3,
    alt: "Commercial refrigerator repair service in Pretoria",
    category: "Commercial Refrigeration"
  },
  {
    src: image4,
    alt: "Technician diagnosing cooling issues on a domestic fridge",
    category: "Fridge Repairs"
  },
  {
    src: image5,
    alt: "Fridge, aircon and washing machine repair services display",
    category: "All Services"
  },
  {
    src: image6,
    alt: "Professional appliance repair technician working on cooling unit",
    category: "Commercial Refrigeration"
  },
  {
    src: image7,
    alt: "Washing machine repair service - front loader and dryer units",
    category: "Washing Machine Repairs"
  },
  {
    src: image8,
    alt: "Completed fridge repair with water dispenser in Pretoria home",
    category: "Fridge Repairs"
  },
  {
    src: image9,
    alt: "Air conditioning unit installation and repair services",
    category: "Commercial Refrigeration"
  }
];

const categories = ["All", "Fridge Repairs", "Freezer Repairs", "Washing Machine Repairs", "Commercial Refrigeration"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory || img.category === "All Services");

  const handleWhatsApp = () => {
    window.open("https://wa.me/27692159042?text=Hi%2C%20I%20need%20appliance%20repair%20services", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27797822184";
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary" data-testid="section-gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Take a look at some of our recent appliance repair jobs throughout Pretoria. 
            Quality workmanship on every project.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-secondary/30 sticky top-16 md:top-20 z-40" data-testid="section-gallery-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-primary text-white" 
                  : "border-primary/30 text-primary hover:bg-primary/5"
                }
                size="sm"
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background" data-testid="section-gallery-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="bg-card overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
                data-testid={`card-gallery-${index}`}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
                    {image.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[lightboxIndex].src} 
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4">{filteredImages[lightboxIndex].alt}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-success" data-testid="section-gallery-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Need Similar Repairs Done?
              </h2>
              <p className="text-white/90">Contact us today for professional appliance repair service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-white text-success hover:bg-white/90 gap-2"
                data-testid="button-gallery-call"
              >
                <Phone className="h-5 w-5" />
                Call: 079 782 2184
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                data-testid="button-gallery-whatsapp"
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
