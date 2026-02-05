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
- Google Fonts: Montserrat (display headings) and Poppins (body text)
- Loaded via `<link>` tags in `client/index.html`