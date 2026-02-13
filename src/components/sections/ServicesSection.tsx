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
              What I Do
            </h2>
            <p className="lead text-muted">
              I specialize in solving problems that usually show up when:
            </p>
            <ul className="list-unstyled text-muted text-start mx-auto" style={{maxWidth: '600px'}}>
              <li className="mb-2">• Integrations start failing silently</li>
              <li className="mb-2">• Data stops syncing reliably between platforms</li>
              <li className="mb-2">• Automation logic grows fragile or unpredictable</li>
              <li className="mb-2">• AI workflows produce inconsistent or unsafe outputs</li>
              <li className="mb-2">• Low-code builds hit technical limits</li>
              <li className="mb-2">• Teams need custom logic layered into existing systems</li>
            </ul>
            <p className="text-muted mt-4">
              I'm typically brought in when projects are already underway and complexity begins to surface.
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
              <strong>Most engagements fall into three models:</strong>
            </p>
            <ul className="list-unstyled text-muted mx-auto" style={{maxWidth: '500px'}}>
              <li className="mb-2">• Escalation support for agency projects</li>
              <li className="mb-2">• Short-term integration or reliability projects</li>
              <li className="mb-2">• Ongoing advisory and system maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
