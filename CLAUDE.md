# APx2Digital — Claude Context

## Repo Overview
- **Stack**: React 19 + TypeScript + Vite 6, Bootstrap 5.3, SCSS design system
- **Routing**: React Router 7 (single-page, hash-scroll navigation on landing page)
- **Forms**: React Hook Form + Yup validation
- **Testing**: Vitest + React Testing Library (`jsdom` environment)
- **Deploy**: Netlify (static), Netlify Forms for contact submissions
- **Auth**: AuthContext + JWT scaffold present but site is primarily a marketing site

## Build & Run Commands
```bash
npm run dev          # dev server on http://localhost:5000
npm run build        # tsc -b && vite build (production)
npm run preview      # preview production build locally
npm test             # vitest (watch mode)
npm run lint         # eslint
npm run format       # prettier --write src/**
npm run build:analyze  # bundle analysis
```

> Proxy: `/api` → `https://localhost:5001` (vite.config.ts)

## Component Structure (always-relevant)
```
src/
  components/
    common/       # Reusable UI atoms — ServiceCard, PortfolioCard, SectionHeader, etc.
    sections/     # Landing page sections — HeroSection, ServicesSection, ContactSection, etc.
    auth/         # JWT login/register scaffold
  context/        # AuthContext (React Context + localStorage)
  styles/         # SCSS design system (theme.scss, base.scss, components.scss)
  test/           # setup.ts — mocks fetch, localStorage, sessionStorage
```

**Data lives in** `src/components/common/data.ts` — edit here to update site content.

## Key Coding Conventions

### TypeScript
- Every component must have a named `interface` for its props — no inline object types.
- Export types from `src/components/common/types.ts`; import with named imports.
- No `any`. Use `unknown` and narrow, or define a proper interface.

### Imports
- Use barrel exports: `import { X, Y } from '../common'` — never deep-import within common/.
- Same for sections: `import { HeroSection } from '../sections'`.

### Route Splitting (bundle size)
- Every top-level route component **must** be lazy-loaded with `React.lazy()`. Wrap the route tree in a single `<Suspense>` with a blank fallback — no spinner libraries.
- The `<Suspense>` lives in `AppRoutes` (or wherever `<Routes>` is defined), not scattered per-route.

```tsx
// WRONG — static import bloats the initial bundle
import { Dashboard } from './components/Dashboard'
<Route path="/dashboard" element={<Dashboard />} />

// RIGHT — lazy import creates a separate chunk
const Dashboard = lazy(() =>
  import('./components/Dashboard').then((m) => ({ default: m.Dashboard }))
)
// single Suspense wrapping the whole Routes tree
<Suspense fallback={<div className="min-vh-100" />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Suspense>
```

- Run `npm run build` after adding a route and confirm no JS chunk exceeds 500 kB. If one does, check for a shared dependency being duplicated before reaching for `manualChunks`.

### SCSS / Styling
- **Never use inline `style={}`** except for truly dynamic computed values (e.g., a hex color from data).
- Theme tokens live in `src/styles/theme.scss` — use `$claret`, `$jet`, etc. Never hard-code hex.
- Brand colors: Claret `#6c0f26` · Jet `#2a2b2a` · Dim Gray `#706c61` · Cosmic Latte `#f8f4e3` · Misty Rose `#ffe0d6`

### Mobile-First (non-negotiable)
- All touch targets ≥ 44px.
- Typography base ≥ 16px (prevents iOS zoom on focus).
- Grid pattern: `col-12 col-md-6 col-lg-4` — never desktop-first.

### Forms
- Use React Hook Form + Yup. Never manage form state with raw `useState`.
- Wrap resolver: `resolver: yupResolver(schema)` on `useForm`.

### Netlify Forms
- Hidden form in `index.html` must mirror every field in `ContactModal.tsx` — keep in sync.
- `data-netlify="true"` and `name="contact"` are required on the real form element.

## What Requires a Test
- Every new `common/` component (render + props contract)
- All form validation paths (valid submit, required-field errors, format errors)
- AuthContext state transitions (login, logout, token refresh)
- Any utility function in `src/utils/` (if created)
- Sections do **not** need tests unless they contain business logic

## Security
- Never commit `.env` files. Use `.env.local` (gitignored) for local secrets.
- JWT secret and API keys go in Netlify environment variables — never in source.
- All user-supplied strings rendered via React JSX (safe by default); flag any `dangerouslySetInnerHTML`.

## Versioning
| Change | Bump |
|--------|------|
| New section / feature | minor `1.x.0` |
| Bug fix / content update | patch `1.0.x` |
| Breaking restructure | major `x.0.0` |

Bump command: edit `version` in `package.json` manually — no release script yet.

## Model Selection
- **Haiku 4.5** (`claude-haiku-4-5-20251001`) — read-only exploration, quick lookups, formatting-only edits
- **Sonnet 4.6** (`claude-sonnet-4-6`) — default for feature work, bug fixes, writing tests
- **Opus 4.7** (`claude-opus-4-7`) — complex architectural decisions, multi-file refactors, security review

## Session Management
- Run `/summarize-reset` when switching to a new feature or a different area of the codebase.
- For PR reviews, use `/ultrareview` (runs cloud-side, does not consume local session context). Avoid `/review` or `/code-review` on branches with many changed files.

## Reference Files
Read these only when the task requires that domain — do NOT @-import them:

- docs/claude/architecture.md  — component hierarchy, data flow, SCSS system, Netlify deployment
- docs/claude/testing.md       — Vitest/RTL setup, mock patterns, test examples
- docs/claude/tech-debt.md     — known issues, incomplete features, future work
