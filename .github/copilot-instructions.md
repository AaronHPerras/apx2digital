# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

APX2Digital is a minimal single-page marketing/consulting site for an automation & AI consulting business.

- **Frontend**: React 19 + Vite + TypeScript — **no Bootstrap, no CSS framework**
- **Styling**: Inline styles with CSS custom properties in `src/index.css`. No SCSS, no utility classes.
- **Hosting**: Netlify (static site, free tier)
- **Forms**: Netlify Forms — contact form POSTs to `/` with `application/x-www-form-urlencoded`. Bot detection form in `index.html`, honeypot field in modal.
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + TypeScript strict mode

## Site Structure

One page, no routing beyond the 404 fallback:

```
src/
├── components/
│   ├── LandingPage.tsx     # Single-page layout (header, hero, value cards, CTA, footer)
│   └── ContactModal.tsx    # Modal contact form (Netlify Forms submission)
├── components/common/
│   └── ErrorBoundary.tsx   # Used in App.tsx
├── App.tsx                 # Router + ErrorBoundary shell only
├── index.css               # Minimal base reset + CSS custom properties
└── main.tsx
```

The old `sections/`, auth components, and Bootstrap-era common components still exist in the repo but are **not imported or used**. Do not re-introduce them.

## Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--red` | `#7b1225` | Primary accent, CTA buttons, card top borders, links |
| `--grey` | `#3a3a3a` | Headings, body text |
| `--grey-light` | `#6b6b6b` | Secondary text, subtitles |
| `--grey-bg` | `#f5f5f5` | Card section background |
| `--white` | `#ffffff` | Page background |

No gradients, no heavy shadows. Cards use a `3px solid var(--red)` top border.

## Design Principles

- **Clean and minimal**: White background, dark red + dark grey accents only.
- **No CSS framework**: Use inline styles in components (typed as `Record<string, React.CSSProperties>`).
- **Mobile-first**: Use `clamp()` for fluid type, `auto-fit` grid for cards, `padding` on containers.
- **Touch targets**: All buttons minimum 44–48px height.
- **Focus on conversion**: Every section drives toward the contact modal CTA.

## Netlify Forms Integration

The contact form (`ContactModal.tsx`) submits via fetch POST to `/` with `Content-Type: application/x-www-form-urlencoded`.

Required pieces (both must exist):
1. **`index.html`**: Hidden static form with `data-netlify="true"` and `name="contact"` so Netlify's build bot registers it.
2. **`ContactModal.tsx`**: React form with `data-netlify="true"`, hidden `<input name="form-name" value="contact" />`, and honeypot field.

Never remove either of these — Netlify requires both to detect and process submissions.

## Common Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (`tsc -b && vite build`)
- `npm test` — Run Vitest tests

## Content Focus

The site targets businesses looking for:
- **Process automation** — custom workflows, eliminating manual work
- **AI consulting** — honest assessment of where AI fits (or does not)
- **Time savings** — measurable ROI from automation

Keep copy direct, honest, and jargon-light. No hype.
