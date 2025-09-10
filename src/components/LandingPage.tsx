import React, { useState } from 'react'
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  ApproachSection,
  PortfolioSection,
  ContactSection,
  FooterSection,
  NavigationSection
} from './sections'
import type { ContactFormData } from './common/ContactForm'
import { useScrollToTop } from '../hooks/useScrollToTop'
import './LandingPage.scss'

type Section = 'hero' | 'services' | 'about' | 'approach' | 'portfolio' | 'contact'

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { scrollToTop } = useScrollToTop()

  const handleNavClick = (section: Section) => {
    if (section === activeSection) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection(section)
      setIsTransitioning(false)
      
      // Scroll to top using custom hook
      scrollToTop()
    }, 150) // Half transition duration
  }

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      // Here you would integrate with your email service or backend API
      console.log('Contact form submitted:', data)
      
      // For now, we'll just log the data
      // In production, you could use EmailJS, Netlify Forms, or a backend API
      
      // Example EmailJS integration (would need to install and configure):
      // await emailjs.send('service_id', 'template_id', data, 'user_id')
      
      alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    } catch (error) {
      console.error('Error submitting form:', error)
      throw new Error('Failed to submit form. Please try again.')
    }
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
        {activeSection === 'services' && <ServicesSection onServiceSelect={(_service) => handleNavClick('contact')} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'approach' && <ApproachSection />}
        {activeSection === 'portfolio' && <PortfolioSection onNavigate={handleNavClick} />}
        {activeSection === 'contact' && <ContactSection onFormSubmit={handleFormSubmit} />}
      </div>

      {/* Footer - Always Visible */}
      <FooterSection onNavigate={handleNavClick} />
    </div>
  )
}
