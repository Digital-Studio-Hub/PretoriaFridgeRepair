export function SEOSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pretoriafridgerepairs.co.za/#organization",
    "name": "Pretoria Fridge Repairs",
    "alternateName": "Pretoria Appliance Repairs",
    "description": "Fast, affordable fridge, freezer, and washing machine repairs in Pretoria. Same-day mobile service available.",
    "url": "https://pretoriafridgerepairs.co.za",
    "telephone": "+27797822184",
    "email": "info@pretoriafridgerepairs.co.za",
    "image": "https://pretoriafridgerepairs.co.za/og-image.jpg",
    "logo": "https://pretoriafridgerepairs.co.za/logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "ZAR",
    "paymentAccepted": "Cash, EFT, Card",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-25.7479",
      "longitude": "28.2293"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Pretoria"
      },
      {
        "@type": "State",
        "name": "Gauteng"
      },
      {
        "@type": "Country",
        "name": "South Africa"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+27797822184",
        "contactType": "customer service",
        "areaServed": "ZA",
        "availableLanguage": ["English", "Afrikaans"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+27797822184",
        "contactType": "customer service",
        "contactOption": "WhatsApp",
        "areaServed": "ZA"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Albert Mwansa"
    },
    "sameAs": [
      "https://wa.me/27797822184"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pretoria Fridge Repairs"
    },
    "areaServed": {
      "@type": "City",
      "name": "Pretoria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fridge Repair",
            "description": "Domestic and commercial fridge repairs including compressor issues, cooling problems, and more."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Freezer Repair",
            "description": "Freezer repairs including ice buildup, not freezing, and gas loss diagnostics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washing Machine Repair",
            "description": "Front-loader and top-loader washing machine repairs including drum issues, electrical faults, and water leakage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Refill & Leak Detection",
            "description": "Professional gas refilling and leak detection services for refrigeration systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cooling System Diagnostics",
            "description": "Comprehensive diagnostics for cooling systems to identify and fix issues."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Refrigeration",
            "description": "Repair services for commercial refrigeration units, display fridges, and cold rooms."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pretoria Fridge Repairs",
    "url": "https://pretoriafridgerepairs.co.za",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pretoriafridgerepairs.co.za/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pretoriafridgerepairs.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://pretoriafridgerepairs.co.za/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://pretoriafridgerepairs.co.za/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
