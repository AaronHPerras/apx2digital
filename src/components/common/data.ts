import type { 
  ServiceCardData, 
  PortfolioCardData, 
  TechStackData, 
  FeatureCardData, 
  StatisticData 
} from './types'

// Hero section feature cards data
export const heroFeatures: FeatureCardData[] = [
  {
    icon: "⚡",
    title: "Fast Development",
    description: "Rapid prototyping & deployment"
  },
  {
    icon: "🚀",
    title: "Scalable Solutions",
    description: "Built for growth & performance"
  },
  {
    icon: "🛡️",
    title: "Secure & Reliable",
    description: "Enterprise-grade security"
  },
  {
    icon: "📱",
    title: "Mobile-First",
    description: "Responsive on all devices"
  }
]

// Services section data
export const services: ServiceCardData[] = [
  {
    icon: "🌐",
    title: "SaaS Development",
    description: "Custom SaaS platforms with subscription management, user dashboards, and scalable architecture."
  },
  {
    icon: "🛒",
    title: "E-commerce Solutions",
    description: "Modern online stores with payment integration, inventory management, and conversion optimization."
  },
  {
    icon: "📊",
    title: "Business Applications",
    description: "Custom web applications to streamline operations, manage data, and boost productivity."
  },
  {
    icon: "🔗",
    title: "API Development",
    description: "RESTful APIs and microservices for seamless integration and data exchange."
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    description: "Scalable cloud hosting, DevOps setup, and continuous deployment pipelines."
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly."
  }
]

// Portfolio section data
export const portfolioProjects: PortfolioCardData[] = [
  {
    icon: "🛍️",
    backgroundColor: "bg-primary",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
    technologies: ['React', '.NET', 'SQL Server']
  },
  {
    icon: "📊",
    backgroundColor: "bg-success",
    title: "SaaS Analytics Platform",
    description: "Data visualization platform with real-time charts, custom dashboards, and team collaboration.",
    technologies: ['TypeScript', 'Azure', 'PostgreSQL']
  },
  {
    icon: "🏢",
    backgroundColor: "bg-warning",
    title: "Business Management System",
    description: "Complete business management solution with CRM, project tracking, and financial reporting.",
    technologies: ['React', 'API', 'Docker']
  }
]

// Technology stack data
export const techStack: TechStackData[] = [
  { icon: "⚛️", label: "React" },
  { icon: "🟦", label: "TypeScript" },
  { icon: "🔷", label: ".NET" },
  { icon: "🐘", label: "PostgreSQL" },
  { icon: "☁️", label: "Azure" },
  { icon: "🐳", label: "Docker" }
]

// Statistics data
export const statistics: StatisticData[] = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" }
]
