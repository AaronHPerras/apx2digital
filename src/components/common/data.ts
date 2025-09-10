import type { 
  PortfolioCardData, 
  TechStackData, 
  FeatureCardData, 
  StatisticData 
} from './types'
import type { ServicePackageProps } from './ServicePackage'

// Hero section feature cards data
export const heroFeatures: FeatureCardData[] = [
  {
    icon: "⚡",
    title: "Results-Fast Delivery",
    description: "1-week website launches with cutting-edge tools"
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    description: "Responsive design optimized for all devices"
  },
  {
    icon: "🤝",
    title: "True Partnership",
    description: "Transparent pricing and proactive communication"
  },
  {
    icon: "�",
    title: "No-Code Automation",
    description: "Streamline workflows with modern tools"
  }
]

// New service packages data
export const servicePackages: Omit<ServicePackageProps, 'onCtaClick'>[] = [
  {
    title: "Website Design & Launch",
    timeline: "1 Week to Launch",
    price: "$3,000",
    currency: "CAD",
    features: [
      "Mobile-first modern design",
      "Google Review widget integration", 
      "Netlify hosting setup",
      "Domain migration included",
      "Beta testing & launch",
      "API-ready architecture"
    ],
    isPopular: true,
    ctaText: "Start Your Website"
  },
  {
    title: "SEO & Local Marketing",
    timeline: "8 Day Project",
    price: "$1,800",
    currency: "CAD",
    features: [
      "Local SEO optimization",
      "Google Business Profile setup",
      "Service area targeting",
      "Keyword-rich content updates",
      "Technical SEO improvements",
      "Analytics & reporting setup"
    ],
    ctaText: "Boost Your Visibility"
  },
  {
    title: "No-Code Automation",
    timeline: "Flexible Engagement",
    price: "$100",
    currency: "USD",
    features: [
      "Airtable & Notion workflows",
      "Zapier integrations",
      "Custom dashboards",
      "Process automation",
      "Up to 15 hours/week",
      "Business efficiency optimization"
    ],
    ctaText: "Automate Your Business"
  }
]

// Portfolio section data - updated with real projects
export const portfolioProjects: PortfolioCardData[] = [
  {
    icon: "�",
    backgroundColor: "bg-primary",
    title: "Shotover Cleaning Website Modernization",
    description: "Complete site rebuild with mobile-first design, review integration, and Netlify hosting. 1-week launch timeline achieved.",
    technologies: ['React', 'Netlify', 'Bootstrap', 'Review Widget']
  },
  {
    icon: "�",
    backgroundColor: "bg-success",
    title: "Multi-Location SEO Optimization",
    description: "Service area targeting with Google Business Profile management and local keyword optimization for cleaning business.",
    technologies: ['Local SEO', 'GBP', 'Analytics', 'Content Strategy']
  },
  {
    icon: "🔄",
    backgroundColor: "bg-warning",
    title: "Business Process Automation",
    description: "Airtable CRM integration with Zapier workflows for lead management and automated client communication systems.",
    technologies: ['Airtable', 'Zapier', 'Automation', 'CRM Integration']
  }
]

// Technology stack data - updated for current tools
export const techStack: TechStackData[] = [
  { icon: "⚛️", label: "React" },
  { icon: "🟦", label: "TypeScript" },
  { icon: "🥾", label: "Bootstrap" },
  { icon: "⚡", label: "Netlify" },
  { icon: "🔗", label: "Zapier" },
  { icon: "�", label: "Airtable" }
]

// Statistics data - updated with current numbers
export const statistics: StatisticData[] = [
  { number: "1 Week", label: "Average Launch Time" },
  { number: "100%", label: "Mobile-First Design" },
  { number: "24/7", label: "Partnership Support" }
]

// Contact information for forms and display
export const contactInfo = {
  serviceArea: 'Ontario, Canada',
  tagline: 'Website Design | Digital Growth | Results—Fast',
  businessHours: 'Monday - Friday: 9 AM - 6 PM EST'
}
