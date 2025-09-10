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
              Our Services
            </h2>
            <p className="lead text-muted">
              Complete digital solutions designed for growing businesses
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
              <strong>All prices in respective currencies. Monthly maintenance packages available.</strong>
            </p>
            <p className="text-muted small">
              Need a custom solution? We offer flexible engagement models and can tailor our services to your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
