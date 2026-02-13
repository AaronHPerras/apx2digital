# Copilot Instruc### Mobile-First Design Principles

#### Core Mobile-First Rules
- **Start with mobile layouts**: Design for 320px width minimum, then scale up
- **Touch targets**: All interactive elements must be at least 44px in size
- **Content hierarchy**: Prioritize essential content for small screens
- **Progressive enhancement**: Add features for larger screens, never remove for smaller ones
- **Thumb-friendly navigation**: Place primary actions within easy thumb reach
- **Readable typography**: Use minimum 16px font size to prevent mobile zoom

#### Bootstrap Mobile-First Implementation
- **Grid system**: Always start with `col-*` (mobile), then add `col-md-*`, `col-lg-*`, etc.
- **Spacing utilities**: Use responsive spacing classes: `mb-3 mb-md-4 mb-lg-5`
- **Display utilities**: Control element visibility: `d-none d-md-block`
- **Text alignment**: Use responsive text utilities: `text-center text-md-start`
- **Flex utilities**: Responsive flex direction: `d-flex flex-column flex-md-row`

#### Mobile-First Media Queries
```scss
// Mobile first - start with base styles (no media query needed)
.component {
  padding: 1rem;
  
  // Tablet and up
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  // Desktop and up
  @media (min-width: 1200px) {
    padding: 3rem;
  }
}
```

### Architecture Guidelinesions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

APX2Digital is a modern, full-stack web application starter template with production-ready features:

- **Frontend**: React 19 + Vite + TypeScript + Bootstrap 5.3
- **Backend**: .NET 8 Web API + Entity Framework Core + SQL Server
- **Authentication**: JWT-based with refresh token support and ASP.NET Identity
- **State Management**: React Context API with custom hooks
- **API Communication**: Axios with automatic token refresh interceptors
- **Testing**: Vitest + React Testing Library (frontend), xUnit (backend)
- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Development**: Hot reload, proxy configuration, environment variables

## Architecture Guidelines

### Frontend (React + TypeScript + Vite)

#### Component Architecture
- Use functional components with hooks exclusively
- **Mobile-First Components**: Design components to work well on mobile screens first
- Implement proper TypeScript interfaces for all props, state, and API responses
- Follow component composition patterns and avoid prop drilling
- Use React.memo() for performance optimization when appropriate
- Implement proper error boundaries for robust error handling
- **Touch-Friendly UI**: Ensure interactive elements have appropriate touch targets (minimum 44px)

#### Modular Component Structure
- **Common Components**: Reusable UI components in `src/components/common/`
  - Extract repeated patterns into shareable components
  - Use consistent prop interfaces across similar components
  - Implement barrel exports (`index.ts`) for clean imports
  - Include TypeScript interfaces in `types.ts` and data in `data.ts`
- **Section Components**: Page sections in `src/components/sections/`
  - Break large pages into focused section components
  - Use prop-based navigation with `onNavigate` callbacks
  - Keep sections self-contained but allow cross-section communication
  - Support conditional rendering for single-page applications
- **Component Organization**: 
  - Use PascalCase for component files
  - Group related components by functionality
  - Implement comprehensive documentation in README files
  - Follow single responsibility principle for component design

#### Form Management
- Use React Hook Form for all form validation and submission
- **Mobile-First Forms**: Design forms with mobile usability in mind (proper input types, validation messages)
- Implement proper form validation with TypeScript schemas
- Use controlled components with proper value/onChange patterns
- Handle form errors gracefully with user-friendly messages
- **Touch Optimization**: Use appropriate input types for mobile keyboards (email, tel, number, etc.)

#### Styling & UI
- **Mobile-First Approach**: Always design and build for mobile devices first, then enhance for larger screens
- Follow Bootstrap 5.3 utility classes and component patterns with mobile-first breakpoints
- **Modern Sass**: Use `@use` and `@forward` instead of deprecated `@import`
- Use Bootstrap's responsive grid system starting with base (mobile) styles: `col-12 col-md-6 col-lg-4`
- **Bootstrap JavaScript**: Import and use Bootstrap JS components for interactive elements:
  - Import specific components: `import { Modal, Dropdown, Tooltip, Popover, Collapse, Carousel } from 'bootstrap'`
  - Initialize components programmatically when needed: `new Modal(element)`, `new Tooltip(element)`
  - Use data attributes for simple interactions: `data-bs-toggle`, `data-bs-target`, `data-bs-dismiss`
  - Prefer React state management over Bootstrap JS for complex interactions
  - For modals, dropdowns, and toggles, consider React-controlled alternatives when state synchronization is needed
- Use custom SCSS files in `src/` for component-specific styles with mobile-first media queries
- **Responsive Design**: Start with mobile layouts and progressively enhance for tablets and desktop
- Implement proper loading states and skeleton screens that work well on small screens
- Use Bootstrap icons or similar icon libraries with appropriate sizing for mobile touch targets

#### State Management
- Use React Context API for global state (auth, theme, etc.)
- Implement custom hooks for specific state logic
- Use localStorage for persistent client-side data
- Avoid unnecessary re-renders with proper dependency arrays

#### Performance
- Implement lazy loading with React.lazy() and Suspense
- Use proper code splitting strategies
- Optimize bundle size with tree shaking
- Implement proper memoization where needed
- **Mobile Performance**: Optimize for slower network connections and lower-powered devices
- Consider viewport-based lazy loading for images and heavy components

### Backend (.NET 8 Web API)

#### API Architecture
- Follow RESTful API conventions with proper HTTP status codes
- Use async/await patterns consistently
- Implement proper exception handling middleware
- Use dependency injection for all services
- Follow repository pattern for data access

#### Authentication & Security
- JWT tokens with ASP.NET Identity integration
- Implement refresh token rotation for security
- Use proper password hashing with Identity framework
- Store sensitive configuration in appsettings (dev) or environment variables (prod)
- Implement proper CORS configuration for frontend

#### Database & Entity Framework
- Use Entity Framework Core with migrations
- Implement proper relationships and navigation properties
- Use parameterized queries to prevent SQL injection
- Follow Code First approach with proper model configurations
- Implement proper database seeding for development

#### Error Handling
- Implement global exception handling middleware
- Use proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Return consistent API response format
- Log errors appropriately with structured logging

#### Testing
- Write unit tests for all business logic and services
- Use meaningful test names following arrange-act-assert pattern
- Mock external dependencies properly
- Implement integration tests for API endpoints
- Maintain good test coverage

### Project Structure

#### Frontend Structure
```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── common/         # Shared/reusable UI components
│   │   ├── ServiceCard.tsx      # Service display component
│   │   ├── PortfolioCard.tsx    # Portfolio project component
│   │   ├── TechStackItem.tsx    # Technology stack component
│   │   ├── ContactInfoItem.tsx  # Contact information component
│   │   ├── FeatureCard.tsx      # Feature highlight component
│   │   ├── StatisticCard.tsx    # Statistics display component
│   │   ├── FooterNavigation.tsx # Footer navigation component
│   │   ├── SectionHeader.tsx    # Section heading component
│   │   ├── types.ts             # Common component interfaces
│   │   ├── data.ts              # Component data/content
│   │   └── index.ts             # Barrel exports
│   └── sections/       # Page section components
│       ├── NavigationSection.tsx # Main navigation bar
│       ├── HeroSection.tsx      # Hero/banner section
│       ├── ServicesSection.tsx  # Services grid section
│       ├── AboutSection.tsx     # Company info section
│       ├── PortfolioSection.tsx # Portfolio showcase section
│       ├── ContactSection.tsx   # Contact information section
│       ├── FooterSection.tsx    # Site footer section
│       └── index.ts             # Barrel exports
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── services/           # API service layer
├── types/              # TypeScript type definitions
├── test/               # Test utilities and setup
└── assets/             # Static assets
```

#### Backend Structure
```
backend/WebAppApi/
├── Controllers/        # API controllers
├── Data/              # DbContext and migrations
├── DTOs/              # Data transfer objects
├── Models/            # Entity models
├── Services/          # Business logic services
└── Properties/        # Launch settings
```

### Development Workflow

#### Environment Setup
- Frontend runs on port 5000 with Vite dev server
- Backend runs on https://localhost:5001 (HTTPS) and http://localhost:5002 (HTTP)
- Use proxy configuration in vite.config.ts for API calls
- Database connection string in appsettings.Development.json

#### Common Commands
- `npm run dev` - Start frontend development server
- `dotnet run` - Start backend API (from backend/WebAppApi)
- `npm run build` - Build frontend for production
- `dotnet build` - Build backend
- `npm test` - Run frontend tests
- `dotnet test` - Run backend tests

### Security Best Practices

#### Authentication Flow
- Login returns access token (1 hour) and refresh token (7 days)
- Frontend stores tokens in localStorage
- Axios interceptors handle automatic token refresh
- Logout revokes refresh tokens on server

#### Data Protection
- Never expose sensitive data in client-side code
- Validate all input on both client and server
- Use HTTPS in production
- Implement proper rate limiting for authentication endpoints
- Use secure JWT signing algorithms (HMAC SHA256)

### Code Quality Standards

#### TypeScript
- Use strict mode with all linting rules enabled
- Define proper interfaces for all API responses
- Avoid `any` type - use proper typing
- Use meaningful variable and function names
- Implement proper error handling with try-catch blocks

#### C# (.NET)
- Follow C# naming conventions (PascalCase for public members)
- Use proper async/await patterns
- Implement comprehensive logging
- Use dependency injection for all services
- Follow SOLID principles

#### Testing
- Write tests for all business logic
- Use descriptive test names that explain behavior
- Mock external dependencies (database, HTTP calls)
- Test both success and error scenarios
- Maintain good test coverage (aim for 80%+)

### API Integration

#### Client-Server Communication
- All API calls go through centralized apiClient service
- Implement proper error handling for network failures
- Use TypeScript interfaces for request/response objects
- Handle loading states in UI components
- Implement proper timeout handling

#### Error Handling
- Backend returns consistent ApiResponse<T> format
- Frontend handles errors with user-friendly messages
- Network errors show appropriate fallback UI
- Authentication errors redirect to login page
- Validation errors display field-specific messages

### Performance Guidelines

#### Frontend Optimization
- Use React.memo() for expensive components
- Implement proper dependency arrays in useEffect
- Use lazy loading for routes and heavy components
- Optimize images and assets
- Implement proper caching strategies
- **Mobile-First Performance**: Prioritize fast loading on mobile networks
- Use responsive images with appropriate sizes for different screen densities
- Minimize initial bundle size for faster mobile loading

#### Backend Optimization
- Use async/await for all database operations
- Implement proper database indexing
- Use Entity Framework change tracking efficiently
- Implement response caching where appropriate
- Optimize database queries with proper includes

### Deployment Considerations

#### Frontend Deployment
- Build with `npm run build` for production
- Serve static files from dist/ folder
- Configure proper environment variables
- Implement proper routing for SPA

#### Backend Deployment
- Use production connection strings
- Enable HTTPS and proper CORS
- Configure proper logging levels
- Use production JWT settings with secure keys
- Implement health checks

### Common Patterns

#### Component Import Pattern
```typescript
// Import common reusable components
import { ServiceCard, PortfolioCard, SectionHeader } from '../common'

// Import section components
import { HeroSection, ServicesSection, FooterSection } from '../sections'

// Use barrel exports for clean imports
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  ContactSection,
  FooterSection,
  NavigationSection
} from './sections'
```

#### Section Navigation Pattern
```typescript
type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  
  const handleNavClick = (section: Section) => {
    setActiveSection(section)
  }
  
  return (
    <>
      <NavigationSection 
        activeSection={activeSection}
        onNavigate={handleNavClick}
      />
      {activeSection === 'hero' && <HeroSection onNavigate={handleNavClick} />}
      {activeSection === 'services' && <ServicesSection />}
      <FooterSection onNavigate={handleNavClick} />
    </>
  )
}
```

#### Reusable Component Pattern
```typescript
// Define props interface
interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

// Component with proper typing
export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 text-center">
        {/* Component content */}
      </div>
    </div>
  )
}
```

#### Bootstrap JS Integration Pattern
```typescript
import { Modal, Tooltip } from 'bootstrap'
import { useEffect, useRef } from 'react'

// For modals
const MyModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const modalInstance = useRef<Modal | null>(null)
  
  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current)
    }
    return () => modalInstance.current?.dispose()
  }, [])
  
  const showModal = () => modalInstance.current?.show()
  const hideModal = () => modalInstance.current?.hide()
}

// For tooltips
const TooltipComponent = () => {
  const tooltipRef = useRef<HTMLButtonElement>(null)
  
  useEffect(() => {
    let tooltip: Tooltip | null = null
    if (tooltipRef.current) {
      tooltip = new Tooltip(tooltipRef.current)
    }
    return () => tooltip?.dispose()
  }, [])
}
```

#### Error Handling Pattern
```typescript
try {
  const result = await apiCall()
  // Handle success
} catch (error) {
  // Handle error with user feedback
}
```

#### Authentication Hook Pattern
```typescript
const { user, isAuthenticated, login, logout } = useAuth()
```

#### API Service Pattern
```typescript
export class SomeService {
  async getData(): Promise<ApiResponse<Data>> {
    return apiClient.get<Data>('/endpoint')
  }
}
```

### DRY Principles (Don't Repeat Yourself)

#### Code Reusability
- **Extract Common Logic**: Move repeated code into reusable functions, hooks, or components
- **Shared Components**: Create components in `src/components/common/` for UI patterns used 2+ times
- **Custom Hooks**: Extract stateful logic into custom hooks (useAuth, useApi, useForm)
- **Utility Functions**: Place shared utilities in dedicated files (formatters, validators, helpers)
- **Constants & Configuration**: Store magic numbers, strings, and config in constant files
- **Type Definitions**: Share TypeScript interfaces/types across files via `types.ts` files

#### Component Composition
- **Composition over Duplication**: Build complex components from smaller reusable ones
- **Props for Customization**: Use props to make components flexible instead of duplicating
- **Render Props & Children**: Use children and render props patterns for flexible composition
- **Higher-Order Components**: Use sparingly - prefer hooks for shared logic

#### Style Management
- **SCSS Variables**: Define colors, spacing, and breakpoints once in theme files
- **SCSS Mixins**: Create mixins for repeated style patterns (mobile-touch-target, card-hover)
- **Bootstrap Utilities**: Use Bootstrap utility classes instead of custom CSS when possible
- **CSS Modules**: Scope styles to prevent global conflicts and accidental duplication

#### API & Services
- **Centralized API Client**: Single axios instance with interceptors (no duplicate fetch logic)
- **Service Layer**: Group related API calls in service classes/modules
- **Error Handling**: Centralized error handling logic, not per-component
- **Type Sharing**: Share request/response types between frontend and backend

#### Configuration Management
- **Environment Variables**: Use .env files, never hardcode URLs or secrets
- **Single Source of Truth**: One place for API endpoints, feature flags, constants
- **Theme Configuration**: Single Bootstrap configuration using `@use...with()` syntax

#### Testing
- **Test Utilities**: Shared test helpers, mocks, and fixtures
- **Setup Files**: Common test setup in dedicated files, not per test file
- **Mock Factories**: Reusable factory functions for test data

### Code Organization Rules

#### File Naming
- Use PascalCase for React components
- Use camelCase for utility functions and hooks
- Use kebab-case for asset files
- Use descriptive names that explain purpose

#### Import Organization
- External libraries first
- Internal modules second
- Relative imports last
- Use absolute imports for src/ folder

#### Component Organization
- Keep components focused and single-purpose
- Extract complex logic into custom hooks
- Use proper TypeScript props interfaces
- Implement proper default props where needed
- **Common Components**: Extract repeated UI patterns into `src/components/common/`
  - Create reusable components for repeated visual elements
  - Include TypeScript interfaces in `types.ts` files
  - Use barrel exports for clean importing
  - Document components with README files
- **Section Components**: Organize page sections in `src/components/sections/`
  - Break large pages into focused section components
  - Use prop-based navigation callbacks for section communication
  - Keep sections self-contained but allow cross-section interaction
  - Support conditional rendering for single-page applications

### Accessibility (a11y) Guidelines

#### Core Principles
- **Semantic HTML**: Use proper HTML5 elements (header, nav, main, footer, article, section)
- **ARIA Labels**: Add aria-label, aria-labelledby, aria-describedby where needed
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Focus Management**: Visible focus indicators, logical tab order
- **Color Contrast**: Minimum 4.5:1 ratio for text, 3:1 for large text (WCAG AA)

#### Implementation
- **Alt Text**: All images must have meaningful alt text
- **Form Labels**: Every input must have an associated label element
- **Button vs Link**: Use `<button>` for actions, `<a>` for navigation
- **Skip Links**: Implement skip-to-content links for keyboard users
- **Screen Reader Testing**: Test with NVDA (Windows) or VoiceOver (Mac)
- **Responsive Touch Targets**: Minimum 44px × 44px for mobile (already in guidelines)

#### Bootstrap Accessibility
- Use Bootstrap's built-in accessibility features:
  - `sr-only` class for screen reader only text
  - Proper modal focus management
  - ARIA attributes on dropdowns, tabs, accordions
  - Form validation with proper ARIA error messages

### Security & Dependency Management

#### Dependency Updates
- **Regular Audits**: Run `npm audit` and `dotnet list package --vulnerable` regularly
- **Fix Vulnerabilities**: Address security issues immediately with `npm audit fix`
- **Keep Dependencies Updated**: Update packages monthly, test thoroughly
- **Dependabot**: Use GitHub Dependabot for automated security updates
- **Lock Files**: Commit package-lock.json and package-lock.json for reproducible builds

#### Security Scanning
- **Pre-commit Hooks**: Run security checks before committing
- **CI/CD Pipeline**: Automated security scanning in build pipeline
- **SAST Tools**: Static analysis security testing for code vulnerabilities
- **Secrets Detection**: Never commit API keys, tokens, or passwords

#### Secure Coding Practices
- **Input Validation**: Validate all user input on both client and server
- **Output Encoding**: Encode data before rendering to prevent XSS
- **SQL Injection Prevention**: Use parameterized queries (EF Core handles this)
- **CSRF Protection**: Implement anti-forgery tokens for state-changing operations
- **Content Security Policy**: Set proper CSP headers in production

### Git Workflow & Code Review

#### Branch Strategy
- **main**: Production-ready code only
- **develop**: Integration branch for features
- **feature/***: Feature branches from develop
- **hotfix/***: Emergency fixes from main
- **release/***: Release preparation branches

#### Commit Standards
- **Conventional Commits**: Use format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore
  - Example: `feat(auth): add refresh token rotation`
- **Meaningful Messages**: Explain why, not just what
- **Atomic Commits**: One logical change per commit
- **Reference Issues**: Include issue numbers: `fixes #123`

#### Code Review Checklist
- **Functionality**: Code works as intended, edge cases handled
- **Tests**: New code has appropriate test coverage
- **DRY**: No unnecessary duplication
- **Performance**: No obvious performance issues
- **Security**: No security vulnerabilities introduced
- **Accessibility**: Meets a11y standards
- **Documentation**: Code is self-documenting or has comments
- **Style**: Follows project conventions, passes linter
- **Mobile-First**: Responsive design implemented correctly

#### Pull Request Guidelines
- **Small PRs**: Keep changes focused and reviewable (< 400 lines when possible)
- **Description**: Explain what, why, and how
- **Screenshots**: Include for UI changes
- **Testing Notes**: Describe how to test changes
- **Breaking Changes**: Clearly document any breaking changes

### Modern Sass (@use syntax)

#### Migration from @import
- **Use @use instead of @import**: Modern module system with proper scoping
- **Configure with `with()`**: Pass variables when importing Bootstrap
- **Namespace**: Use `as *` to avoid prefixing or `as name` for explicit namespace
- **Forward**: Use `@forward` to re-export modules

#### Bootstrap 5.3 Configuration
```scss
// Correct way to configure Bootstrap 5.3+
@use "sass:color";
@use './theme' as *;

@use "bootstrap/scss/bootstrap" with (
  $primary: $claret,
  $secondary: $dim-gray,
  // ... other overrides
);
```

#### Avoid Deprecated Patterns
- ❌ `@import "bootstrap/scss/bootstrap";`
- ✅ `@use "bootstrap/scss/bootstrap" with ($primary: $claret);`
- ❌ Global color functions: `red()`, `green()`, `blue()`
- ✅ Namespaced functions: `color.channel($color, "red")`
- ❌ Global `mix()`, `lighten()`, `darken()`
- ✅ `color.mix()`, `color.adjust()`, `color.scale()`

### Environment & Configuration Management

#### Environment Variables
- **Never commit secrets**: Use .env files, add to .gitignore
- **Multiple environments**: .env.development, .env.production, .env.test
- **Validation**: Validate required env vars on app startup
- **Type Safety**: Use TypeScript to type environment variables
- **Documentation**: Document all required env vars in README

#### Configuration Files
- **Frontend**: vite.config.ts for build settings
- **Backend**: appsettings.json hierarchy (base → Development/Production)
- **Database**: Connection strings in environment-specific config
- **Feature Flags**: Use config for toggling features without code changes
