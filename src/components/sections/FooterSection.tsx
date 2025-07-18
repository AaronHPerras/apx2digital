import React from 'react'
import { FooterNavigation } from '../common'

type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

interface FooterSectionProps {
  onNavigate: (section: Section) => void
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-dark text-white py-4 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h5 className="fw-bold text-warning mb-3">APX2Digital</h5>
            <p className="text-light mb-3">
              Transforming businesses with modern web solutions. 
              From SaaS platforms to e-commerce, we build for growth.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-warning text-decoration-none">
                <i className="fs-5">📧</i>
              </a>
              <a href="#" className="text-warning text-decoration-none">
                <i className="fs-5">💼</i>
              </a>
              <a href="#" className="text-warning text-decoration-none">
                <i className="fs-5">🐙</i>
              </a>
            </div>
          </div>
          
          <FooterNavigation 
            title="Services"
            items={[
              { label: 'SaaS Development', onClick: () => onNavigate('services') },
              { label: 'E-commerce Solutions', onClick: () => onNavigate('services') },
              { label: 'API Development', onClick: () => onNavigate('services') },
              { label: 'Cloud Deployment', onClick: () => onNavigate('services') }
            ]}
          />
          
          <FooterNavigation 
            title="Company"
            items={[
              { label: 'About Us', onClick: () => onNavigate('about') },
              { label: 'Portfolio', onClick: () => onNavigate('portfolio') },
              { label: 'Contact', onClick: () => onNavigate('contact') },
              { label: 'Get Started', href: '/register', isLink: true }
            ]}
          />
          
          <FooterNavigation 
            title="Contact Info"
            items={[
              { label: '📧 hello@apx2digital.com', href: 'mailto:hello@apx2digital.com', isLink: true },
              { label: '📞 +1 (555) 123-4567', href: 'tel:+15551234567', isLink: true },
              { label: '🌐 apx2digital.com' },
              { label: '📍 Remote & On-site' }
            ]}
          />
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-0 text-light">
              © 2025 APX2Digital. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-light text-decoration-none small">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none small">Terms of Service</a>
              <a href="#" className="text-light text-decoration-none small">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
