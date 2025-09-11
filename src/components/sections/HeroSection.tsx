import { type FC } from 'react'
import { Button, SectionWrapper } from '../common'

interface HeroSectionProps {
  onNavigate?: (section: 'services' | 'contact') => void
}

export const HeroSection: FC<HeroSectionProps> = ({ onNavigate }) => {
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
    <SectionWrapper id="hero" className="bg-light text-dark py-5">
      <div className="row align-items-center">
        <div className="col-12 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-4 text-dark">
            Web Development | No-Code Automation | Cybersecurity
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
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
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
      </div>
    </SectionWrapper>
  )
}
