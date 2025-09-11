import { type FC } from 'react'
import { PortfolioCard, SectionHeader, Button, SectionWrapper } from '../common'

interface PortfolioSectionProps {
  onNavigate?: (section: 'contact') => void
}

export const PortfolioSection: FC<PortfolioSectionProps> = ({ onNavigate }) => {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate('contact')
    } else {
      // Default behavior - scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  return (
    <SectionWrapper id="portfolio" className="py-5 py-lg-6 bg-light">
      <SectionHeader 
        title="Our Portfolio"
        subtitle="Recent projects showcasing our expertise in modern web development"
      />
      
      <div className="row g-4">
          <PortfolioCard 
            icon="🛍️"
            backgroundColor="bg-primary"
            title="E-commerce Platform"
            description="Modern e-commerce solution with real-time inventory, payment processing, and analytics dashboard."
            technologies={['React', '.NET', 'SQL Server']}
          />
          <PortfolioCard 
            icon="📊"
            backgroundColor="bg-success"
            title="SaaS Analytics Platform"
            description="Data visualization platform with real-time charts, custom dashboards, and team collaboration."
            technologies={['TypeScript', 'Azure', 'PostgreSQL']}
          />
          <PortfolioCard 
            icon="🏢"
            backgroundColor="bg-warning"
            title="Business Management System"
            description="Complete business management solution with CRM, project tracking, and financial reporting."
            technologies={['React', 'API', 'Docker']}
          />
        </div>
        
        <div className="text-center mt-5">
          <Button
            onClick={handleNavigate}
            label="Start Your Project"
            variant="cta"
            className="btn-lg px-5 py-3"
          />
        </div>
    </SectionWrapper>
  )
}
