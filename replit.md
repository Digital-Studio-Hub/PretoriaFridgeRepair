# Pretoria Fridge Repairs

## Overview

Pretoria Fridge Repairs is a professional appliance repair service website built as a marketing and lead generation platform. The site serves as an online presence for a mobile repair business specializing in fridges, freezers, washing machines, and commercial refrigeration in Pretoria, South Africa.

This is a static marketing website with a contact form as the primary conversion mechanism. All inquiries are routed through email via ZeptoMail, with no persistent database storage required for business operations.

The application emphasizes trust, professionalism, and immediate accessibility through prominent call-to-action buttons (phone and WhatsApp) throughout the user experience.

**Primary Contact Number**: 079 782 2184 (used for both Call and WhatsApp)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router alternative. The application uses a single-page application (SPA) pattern with the following routes:
- `/` - Home page
- `/services` - Services listing
- `/about` - About the business/technician
- `/gallery` - Photo gallery of work
- `/contact` - Contact form page

**UI Component Library**: Shadcn UI components built on Radix UI primitives, providing accessible, customizable components following the "New York" style variant. Components are located in `client/src/components/ui/` and include forms, dialogs, cards, buttons, and more.

**Styling**: Tailwind CSS with a custom design system following specific brand guidelines:
- Primary color: Deep Refrigerator Blue (#003B73)
- Accent color: Sky Blue (#6ECFF5)
- CTA color: Eco Green (#28C76F) - exclusively for calls-to-action
- Typography: Poppins/Montserrat for headings, Inter/Nunito for body text
- Custom CSS variables defined in `client/src/index.css` for theme consistency

**State Management**: React Query (TanStack Query) for server state management, primarily used for the contact form submission. Local component state managed with React hooks.

**Layout Pattern**: Consistent layout wrapper (`Layout.tsx`) that includes:
- Sticky header with navigation
- Main content area
- Footer with business information
- Floating CTA buttons (mobile-only, bottom-right)

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development vs Production**:
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves pre-built static files from `dist/public`
- Server entry points: `server/index-dev.ts` and `server/index-prod.ts`

**API Structure**: Minimal REST API with a single endpoint:
- `POST /api/send-mail` - Handles contact form submissions

**Form Validation**: Zod schemas defined in `shared/schema.ts` for type-safe form validation on both client and server. The contact form schema validates:
- Name (minimum 2 characters)
- Email (valid email format)
- Phone (minimum 10 characters)
- Service selection (required)
- Message (minimum 10 characters)

**Error Handling**: Express middleware captures and logs API requests, with response validation on the client side.

### Data Storage

**No Persistent Database**: This application intentionally does not use database storage. The `server/storage.ts` file exists as a placeholder but implements no actual storage operations.

**Rationale**: All website content is static and embedded in the React components. Contact form submissions are immediately sent via email and do not need to be persisted. This architectural decision:
- Reduces infrastructure complexity
- Eliminates database maintenance overhead
- Ensures no user data is stored (privacy benefit)
- Allows for simple, stateless deployment

**Future Consideration**: While Drizzle ORM is configured in the project (`drizzle.config.ts` and `shared/schema.ts`), it's not currently utilized. If future requirements include storing testimonials, service requests, or analytics, PostgreSQL with Drizzle could be added without major architectural changes.

### SEO and Marketing

**SEO Implementation**:
- Comprehensive meta tags in `client/index.html` including Open Graph and Twitter Card data
- Schema.org structured data in `SEOSchema.tsx` for local business markup
- Geographic meta tags for local search optimization
- Semantic HTML throughout the application

**Analytics Readiness**: The site structure supports adding analytics tracking without code changes.

### External Dependencies

**Email Service**: ZeptoMail (transactional email service)
- Used for sending contact form notifications to admin
- Requires `ZEPTOMAIL_TOKEN` environment variable
- Configuration includes sender address and admin recipient
- Sends formatted HTML emails with customer inquiry details

**Font Services**: Google Fonts
- Poppins, Montserrat (headings)
- Inter, Nunito (body text)
- Preconnected in HTML for performance

**Icon Libraries**:
- Lucide React (primary icon set)
- React Icons (specifically for WhatsApp icon via `react-icons/si`)

**Build and Deployment Tools**:
- Vite for development and production builds
- esbuild for server-side bundling
- Replit-specific plugins for development environment integration

**UI Framework Dependencies**:
- Radix UI primitives (20+ component packages)
- Class Variance Authority for component variant management
- Tailwind CSS for utility-first styling
- React Hook Form with Zod resolver for form handling

### Configuration and Environment

**Environment Variables Required**:
- `DATABASE_URL` - Configured for potential future use (currently not utilized)
- `ZEPTOMAIL_TOKEN` - Required for email functionality
- `ZEPTOMAIL_FROM` - Sender email address (defaults to noreply@pretoriafridgerepairs.co.za)
- `ADMIN_EMAIL` - Recipient for form submissions (defaults to solidwendystec@gmail.com)
- `NODE_ENV` - Development/production environment flag

**TypeScript Configuration**: Strict mode enabled with module resolution set to "bundler" for optimal Vite compatibility. Path aliases configured:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

**Asset Management**: Static assets (images, logos, badges) stored in `attached_assets/` directory and imported via Vite's asset handling system.