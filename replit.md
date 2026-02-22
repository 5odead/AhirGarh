# Ahirgarh - Community Heritage Portal

## Overview

Ahirgarh ("The Fort of the Ahirs") is a premium community wiki and heritage portal for the Ahir/Yadav community of India. It's a **static React website** — all data is hardcoded on the client side with no backend API requirements. The project serves as a digital encyclopedia covering community history, gotras (clan lineages), notable personalities, villages, culture, and a notice board.

Despite having an Express server scaffold in place, the server exists solely to serve the built static files and handle SPA routing in production. There is no database, no authentication, and no backend API logic needed.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Uses `wouter` (lightweight alternative to React Router) for client-side routing
- **State Management**: React Context API for theme (dark/light), language (English/Hindi), and search modal state
- **Animations**: Framer Motion for page transitions and scroll-based animations
- **Search**: Fuse.js for client-side fuzzy search across articles, gotras, personalities, and villages
- **Styling**: Tailwind CSS with CSS variables for a custom Ahirgarh color theme (saffron primary, maroon secondary, gold accent). Uses shadcn/ui component library (new-york style)
- **Fonts**: Inter (body), Playfair Display (headings), Noto Sans Devanagari (Hindi text)
- **Build Tool**: Vite

### Key Frontend Patterns
- All data lives in `client/src/data/` as static TypeScript arrays (articles, gotras, personalities, villages, timeline, notices, translations)
- Pages follow a list/detail pattern: listing pages with search/filter → detail pages with back navigation
- Global search modal triggered by Cmd+K keyboard shortcut
- Bilingual support (English/Hindi) via LanguageContext with a translations file
- Dark/light theme toggle persisted to localStorage
- Glass-morphism UI style (`glass` and `glass-card` CSS classes)

### Server Architecture
- **Runtime**: Node.js with Express 5
- **Purpose**: Development server (Vite middleware) and production static file server only
- **No API routes**: The `server/routes.ts` registers no endpoints
- **No database**: `server/db.ts` and `shared/schema.ts` are empty stubs
- **No storage**: `server/storage.ts` has an empty MemStorage class

### Build Pipeline
- **Development**: `tsx server/index.ts` runs the Express server with Vite middleware for HMR
- **Production Build**: Custom `script/build.ts` that runs Vite build for the client and esbuild for the server, outputting to `dist/`
- **Database**: Drizzle ORM config exists pointing to PostgreSQL (`DATABASE_URL`), but the schema is empty. If database features are added later, use `npm run db:push` to sync schema

### Directory Structure
```
client/               # Frontend React application
  src/
    components/       # UI components (layout, ui from shadcn)
    context/          # ThemeContext, LanguageContext, SearchContext
    data/             # All static data files (articles, gotras, etc.)
    hooks/            # Custom hooks (use-mobile, use-toast)
    lib/              # Utilities (cn helper, queryClient)
    pages/            # All route page components
server/               # Express server (static serving only)
shared/               # Shared types/schema (currently empty stubs)
migrations/           # Drizzle migration output directory
attached_assets/      # Project requirements/specs
```

### Route Map
| Path | Page | Description |
|------|------|-------------|
| `/` | HomePage | Hero, stats, featured articles, bento grid |
| `/wiki` | WikiPage | Article listing with category filter and search |
| `/wiki/:slug` | ArticlePage | Full article with reading progress bar |
| `/gotras` | GotrasPage | Gotra directory with region filter |
| `/gotras/:id` | GotraDetailPage | Individual gotra details |
| `/personalities` | PersonalitiesPage | Notable people grid with category filter |
| `/personalities/:id` | PersonalityDetailPage | Individual person profile |
| `/villages` | VillagesPage | Village directory with state filter |
| `/villages/:id` | VillageDetailPage | Individual village details |
| `/history` | HistoryPage | Interactive timeline of community history |
| `/culture` | CulturePage | Cultural traditions with image gallery |
| `/notice-board` | NoticeBoardPage | Community notices with category sidebar |
| `/about` | AboutPage | About info and FAQs |

## External Dependencies

### Core Libraries
- **React 18** + **TypeScript** — UI framework
- **wouter** — Lightweight client-side routing
- **Framer Motion** — Animations and page transitions
- **Fuse.js** — Client-side fuzzy search
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** (Radix UI primitives) — Accessible component library
- **@tanstack/react-query** — Available but minimally used (no API calls)
- **Lucide React** — Icon library

### Server Libraries (minimal use)
- **Express 5** — HTTP server for serving static files
- **Vite** — Dev server with HMR
- **esbuild** — Server bundle for production
- **Drizzle ORM** + **drizzle-kit** — Database toolkit (configured but unused)
- **connect-pg-simple** — Session store (available but unused)

### External Services
- **Google Fonts** — Inter, Playfair Display, Noto Sans Devanagari, Geist Mono, Fira Code, DM Sans, Architects Daughter
- **Unsplash** — All images loaded from `images.unsplash.com` URLs (no local assets)
- **PostgreSQL** — Configured via `DATABASE_URL` environment variable but not actively used; schema is empty