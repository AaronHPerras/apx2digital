import React from 'react'
import { FooterNavigation } from '../common'

type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

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
              Workflow automation and integration specialist
            </p>
            <p className="text-light small mb-3">
              I help automation agencies and growing businesses solve the integration, reliability, and edge-case problems that appear when complexity surfaces.
            </p>
          </div>
          
          <FooterNavigation 
            title="Specializations"
            items={[
              { label: 'Workflow Automation', onClick: () => handleNavigate('services') },
              { label: 'Integration & Reliability', onClick: () => handleNavigate('services') },
              { label: 'AI Workflow Design', onClick: () => handleNavigate('services') },
              { label: 'Debugging & Rescue', onClick: () => handleNavigate('services') }
            ]}
          />
          
          <FooterNavigation 
            title="Resources"
            items={[
              { label: 'Who I Work With', onClick: () => handleNavigate('about') },
              { label: 'Case Studies', onClick: () => handleNavigate('portfolio') },
              { label: 'Get In Touch', onClick: () => handleNavigate('contact') }
            ]}
          />
          
          <FooterNavigation 
            title="Approach"
            items={[
              { label: '🔧 Fix Silent Failures' },
              { label: '🛡️ Handle Edge Cases' },
              { label: '🔄 Ensure Reliability' },
              { label: '🎯 Technical Escalation' }
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
