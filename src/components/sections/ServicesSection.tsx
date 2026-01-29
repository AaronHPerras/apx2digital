import React from 'react'
import { ServicePackage } from '../common'
import { servicePackages } from '../common/data'

export interface ServicesSectionProps {
  onServiceSelect?: (serviceType: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onServiceSelect
}) => {
  const handleServiceClick = (serviceTitle: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceTitle.toLowerCase())
    } else {
      // Default behavior - scroll to contact form
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              🚀 What I Offer
            </h2>
            <p className="lead text-muted">
              From concept to working MVP—in days, not months
            </p>
          </div>
        </div>
        
        <div className="row">
          {servicePackages.map((service, index) => (
            <ServicePackage 
              key={index} 
              {...service} 
              onCtaClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted mb-3">
              <strong>Let's start with a free brainstorm call—no commitment required.</strong>
            </p>
            <p className="text-muted small">
              Every project is unique. Pricing is based on scope and complexity. Let's discuss your needs!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
