# Özel Boğaziçi İlgi Koleji Çekmeköy - School Website

## Overview

This is a premium private school website for "Özel Boğaziçi İlgi Koleji Çekmeköy" - a Turkish K-8 educational institution. The site serves as the school's primary online presence, featuring information about academic programs (preschool, elementary, middle school), campus facilities, registration forms, news/announcements, and contact functionality.

The project is a full-stack TypeScript application with a React frontend and Express backend, designed to be modern, fast, and mobile-first with a luxury/high-end aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript (Vite as build tool)
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: TailwindCSS v4 with custom theme variables for brand colors (blue, green, orange, yellow)
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for micro-animations and page transitions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (transpiled with TSX for development, esbuild for production)
- **API Pattern**: RESTful JSON API under `/api/*` routes
- **Static Serving**: Production builds serve the Vite-compiled frontend from `dist/public`

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Tables**: 
  - `users` - Basic user authentication
  - `pre_registrations` - Student enrollment inquiry forms
  - `contact_submissions` - Contact form submissions

### Content Management
- **Approach**: Static content stored in TypeScript files (`lib/page-content.ts`, `lib/mock-news.ts`, `lib/constants.ts`)
- **Rationale**: Avoids complex CMS while keeping content easily editable by developers

### Build System
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: Custom build script (`script/build.ts`) that:
  1. Builds frontend with Vite
  2. Bundles server with esbuild (with selective dependency bundling for faster cold starts)

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Database
- PostgreSQL (connection via `DATABASE_URL` environment variable)
- `pg` package for connection pooling
- `drizzle-kit` for schema migrations (`npm run db:push`)

### UI/Component Libraries
- Radix UI (full primitive suite for accessible components)
- Lucide React (icon library)
- shadcn/ui conventions (components in `client/src/components/ui/`)

### Frontend Libraries
- TanStack React Query (data fetching/caching)
- Framer Motion (animations)
- React Hook Form + Zod (form handling)
- date-fns (date formatting)
- cmdk (command menu)
- embla-carousel-react (carousels)

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` - Error overlay in development
- `@replit/vite-plugin-cartographer` - Development tooling (dev only)
- `@replit/vite-plugin-dev-banner` - Development banner (dev only)

### Fonts
- Google Fonts: Montserrat (600,700,800 weights for display headings) and Poppins (400,500,600,700 weights for body text)
- Loaded via `<link>` tags in `client/index.html` with `display=swap`

## Performance Optimizations

### Code Splitting
- All non-home pages use React.lazy() for route-based code splitting
- Home page remains eagerly loaded for fastest initial render
- Suspense fallback provides a minimal spinner during lazy loads

### Image Loading
- Hero first slide: preloaded in index.html with `fetchpriority="high"`
- Hero subsequent slides: preloaded via JS after 2s idle
- All other images: `loading="lazy"` and `decoding="async"`
- Video thumbnails: Use `hqdefault.jpg` instead of `maxresdefault.jpg` for smaller size
- CSS `content-visibility: auto` on img/video elements

### External Resources
- DNS prefetch for youtube and google map domains
- Google Fonts reduced to only used weights (was loading ALL 100-900)
- External texture pattern replaced with CSS gradient (PageHeader)
- Google Maps iframe loaded via IntersectionObserver with 200px rootMargin

### Critical Resources
- Logo and hero image preloaded in HTML head
- Navbar logo uses `loading="eager"` with `fetchPriority="high"`

## Email Notifications (SMTP)

### Configuration
- **Provider**: Custom SMTP via `mail.toov.com.tr` (SSL, port 465)
- **From**: `no-reply@toov.com.tr`
- **Admin**: `info@ozelilgiokullari.k12.tr`
- **Secrets**: `SMTP_PASSWORD` (stored as Replit secret)
- **Env Vars**: `SMTP_HOST`, `SMTP_USER`, `SMTP_PORT`, `ADMIN_EMAIL`

### Behavior
- Pre-registration form: sends confirmation to parent + notification to admin
- Contact form: sends confirmation to sender + notification to admin
- Fire-and-forget pattern: emails sent asynchronously, don't block form response
- Email failures logged but don't affect form submission success
- Professional HTML email templates with school branding