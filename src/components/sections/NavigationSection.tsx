import React, { useRef } from 'react'
import { Button } from '../common'

type Section = 'hero' | 'services' | 'about' | 'approach' | 'portfolio' | 'contact'

interface NavigationSectionProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({ 
  activeSection, 
  onNavigate 
}) => {
  const offcanvasRef = useRef<HTMLDivElement>(null)

  // Function to close offcanvas menu
  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      // Remove 'show' class to hide the offcanvas
      offcanvasRef.current.classList.remove('show')
      
      // Remove backdrop
      const backdrop = document.querySelector('.offcanvas-backdrop')
      if (backdrop) {
        backdrop.remove()
      }
      
      // Remove modal-open class from body
      document.body.classList.remove('modal-open')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('padding-right')
    }
  }

  // Enhanced navigation handler that closes offcanvas menu
  const handleNavigateAndClose = (section: Section) => {
    onNavigate(section)
    closeOffcanvas()
  }
  return (
    <>
      {/* Hamburger Menu Button - Absolute Positioned in Top Left */}
      <div className="position-fixed top-0 start-0 p-3" style={{ zIndex: 1040 }}>
        <Button
          variant="hamburger"
          onClick={() => {}}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded={false}
          aria-label="Open navigation menu"
        />
      </div>

    {/* Bootstrap Offcanvas */}
    <div 
      className="offcanvas offcanvas-start bg-light-custom" 
      tabIndex={-1} 
      id="offcanvasNavbar" 
      aria-labelledby="offcanvasNavbarLabel"
      ref={offcanvasRef}
    >
      <div className="offcanvas-header border-bottom">
        <Button
          variant="close"
          onClick={() => {}}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="d-flex align-items-center justify-content-center p-2 rounded-circle"
          style={{ width: '22px', height: '22px' }}
        >
          <div className="button-outer">
            <div className="button-inner">
              <i className="bi bi-arrow-left fs-4"></i>
            </div>
          </div>
        </Button>
      </div>
      <div className="offcanvas-body p-0">
        <div className="container-fluid p-4">
          <div className="row g-4">
            <div className="col-6">
              <Button
                section="hero"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('hero')}
                label="Home"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                section="services"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('services')}
                label="Services"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                section="about"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('about')}
                label="About"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                section="approach"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('approach')}
                label="Approach"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                section="portfolio"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('portfolio')}
                label="Portfolio"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                section="contact"
                activeSection={activeSection}
                onClick={() => handleNavigateAndClose('contact')}
                label="Contact"
                variant="mobile-nav"
              />
            </div>
            <div className="col-6">
              <Button
                onClick={closeOffcanvas}
                label="Get Started"
                variant="mobile-cta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
