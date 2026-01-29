import React from 'react'
import { FeatureCard, Button } from '../common'
import { heroFeatures } from '../common/data'

interface HeroSectionProps {
  onNavigate?: (section: 'services' | 'contact') => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleNavigate = (section: 'services' | 'contact') => {
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
    <section className="bg-light text-dark py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-4 text-dark">
              APx2 Digital —
              <span className="text-primary"> Innovation Partner</span>
            </h1>
            <p className="lead mb-4 fs-5 text-secondary">
              Turn Ideas + Pain Points into Testable MVPs, Fast
            </p>
            <p className="mb-4 text-muted">
              Are you a founder, creator, or small business owner with a big idea or a nagging workflow problem?<br />
              I'm here to help you go <strong>from concept to working MVP</strong>—in days, not months.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                onClick={() => handleNavigate('contact')}
                label="Book a Free Call"
                variant="secondary"
                className="btn-lg px-4 py-3"
              />
              <Button
                onClick={() => handleNavigate('services')}
                label="What I Offer"
                variant="secondary"
                className="btn-lg px-4 py-3"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-4 p-4 backdrop-filter">
                <div className="row g-3">
                  {heroFeatures.map((feature, index) => (
                    <FeatureCard 
                      key={index}
                      icon={feature.icon} 
                      title={feature.title} 
                      description={feature.description} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
