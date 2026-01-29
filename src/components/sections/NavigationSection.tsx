import React, { useState, useEffect } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleNavigateAndClose = (section: Section) => {
    setIsOpen(false)
    onNavigate(section)
  }

  return (
    <>
      {/* Hamburger Menu Button - Absolute Positioned in Top Left */}
      <div className="position-fixed top-0 start-0 p-3" style={{ zIndex: 1040 }}>
        <Button
          variant="hamburger"
          onClick={handleOpen}
          aria-label="Open navigation menu"
        />
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="offcanvas-backdrop fade show"
          onClick={handleClose}
          style={{ zIndex: 1039 }}
        />
      )}

    {/* Offcanvas Menu */}
    <div 
      className={`offcanvas offcanvas-start bg-light-custom ${isOpen ? 'show' : ''}`}
      tabIndex={-1}
      style={{ 
        visibility: isOpen ? 'visible' : 'hidden',
        zIndex: 1040
      }}
    >
      <div className="offcanvas-header border-bottom">
        <Button
          variant="close"
          onClick={handleClose}
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
                onClick={handleClose}
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
