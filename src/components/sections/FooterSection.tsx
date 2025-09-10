import React from 'react'
import { FooterNavigation } from '../common'
import { contactInfo } from '../common/data'

type Section = 'hero' | 'services' | 'about' | 'approach' | 'portfolio' | 'contact'

interface FooterSectionProps {
  onNavigate?: (section: Section) => void
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  const handleNavigate = (section: Section) => {
    if (onNavigate) {
      onNavigate(section)
    } else {
      // Default behavior - scroll to section
      const targetSection = document.getElementById(section)
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-dark text-white py-4 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h5 className="fw-bold text-warning mb-3">APx2Digital</h5>
            <p className="text-light mb-3">
              {contactInfo.tagline}
            </p>
            <p className="text-light small mb-3">
              We're committed to transparent pricing, clear communication, and delivering results that drive your business forward.
            </p>
          </div>
          
          <FooterNavigation 
            title="Services"
            items={[
              { label: 'Website Design & Launch', onClick: () => handleNavigate('services') },
              { label: 'SEO & Local Marketing', onClick: () => handleNavigate('services') },
              { label: 'No-Code Automation', onClick: () => handleNavigate('services') },
              { label: 'Monthly Maintenance', onClick: () => handleNavigate('services') }
            ]}
          />
          
          <FooterNavigation 
            title="Company"
            items={[
              { label: 'Our Approach', onClick: () => handleNavigate('about') },
              { label: 'Portfolio', onClick: () => handleNavigate('portfolio') },
              { label: 'Get Started', onClick: () => handleNavigate('contact') }
            ]}
          />
          
          <FooterNavigation 
            title="Service Area"
            items={[
              { label: `� ${contactInfo.serviceArea}` },
              { label: '� 1-Week Launch Timeline' },
              { label: '📱 Mobile-First Design' },
              { label: '🤝 Partnership Approach' }
            ]}
          />
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-0 text-light">
              © 2025 APx2Digital. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-light text-decoration-none small">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none small">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
