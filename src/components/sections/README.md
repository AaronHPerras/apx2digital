# Landing Page Sections

This directory contains individual section components that make up the landing page. Each section is self-contained and can be reused across different pages.

## Components

### `NavigationSection`
The main navigation bar with logo, menu items, and auth buttons.
- **Props**: `activeSection`, `onNavigate`
- **Features**: Responsive design, active state indication, Bootstrap collapse

### `HeroSection`
The main hero/banner section with call-to-action.
- **Props**: `onNavigate` (for portfolio navigation)
- **Features**: Feature cards, dual CTA buttons, responsive layout

### `ServicesSection`
Displays the company's service offerings in a grid.
- **Props**: None (fully self-contained)
- **Features**: Service cards, section header, responsive grid

### `AboutSection`
Company information with statistics and technology stack.
- **Props**: None (fully self-contained)
- **Features**: Statistics cards, tech stack items, two-column layout

### `PortfolioSection`
Showcases company portfolio projects.
- **Props**: `onNavigate` (for contact navigation)
- **Features**: Portfolio cards, CTA button, responsive grid

### `ContactSection`
Contact information and call-to-action.
- **Props**: None (fully self-contained)
- **Features**: Contact info items, multiple CTAs, centered layout

### `FooterSection`
Site footer with navigation and company information.
- **Props**: `onNavigate` (for section navigation)
- **Features**: Footer navigation, social links, legal links

## Usage

```tsx
import { HeroSection, ServicesSection } from './sections'

// Use individual sections
<HeroSection onNavigate={handleNavClick} />
<ServicesSection />

// Or import the complete LandingPage
import { LandingPage } from './LandingPage'
```

## Benefits

1. **Modularity**: Each section is independent and reusable
2. **Maintainability**: Easier to modify individual sections
3. **Testing**: Sections can be unit tested in isolation
4. **Code Organization**: Clear separation of concerns
5. **Performance**: Potential for lazy loading sections
6. **Reusability**: Sections can be used on other pages

## Section Interactions

Some sections accept navigation callbacks to enable cross-section navigation:
- `HeroSection` → Portfolio (View Our Work button)
- `PortfolioSection` → Contact (Start Your Project button)
- `FooterSection` → All sections (footer navigation)
- `NavigationSection` → All sections (main navigation)

## File Structure

```
sections/
├── index.ts                 # Barrel exports
├── NavigationSection.tsx    # Main navigation
├── HeroSection.tsx         # Hero/banner section
├── ServicesSection.tsx     # Services grid
├── AboutSection.tsx        # Company info
├── PortfolioSection.tsx    # Portfolio showcase
├── ContactSection.tsx      # Contact information
├── FooterSection.tsx       # Site footer
└── README.md              # This file
```

## Mobile-First Design

All sections follow mobile-first responsive design principles:
- Responsive layouts using Bootstrap grid
- Touch-friendly navigation and buttons
- Optimized typography and spacing
- Progressive enhancement for larger screens
