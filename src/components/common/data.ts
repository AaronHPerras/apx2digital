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
    icon: "🔧",
    title: "Integration Reliability",
    description: "Fix silent failures and data sync issues"
  },
  {
    icon: "🛡️",
    title: "Edge Case Handling",
    description: "Prepare for messy real-world data"
  },
  {
    icon: "🔄",
    title: "Workflow Hardening",
    description: "Make automation dependable and recoverable"
  },
  {
    icon: "🎯",
    title: "Technical Escalation",
    description: "When projects hit complexity limits"
  }
]

// Service specializations data
export const servicePackages: Omit<ServicePackageProps, 'onCtaClick'>[] = [
  {
    title: "Workflow Automation Architecture",
    timeline: "Project-Based",
    price: "Custom",
    currency: "USD",
    features: [
      "Design reliable automation systems",
      "Anticipate and handle failure points",
      "Build for messy real-world data",
      "Make workflows observable and recoverable",
      "Scale beyond low-code defaults"
    ],
    isPopular: true,
    ctaText: "Discuss Your Workflow"
  },
  {
    title: "Integration & Reliability",
    timeline: "Project-Based",
    price: "Custom",
    currency: "USD",
    features: [
      "Fix silent integration failures",
      "Stabilize data synchronization",
      "CRM and multi-platform sync",
      "Prevent data loss scenarios",
      "Safe reprocessing of failed records"
    ],
    ctaText: "Fix Integration Issues"
  },
  {
    title: "AI Workflow Design",
    timeline: "Project-Based",
    price: "Custom",
    currency: "USD",
    features: [
      "AI-assisted automation workflows",
      "Prevent inconsistent outputs",
      "Build safety rails for AI systems",
      "Custom scripting for complex logic",
      "Platform extensions and debugging"
    ],
    ctaText: "Harden AI Workflows"
  }
]

// Portfolio section data - case studies
export const portfolioProjects: PortfolioCardData[] = [
  {
    icon: "🔄",
    backgroundColor: "bg-primary",
    title: "Multi-Platform CRM Synchronization",
    description: "Designed and stabilized a multi-platform CRM synchronization workflow that prevented silent data loss and enabled safe reprocessing of failed records.",
    technologies: ['Zapier', 'HubSpot', 'Salesforce', 'Error Recovery']
  },
  {
    icon: "🛡️",
    backgroundColor: "bg-success",
    title: "AI Workflow Safety Layer",
    description: "Built validation and safety rails for AI-powered content workflows, preventing inconsistent outputs and ensuring brand compliance across automated communications.",
    technologies: ['OpenAI API', 'Make.com', 'Custom Logic', 'Error Handling']
  },
  {
    icon: "🔧",
    backgroundColor: "bg-warning",
    title: "Integration Debugging & Rescue",
    description: "Diagnosed and fixed silent failures in complex automation workflows, implementing proper error logging and recovery mechanisms for long-term reliability.",
    technologies: ['Airtable', 'API Integration', 'Debugging', 'Monitoring']
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
