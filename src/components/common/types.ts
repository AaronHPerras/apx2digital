// Common types for landing page components

export interface ServiceCardData {
  icon: string
  title: string
  description: string
}

export interface PortfolioCardData {
  icon: string
  backgroundColor: string
  title: string
  description: string
  technologies: string[]
}

export interface TechStackData {
  icon: string
  label: string
}

export interface ContactInfoData {
  icon: string
  title: string
  content: React.ReactNode
}

export interface FeatureCardData {
  icon: string
  title: string
  description: string
}

export interface StatisticData {
  number: string
  label: string
}

export interface NavigationItem {
  label: string
  onClick?: () => void
  href?: string
  isLink?: boolean
}

export interface FooterNavigationData {
  title: string
  items: NavigationItem[]
}
