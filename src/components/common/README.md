# Common Components

This directory contains reusable UI components extracted from the landing page to eliminate code duplication and improve maintainability.

## Components

### `ServiceCard`
Displays a service offering with icon, title, and description.
- **Props**: `icon`, `title`, `description`, `className?`
- **Usage**: Service grid layouts

### `PortfolioCard`
Displays a portfolio project with image, title, description, and technology badges.
- **Props**: `icon`, `backgroundColor`, `title`, `description`, `technologies[]`, `className?`
- **Usage**: Project showcases

### `TechStackItem`
Displays a technology with icon and label in a grid layout.
- **Props**: `icon`, `label`, `className?`
- **Usage**: Technology stack displays

### `ContactInfoItem`
Displays contact information with icon, title, and content.
- **Props**: `icon`, `title`, `content` (ReactNode), `className?`
- **Usage**: Contact sections

### `FeatureCard`
Displays a feature highlight with icon, title, and description.
- **Props**: `icon`, `title`, `description`, `className?`
- **Usage**: Feature grids, benefit listings

### `StatisticCard`
Displays a statistic with number and label.
- **Props**: `number`, `label`, `className?`
- **Usage**: Statistics displays, metrics

### `FooterNavigation`
Displays a footer navigation section with title and clickable/linked items.
- **Props**: `title`, `items[]`, `className?`
- **Usage**: Footer organization

### `SectionHeader`
Displays a centered section header with title and subtitle.
- **Props**: `title`, `subtitle`, `className?`, `titleClassName?`, `subtitleClassName?`
- **Usage**: Section introductions

## Data & Types

### `types.ts`
Contains TypeScript interfaces for all component props and data structures.

### `data.ts`
Contains pre-configured data arrays for landing page content:
- `heroFeatures[]` - Hero section feature cards
- `services[]` - Service offerings
- `portfolioProjects[]` - Portfolio projects
- `techStack[]` - Technology stack items
- `statistics[]` - Company statistics

## Usage

```tsx
import { 
  ServiceCard, 
  SectionHeader, 
  services 
} from './common'

// Using individual components
<ServiceCard 
  icon="🌐"
  title="SaaS Development"
  description="Custom SaaS platforms..."
/>

// Using with pre-configured data
{services.map((service, index) => (
  <ServiceCard 
    key={index}
    icon={service.icon}
    title={service.title}
    description={service.description}
  />
))}
```

## Benefits

1. **Code Reusability**: Components can be used across different pages
2. **Consistency**: Standardized styling and behavior
3. **Maintainability**: Single source of truth for component logic
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Data Management**: Centralized content management
6. **Flexibility**: Customizable through props and className overrides

## Mobile-First Design

All components follow mobile-first responsive design principles:
- Touch-friendly sizing (minimum 44px targets)
- Responsive grid layouts using Bootstrap
- Progressive enhancement for larger screens
- Optimized typography and spacing
