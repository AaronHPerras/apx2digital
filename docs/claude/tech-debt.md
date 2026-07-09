# Tech Debt & Known Issues — APx2Digital

## Active Debt

### Email / Form Submission Not Wired
- `ContactForm.tsx` and `ContactModal.tsx` have form UI + Netlify Form markup but no
  client-side submission handler beyond a placeholder.
- **Options**: Netlify Forms (simplest), EmailJS (no backend), or a lightweight API route.
- **Impact**: Contact submissions silently fail in production without Netlify Forms config confirmed.

### Auth Scaffold Is Unused in Production
- `AuthContext`, `LoginForm`, `RegisterForm`, `ProtectedRoute`, `Dashboard` are fully built
  but not linked from any public route.
- JWT auth was scaffolded from a template — no real API backend exists in this repo.
- **Decision needed**: Remove auth scaffold if this stays a marketing-only site, or wire it
  to a real backend if a client portal is planned.

### No Versioning / Release Script
- `package.json` version is manually bumped. No changelog, no `npm version` hooks, no git tags.
- Low priority until the project has regular deployments with meaningful version history.

### Test Coverage Is Minimal
- Only `LoginForm.test.tsx` exists. All `common/` components and all section components are untested.
- No coverage enforcement in CI.

### Dashboard.tsx Is a Stub
- `src/components/Dashboard.tsx` renders a placeholder. It's imported nowhere in the current routing.
- Either build it out or delete to avoid confusion.

### Hardcoded Service Pricing in data.ts
- Pricing strings (`"$3,000 CAD"`, `"$1,800 CAD"`) are hardcoded in `data.ts`.
- If pricing changes, it must be updated manually across multiple data array entries.
- Low risk now; consider a constants file if prices appear in 3+ places.

### README.md Is Template Boilerplate
- `README.md` is the original WebAppTemplate README — references .NET backend, `dotnet run`,
  SQL Server, etc. None of this applies to the actual project.
- Should be replaced with accurate APx2Digital-specific docs.

### Bootstrap Icons Loaded via CDN
- `index.html` loads Bootstrap Icons from `cdn.jsdelivr.net` at runtime.
- Adds a render-blocking external request.
- Better: `npm install bootstrap-icons` and import only what's needed.

## Future Work (Planned, Not Started)
- [ ] Google Reviews widget integration (mentioned in client proposals)
- [ ] Portfolio "before/after" case study detail pages
- [ ] Testimonials section with real client feedback
- [ ] LocalBusiness + ServiceArea schema markup for SEO
- [ ] Location landing pages for Ontario service areas (Shotover SEO work)
- [ ] CRM / lead tracking integration for form submissions
- [ ] Google Analytics / conversion tracking
