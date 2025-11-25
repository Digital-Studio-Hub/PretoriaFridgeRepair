# Design Guidelines: Pretoria Fridge Repairs Website

## Design Approach
**Reference-Based**: Drawing from professional service websites with a focus on trust, professionalism, and immediate accessibility. The design emphasizes clear service offerings, instant contact options, and credibility through authentic imagery.

## Color System
- **Deep Refrigerator Blue** (#003B73): Primary brand color for headings, icons, header background, establishing authority and professionalism
- **Sky Blue** (#6ECFF5): Accent color for highlights, section backgrounds, creating visual interest and maintaining the refrigeration theme
- **Ice White** (#FFFFFF): Primary background color for content clarity and spacious, clean layouts
- **Eco Green** (#28C76F): Exclusive CTA color for buttons, WhatsApp, and main calls-to-action to ensure maximum visibility and conversion
- **Dark Grey** (#1A1A1A): Body text for optimal readability

**Application**: Use cold blue gradients for depth, soft UI shadows for modern card elements, and maintain generous white space throughout for a clean, professional refrigeration aesthetic.

## Typography
- **Headings**: Poppins or Montserrat Bold (via Google Fonts)
- **Body**: Inter or Nunito for high readability
- **Buttons**: White text on Eco Green (#28C76F) background
- **Hierarchy**: Bold headings with clear size differentiation, comfortable line-height for body text

## Layout System
**Spacing**: Use Tailwind spacing units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
**Containers**: max-w-7xl for main content, max-w-6xl for focused sections
**Sections**: py-16 to py-24 for desktop vertical spacing, py-12 for mobile
**Grid Patterns**: 2-3 column layouts for service tiles and testimonials on desktop, single column on mobile

## Page Structure & Components

### Home Page
**Hero Section**:
- Full-width hero with authentic technician repair image background
- Headline: "Fast & Reliable Appliance Repairs in Pretoria"
- Subheadline: "Fridges • Freezers • Washing Machines • Commercial Refrigeration"
- Two prominent green CTAs side-by-side: "Call Now" (079 782 2184) and "WhatsApp Us" (069 215 9042)
- Buttons with blurred backgrounds when overlaying images

**Sections** (in order):
1. About Albert - professional introduction with technician image
2. Services Grid - 6 service cards with blue icons and green "Request Repair" buttons
3. Why Choose Us - 4-column benefits with icons
4. Service Areas - Pretoria map integration
5. Testimonials - 3-column customer reviews
6. Contact Strip - persistent green CTA band

### Services Page
**Service Tiles** (modern card design):
- Blue refrigeration-themed icons
- Service title in Deep Blue
- Description in Dark Grey
- Green "Request Repair" button
- Services: Fridge Repairs, Freezer Repairs, Washing Machine Repairs, Gas Refill & Leak Detection, Cooling System Diagnostics, Commercial Refrigeration

### Gallery Page
- Masonry grid layout showcasing provided repair images
- Blue/white frame styling around images
- Categories: Fridge repairs, Freezer repairs, Washing machine repairs, Commercial units
- All images optimized to WebP format, lazy-loaded

### Contact Page
- 2-column layout: Contact form (left) + Contact info with map (right)
- Prominent display: Phone (079 782 2184), WhatsApp (069 215 9042)
- Green submit button
- Pretoria service area map integration

### Footer
**Centered Layout**:
- Lekker Network logo (clickable to https://lekker.network/)
- "Powered by Lekker Network" text
- 5-column Verified Badge grid with "Lekker Network Verified" (clickable to https://lekker.network/the-lekker-network-verified)
- Standard footer links and copyright

## Component Specifications

### Buttons
- Primary (Green): Eco Green (#28C76F) background, white text, rounded corners, subtle shadow
- When on images: Apply backdrop blur effect
- Include phone and WhatsApp icons where relevant

### Cards (Service/Testimonial)
- White background
- Soft shadow for depth
- Sky Blue accent on hover
- Generous padding (p-6 to p-8)
- Deep Blue headings

### Navigation
- Deep Blue background
- White text
- Fixed/sticky on scroll
- Mobile hamburger menu
- Green CTA button in nav: "Call Now"

## Images
**Hero Section**: Large hero image featuring technician repairing appliances (from provided images)

**Throughout Site**:
- Gallery images: All 9 provided authentic repair photos showing washing machines, air conditioning units, refrigerators, and technicians at work
- About section: Professional technician portrait
- Service sections: Relevant appliance repair images
- All images converted to WebP, ≤150 KB, lazy-loaded
- Alt text format: "Pretoria Fridge Repairs technician [action] in Pretoria"

## Mobile-First Responsive Design
- Single column layouts on mobile
- Stacked CTAs on small screens
- Touch-friendly button sizes (minimum 44px height)
- Simplified navigation
- Optimized image sizes per breakpoint

## Performance & Accessibility
- Target load time: <1.5s
- Core Web Vitals optimized
- Accessible forms with proper labels
- ARIA labels for interactive elements
- High contrast ratios for text

## SEO Elements
- Schema markup: LocalBusiness, Services, Organization, BreadcrumbList, SearchAction
- Area served: Pretoria, Gauteng, South Africa
- Meta title and description with service keywords
- Sitemap.xml at /sitemap.xml
- Robots.txt for crawlers