import React from 'react'
import { PortfolioCard, SectionHeader, Button } from '../common'

interface PortfolioSectionProps {
  onNavigate: (section: 'contact') => void
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
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
            onClick={() => onNavigate('contact')}
            label="Start Your Project"
            variant="cta"
            className="btn-lg px-5 py-3"
          />
        </div>
      </div>
    </section>
  )
}
