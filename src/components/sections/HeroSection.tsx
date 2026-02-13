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
              When automation and AI workflows get complicated,
              <span className="text-primary"> I step in.</span>
            </h1>
            <p className="lead mb-4 fs-5 text-secondary">
              I help automation agencies and growing businesses solve the integration, reliability, and edge-case problems that appear after the simple solutions stop working.
            </p>
            <p className="mb-4 text-muted">
              Low-code tools move fast.<br />
              But real business systems are messy.
            </p>
            <p className="mb-4 text-muted">
              <strong>That's where I work.</strong>
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                onClick={() => handleNavigate('contact')}
                label="Discuss Your Challenge"
                variant="secondary"
                className="btn-lg px-4 py-3"
              />
              <Button
                onClick={() => handleNavigate('services')}
                label="What I Do"
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
