# Architecture Reference — APx2Digital

## Application Type
Single-page marketing website. No backend in this repo. API proxy in vite.config.ts points to
`https://localhost:5001` for local auth development only — production contact is handled by Netlify Forms.

## Component Hierarchy
```
App.tsx
└── ErrorBoundary
    └── BrowserRouter
        └── Routes
            └── LandingPage          ← single real route (/)
                ├── NavigationSection  — fixed nav, scroll-spy activeSection
                ├── HeroSection        — hero + dual CTA
                ├── ServicesSection    — 3 service packages (data.ts)
                ├── AboutSection       — stats + tech stack grid
                ├── ApproachSection    — 4-pillar approach cards
                ├── PortfolioSection   — portfolio cards (data.ts)
                ├── ContactSection     — ContactModal trigger + info
                └── FooterSection      — nav links + legal
```

`ContactModal.tsx` — Bootstrap modal overlay with Netlify Form submission (separate from ContactSection).

## Data Flow
- **Content** → `src/components/common/data.ts` exports arrays (`services`, `portfolioProjects`,
  `heroFeatures`, `techStack`, `statistics`). Sections import and map over these.
- **Navigation state** → `LandingPage` owns `activeSection: Section` state; passes `onNavigate`
  callbacks down to sections that need cross-section scrolling.
- **Auth state** → `AuthContext` (React Context + localStorage). JWT access token + refresh token.
  Auth scaffold is present but the marketing site does not gate any public content.

## SCSS Design System
```
src/styles/
  theme.scss       — SCSS variables ($claret, $jet, etc.) + mixins (mobile-touch-target, etc.)
  base.scss        — CSS custom properties, resets, base element styles
  components.scss  — Shared component classes (cards, buttons, badges)
  main.scss        — Barrel import of all above
  apx2-title.scss  — APx2Digital branded animated title component styles
  scss.d.ts        — TypeScript declarations for SCSS modules
```

Component-level SCSS files live next to their TSX (e.g., `HeroSection.scss`, `LandingPage.scss`).

### Vite CSS Code Splitting (vite.config.ts)
- `cssCodeSplit: true` — CSS is split per chunk.
- Build output: `dist/css/[name]-[hash].css`, `dist/js/[name]-[hash].js`, `dist/images/[name]-[hash].[ext]`
- Target: `es2020`

## Netlify Deployment
- **Host**: Netlify free tier (starter)
- **Build command**: `npm run build` → `dist/` directory
- **Redirects**: `public/_redirects` handles SPA fallback (`/* /index.html 200`)
- **Forms**: `index.html` contains a hidden `<form name="contact" netlify>` for bot detection.
  The real form in `ContactModal.tsx` must use `method="POST"` + matching `name` attribute.
- **Env vars**: Set in Netlify dashboard → Site settings → Environment variables. Not in source.

## Auth Scaffold Details
`AuthContext.tsx` provides:
- `user`, `isAuthenticated`, `login(email, password)`, `logout()`, `refreshToken()`
- Tokens stored in `localStorage` (access) and `sessionStorage` (refresh)
- `ProtectedRoute` component wraps any route that needs auth
- `Dashboard.tsx` is a stub — not linked in current routing

## Service Offerings (business context)
| Service | Price | Timeline |
|---------|-------|----------|
| Website Design & Launch | $3,000 CAD | 1 week |
| SEO & Local Marketing | $1,800 CAD | 8 days |
| No-Code Automation | $100/hr USD | Ongoing |
| Website Care & SEO Maintenance | $250 CAD/month | Monthly |

Target market: Small businesses in Ontario, Canada.

## Routing
Only one real route (`/`). All "navigation" is scroll-based section targeting via `scrollIntoView`.
The `Section` type (`hero | services | about | approach | portfolio | contact`) is used as the
navigation primitive — defined in `src/components/common/types.ts`.
