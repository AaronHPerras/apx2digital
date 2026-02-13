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
          title="Example Engagements"
          subtitle="Real problems solved for real clients"
        />
        
        <div className="row g-4 mb-5">
          <PortfolioCard 
            icon="🔄"
            backgroundColor="bg-primary"
            title="Multi-Platform CRM Synchronization"
            description="Designed and stabilized a multi-platform CRM synchronization workflow that prevented silent data loss and enabled safe reprocessing of failed records."
            technologies={['Zapier', 'HubSpot', 'Salesforce', 'Error Recovery']}
          />
          <PortfolioCard 
            icon="🛡️"
            backgroundColor="bg-success"
            title="AI Workflow Safety Layer"
            description="Built validation and safety rails for AI-powered content workflows, preventing inconsistent outputs and ensuring brand compliance across automated communications."
            technologies={['OpenAI API', 'Make.com', 'Custom Logic', 'Error Handling']}
          />
          <PortfolioCard 
            icon="🔧"
            backgroundColor="bg-warning"
            title="Integration Debugging & Rescue"
            description="Diagnosed and fixed silent failures in complex automation workflows, implementing proper error logging and recovery mechanisms for long-term reliability."
            technologies={['Airtable', 'API Integration', 'Debugging', 'Monitoring']}
          />
        </div>
        
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="text-muted mb-0">
                <em>Case studies shown are simplified examples. Full details available upon request for qualified projects.</em>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <Button
            onClick={() => onNavigate('contact')}
            label="Discuss Your Challenge"
            variant="cta"
            className="btn-lg px-5 py-3"
          />
        </div>
      </div>
    </section>
  )
}
