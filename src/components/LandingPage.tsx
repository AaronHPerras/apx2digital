import React, { useState } from 'react'
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  ContactSection,
  FooterSection,
  NavigationSection
} from './sections'
import './LandingPage.scss'

type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavClick = (section: Section) => {
    if (section === activeSection) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection(section)
      setIsTransitioning(false)
    }, 150) // Half transition duration
  }

  return (
    <div className="landing-page">
      {/* Navigation */}
      <NavigationSection 
        activeSection={activeSection}
        onNavigate={handleNavClick}
      />

      {/* Section Container with Transitions */}
      <div 
        className={`section-wrapper ${isTransitioning ? 'section-fade-exit' : 'section-fade-enter'}`}
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {/* Conditional Section Rendering */}
        {activeSection === 'hero' && <HeroSection onNavigate={handleNavClick} />}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'portfolio' && <PortfolioSection onNavigate={handleNavClick} />}
        {activeSection === 'contact' && <ContactSection />}
      </div>

      {/* Footer - Always Visible */}
      <FooterSection onNavigate={handleNavClick} />
    </div>
  )
}
