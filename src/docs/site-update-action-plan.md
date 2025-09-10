# APX2Digital Site Update Action Plan

## Overview
Update the APX2Digital site to better reflect current service offerings based on real client proposals: website design, SEO/local marketing, and no-code automation services.

## Phase 1: Content Strategy & Structure Update

### 1.1 Update Hero Section
- **Current**: Generic web development messaging
- **New**: Position as "Tech Solutions & Digital Growth Partner"
- **Key messaging**: 
  - "Website Design | No-Code Automation | SEO & Local Marketing"
  - "Results-Fast Solutions for Growing Businesses"
  - Emphasize speed, AI-powered tools, and partnership approach

### 1.2 Restructure Services Section
Replace current services with three core offerings:

**Service 1: Website Design & Launch**
- Mobile-first modern websites
- Netlify hosting setup
- Google Review widget integration
- 1-week launch timeline
- Starting at $3,000 CAD

**Service 2: SEO & Local Marketing**
- Local SEO optimization
- Google Business Profile management
- Service area targeting
- Content optimization
- $1,800 CAD packages

**Service 3: No-Code Automation & Tech Solutions**
- Airtable, Notion, Zapier integrations
- Custom workflows and dashboards
- Business process automation
- Flexible hourly engagement ($100/hour USD)

### 1.3 Add New Sections

**"Our Approach" Section**
- Mobile-First Design
- API-Ready & Future-Proofed
- Partnership-Focused
- Transparent Pricing

**"Why APx2 Digital?" Section**
- Peace of mind
- True partnership
- No surprises
- Results-fast delivery

## Phase 2: Portfolio & Case Studies

### 2.1 Update Portfolio Cards
- **Website Projects**: Show before/after of site modernization
- **SEO Results**: Local ranking improvements, GBP optimization
- **Automation Projects**: Workflow diagrams, time-saved metrics
- **Tech Integrations**: Dashboard screenshots, process flows

### 2.2 Add Testimonials Section
- Client feedback on speed of delivery
- Results achieved (ranking improvements, time saved)
- Partnership experience testimonials

## Phase 3: Contact & CTA Updates

### 3.1 Replace Contact Information with Intake Form
- **Remove**: Direct email/phone contact
- **Add**: Professional intake form using React Hook Form
- **Fields**: Name, email, phone, project type, budget range, timeline, description
- **Validation**: Proper form validation with user-friendly messages
- **Mobile-First**: Touch-optimized form design

### 3.2 Modernize CTAs
- "Ready to Get Started?" → "Get Your Free Consultation"
- "Contact us at [email]" → "Start Your Project"
- Add urgency: "1-Week Launch Timeline Available"

## Phase 4: Technical Implementation

### 4.1 Install React Hook Form
```bash
npm install react-hook-form @hookform/resolvers yup
```

### 4.2 Create New Components
- ServicePackage component with pricing tiers
- ContactForm component with React Hook Form
- ApproachSection component
- Update existing sections to reflect new messaging

### 4.3 Form Implementation
- Use React Hook Form with Yup validation
- Mobile-first form design with Bootstrap classes
- Proper error handling and user feedback
- Form submission to backend API or email service

## Phase 5: Content Updates

### 5.1 Update Data Files
- Contact info with form instead of direct contact
- Portfolio items reflecting real projects
- Service packages with actual pricing
- Approach messaging from proposals

### 5.2 Messaging Updates
- Hero section copy reflecting current services
- Service descriptions from actual proposals
- Client-focused value propositions

## Phase 6: Navigation & Footer Updates

### 6.1 Update Navigation Items
- Services → "Website Design | SEO | Automation"  
- About → "Our Approach"
- Portfolio → "Case Studies"
- Contact → "Get Started"

### 6.2 Footer Content
- Add tagline: "Website Design | Digital Growth | Results—Fast"
- Remove direct contact info
- Add service area mention (Ontario, Canada)

## Implementation Priority

1. **Week 1**: Install React Hook Form, create intake form, update Hero and Services sections
2. **Week 2**: Implement ServicePackage components and new portfolio items
3. **Week 3**: Add ApproachSection, update navigation and footer
4. **Week 4**: Testing, mobile optimization, and final adjustments

## Mobile-First Requirements
- All forms must be touch-friendly with 44px minimum touch targets
- Start with mobile layouts (320px width minimum)
- Use Bootstrap responsive classes: `col-12 col-md-6 col-lg-4`
- Implement proper form validation with mobile-friendly error messages
- Ensure readable typography (minimum 16px font size)
- Progressive enhancement for larger screens

## Technical Standards
- Follow copilot-instructions.md for architecture
- Use TypeScript interfaces for all components
- Implement proper error boundaries
- Use React Hook Form native tools and validation
- Follow Bootstrap 5.2 mobile-first patterns
- Implement barrel exports for clean imports
