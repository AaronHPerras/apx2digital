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
    icon: "🚀",
    title: "Rapid MVP Sprints",
    description: "Working solutions in under a week"
  },
  {
    icon: "💡",
    title: "Innovation Jams",
    description: "Collaborative problem-solving sessions"
  },
  {
    icon: "🤖",
    title: "AI-Accelerated",
    description: "Modern tools for speed & creativity"
  },
  {
    icon: "✅",
    title: "Zero Commitment",
    description: "You own what's built, no strings"
  }
]

// New service packages data
export const servicePackages: Omit<ServicePackageProps, 'onCtaClick'>[] = [
  {
    title: "Rapid MVP Sprints",
    timeline: "2-7 Days",
    price: "Custom",
    currency: "",
    features: [
      "You bring the idea, I build",
      "Working solution in under a week",
      "Frequent checkpoints",
      "Test with real users quickly",
      "Full code & asset handoff",
      "Zero ongoing commitments"
    ],
    isPopular: true,
    ctaText: "Start Building"
  },
  {
    title: "Innovation Jams",
    timeline: "Half-Day to 2 Days",
    price: "Custom",
    currency: "",
    features: [
      "Collaborative brainstorming",
      "High-energy problem solving",
      "Tackle real business challenges",
      "Rapid prototyping session",
      "Actionable next steps",
      "Creative breakthrough focus"
    ],
    ctaText: "Book a Jam Session"
  },
  {
    title: "AI-Accelerated Prototyping",
    timeline: "Ongoing Partnership",
    price: "Custom",
    currency: "",
    features: [
      "Leveraging cutting-edge AI tools",
      "Faster delivery, lower costs",
      "Creative solutions at speed",
      "Modern tech stack",
      "Iterative development",
      "You own everything built"
    ],
    ctaText: "Explore AI Solutions"
  }
]

// Portfolio section data - updated with real projects
export const portfolioProjects: PortfolioCardData[] = [
  {
    icon: "💪",
    backgroundColor: "bg-primary",
    title: "Fitness Tracker MVP",
    description: "Idea → working app in 72 hours. Core tracking features, user dashboard, and data visualization.",
    technologies: ['React', 'Firebase', 'Charts', 'Mobile-First']
  },
  {
    icon: "🛍️",
    backgroundColor: "bg-success",
    title: "Workflow Automation for Small Retail",
    description: "Manual task to automated dashboard in a weekend. Inventory tracking, order processing, customer management.",
    technologies: ['Airtable', 'Zapier', 'Custom Dashboard', 'APIs']
  },
  {
    icon: "📊",
    backgroundColor: "bg-warning",
    title: "Custom CRM for Solopreneur",
    description: "Prototype delivered in 5 days. Lead tracking, pipeline management, email integration, and reporting.",
    technologies: ['React', 'TypeScript', 'CRM', 'Email API']
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
