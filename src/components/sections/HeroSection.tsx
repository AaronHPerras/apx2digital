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
              Website Design | No-Code Automation | 
              <span className="text-primary"> Digital Growth</span>
            </h1>
            <p className="lead mb-4 fs-5 text-secondary">
              We deliver clean, professional, and user-friendly solutions leveraging cutting-edge AI tools 
              to bring you exceptional results—faster.
            </p>
            <div className="mb-4">
              <div className="badge bg-primary text-white fs-6 px-3 py-2 mb-3">
                🚀 1-Week Website Launch Available
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                onClick={() => handleNavigate('contact')}
                label="Get Your Free Consultation"
                variant="secondary"
                className="btn-lg px-4 py-3"
              />
              <Button
                onClick={() => handleNavigate('services')}
                label="View Our Services"
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
