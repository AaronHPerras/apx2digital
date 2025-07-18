# Components Directory

This directory contains all React components organized by purpose and reusability.

## Structure

```
components/
├── auth/           # Authentication-related components
├── common/         # Reusable UI components (extracted from landing page)
├── sections/       # Landing page section components
└── README.md      # This file
```

## Directory Purposes

### `auth/`
Contains authentication-related components like login forms, registration forms, and protected routes.

### `common/`
Contains reusable UI components that were extracted from the landing page to eliminate code duplication. These components can be used across different pages and sections.

**Available Components:**
- ServiceCard - For displaying service offerings
- PortfolioCard - For showcasing portfolio projects  
- TechStackItem - For technology stack display
- ContactInfoItem - For contact information display
- FeatureCard - For feature highlights
- StatisticCard - For displaying statistics
- FooterNavigation - For footer navigation links
- SectionHeader - For consistent section headings

### `sections/`
Contains individual section components that make up the landing page. Each section is self-contained and can be reused across different pages.

**Available Sections:**
- NavigationSection - Main navigation bar
- HeroSection - Hero/banner section with CTAs
- ServicesSection - Services grid display
- AboutSection - Company info with statistics
- PortfolioSection - Portfolio showcase
- ContactSection - Contact information
- FooterSection - Site footer

## Usage

Import components using barrel exports:

```tsx
// Common reusable components
import { ServiceCard, PortfolioCard, SectionHeader } from '../common'

// Section components  
import { HeroSection, ServicesSection, FooterSection } from '../sections'

// Authentication components
import { LoginForm, ProtectedRoute } from '../auth'
```

## Architecture Benefits

1. **Code Reusability**: Components can be used across multiple pages
2. **Consistency**: Standardized look and feel
3. **Maintainability**: Changes to a component affect all instances
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Mobile-First**: All components follow responsive design principles
6. **Modularity**: Clear separation between reusable UI elements and page sections
7. **Scalability**: Easy to add new components or sections
