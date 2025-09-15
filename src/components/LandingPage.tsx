import { type FC } from 'react'
import {
  HeroSection,
  ServicesSection,
  PortfolioSection,
  ContactSection,
  FooterSection,
  // NavigationSection // Commented out for single-page layout, keep for later
} from './sections'
import type { ContactFormData } from './common/ContactForm'
import './LandingPage.scss'

// Commented out navigation types and state for single-page layout
// type Section = 'hero' | 'services' | 'about' | 'approach' | 'portfolio' | 'contact'

export const LandingPage: FC = () => {
  // Removed navigation state and handlers for single-page layout
  // const [activeSection, setActiveSection] = useState<Section>('hero')
  // const [isTransitioning, setIsTransitioning] = useState(false)
  // const { scrollToTop } = useScrollToTop()

  // const handleNavClick = (section: Section) => {
  //   if (section === activeSection) return
  //   
  //   setIsTransitioning(true)
  //   setTimeout(() => {
  //     setActiveSection(section)
  //     setIsTransitioning(false)
  //     
  //     // Scroll to top using custom hook
  //     scrollToTop()
  //   }, 150) // Half transition duration
  // }

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
      {/* Navigation - Commented out for single-page layout */}
      {/* <NavigationSection 
        activeSection={activeSection}
        onNavigate={handleNavClick}
      /> */}

      {/* All Sections - Single Page Layout */}
      <div className="section-wrapper">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Contact Section with Form */}
        <ContactSection onFormSubmit={handleFormSubmit} />
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
