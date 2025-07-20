# APX2Digital Theme & Build System

## Overview

This project uses a sophisticated **mobile-first** design system with **Vite CSS code splitting** for optimal performance and maintainability.

## Theme System

### Color Palette
- **Jet** (`#2a2b2a`) - Primary dark color
- **Dim Gray** (`#706c61`) - Secondary/muted elements  
- **Cosmic Latte** (`#f8f4e3`) - Light backgrounds
- **Claret** (`#6c0f26`) - Brand accent color
- **Misty Rose** (`#ffe0d6`) - Subtle accents

### Architecture

```
src/styles/
├── theme.scss          # SCSS variables, mixins, functions
├── base.scss           # Base styles and CSS custom properties  
├── components.scss     # Component-specific styles
├── main.scss           # Main entry point (imports all)
├── apx2-title.scss     # APx2 Digital branded title components
└── scss.d.ts           # TypeScript declarations
```

## Vite Configuration

### CSS Code Splitting Features
- **Automatic splitting** by file type (CSS, images, JS)
- **SCSS preprocessing** with theme injection
- **Source maps** for development
- **Asset optimization** with hashed filenames
- **Modern ES2020 target** for optimal bundles

### Build Output Structure
```
dist/
├── css/
│   ├── main-[hash].css
│   ├── components-[hash].css
│   └── landing-[hash].css
├── js/
│   ├── index-[hash].js
│   └── vendor-[hash].js
└── images/
    └── [name]-[hash].[ext]
```

## Mobile-First Design

### Responsive Breakpoints
- **Mobile**: 320px - 767px (base styles)
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

### Touch-Friendly Features
- **44px minimum** touch targets
- **16px base font** (prevents mobile zoom)
- **Optimized animations** for mobile performance
- **Accessibility support** (reduced motion, high contrast)

## Usage Examples

### Using Theme Variables (SCSS)
```scss
.custom-component {
  background: $cosmic-latte;
  color: $jet;
  border: 1px solid $dim-gray;
  @include mobile-touch-target;
  
  &:hover {
    background: $misty-rose;
    border-color: $claret;
  }
}
```

### Using CSS Custom Properties
```css
.custom-element {
  background: var(--bg-light);
  color: var(--text-primary);
  padding: var(--spacing-md);
  transition: var(--transition-base);
}
```

### Component Import Pattern
```tsx
// Import section components
import { HeroSection, ServicesSection } from './sections'

// Import SCSS for component
import './ComponentName.scss'
```

## Development Scripts

```bash
# Development with hot reload
npm run dev

# Production build with CSS splitting
npm run build

# Build analysis
npm run build:analyze

# Style checking
npm run style:check

# Manual SCSS compilation
npm run style:build
```

## Performance Features

### CSS Optimization
- **Tree shaking** removes unused styles
- **Code splitting** loads only needed CSS
- **Compression** in production builds
- **Caching** with content hashes

### Mobile Performance
- **Minimal animations** on mobile
- **Efficient transitions** using transforms
- **Progressive enhancement** for larger screens
- **Respect user preferences** (reduced motion, high contrast)

## File Organization

### Component Styles
Each major component has its own SCSS file:
- `LandingPage.scss` - Landing page specific styles
- `NavigationSection.scss` - Navigation styles
- `HeroSection.scss` - Hero section styles

### Global Styles
- `theme.scss` - Variables and mixins
- `base.scss` - Reset and base elements
- `components.scss` - Reusable component classes

## Accessibility Features

- **High contrast mode** support
- **Reduced motion** preferences respected
- **Focus indicators** with proper contrast
- **Screen reader** friendly markup
- **Touch accessibility** with proper target sizes

## Integration Notes

### Bootstrap Integration
The theme system works alongside Bootstrap 5.2:
- Custom variables override Bootstrap defaults
- Component styles enhance Bootstrap components
- Mobile-first approach aligns with Bootstrap

### TypeScript Support
- SCSS modules have proper TypeScript declarations
- Theme variables are type-safe
- Component props use proper interfaces

## Build Optimization

### CSS Code Splitting Benefits
1. **Faster initial load** - Only critical CSS loads first
2. **Better caching** - CSS changes don't invalidate JS cache
3. **Smaller bundles** - Component CSS loads on demand
4. **Development speed** - Hot reload for style changes only

### Production Optimizations
- CSS minification and compression
- Asset fingerprinting for cache busting
- Tree shaking removes unused code
- Modern ES syntax for smaller bundles

## Theme Customization

To customize the theme:

1. **Update variables** in `src/styles/theme.scss`
2. **Modify CSS properties** in `src/styles/base.scss`
3. **Add component styles** in `src/styles/components.scss`
4. **Run build** to see changes: `npm run build`

The build system automatically handles optimization, code splitting, and mobile-first responsive design.
