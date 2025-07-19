import React, { useRef } from 'react'

type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

interface NavigationSectionProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({ 
  activeSection, 
  onNavigate 
}) => {
  const navbarCollapseRef = useRef<HTMLDivElement>(null)

  // Function to close mobile menu
  const closeMobileMenu = () => {
    if (navbarCollapseRef.current) {
      // Remove 'show' class to collapse the menu
      navbarCollapseRef.current.classList.remove('show')
      
      // Update aria-expanded attribute on the toggler button
      const togglerButton = document.querySelector('.navbar-toggler')
      if (togglerButton) {
        togglerButton.setAttribute('aria-expanded', 'false')
        togglerButton.classList.add('collapsed')
      }
    }
  }

  // Enhanced navigation handler that closes mobile menu
  const handleNavigateAndClose = (section: Section) => {
    onNavigate(section)
    closeMobileMenu()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <button 
          className="navbar-brand fw-bold text-primary fs-3 btn btn-link text-decoration-none border-0"
          onClick={() => handleNavigateAndClose('hero')}
        >
          APX2Digital
        </button>
        
        <button
          className="navbar-toggler border-0 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          {/* Desktop Card Navigation */}
          <div className="d-none d-lg-flex me-auto">
            <div className="d-flex gap-3">
              <button 
                className={`nav-card nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0 ${activeSection === 'hero' ? 'nav-card-active' : ''}`}
                onClick={() => handleNavigateAndClose('hero')}
              >
                <span className="nav-card-label fw-semibold">Home</span>
              </button>
              <button 
                className={`nav-card nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0 ${activeSection === 'services' ? 'nav-card-active' : ''}`}
                onClick={() => handleNavigateAndClose('services')}
              >
                <span className="nav-card-label fw-semibold">Services</span>
              </button>
              <button 
                className={`nav-card nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0 ${activeSection === 'about' ? 'nav-card-active' : ''}`}
                onClick={() => handleNavigateAndClose('about')}
              >
                <span className="nav-card-label fw-semibold">About</span>
              </button>
              <button 
                className={`nav-card nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0 ${activeSection === 'portfolio' ? 'nav-card-active' : ''}`}
                onClick={() => handleNavigateAndClose('portfolio')}
              >
                <span className="nav-card-label fw-semibold">Portfolio</span>
              </button>
              <button 
                className={`nav-card nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0 ${activeSection === 'contact' ? 'nav-card-active' : ''}`}
                onClick={() => handleNavigateAndClose('contact')}
              >
                <span className="nav-card-label fw-semibold">Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Card Navigation */}
          <div className="d-lg-none w-100">
            <div className="row g-4 p-3">
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'hero' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('hero')}
                >
                  <span className="nav-card-label fw-semibold">Home</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'services' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('services')}
                >
                  <span className="nav-card-label fw-semibold">Services</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'about' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('about')}
                >
                  <span className="nav-card-label fw-semibold">About</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'portfolio' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('portfolio')}
                >
                  <span className="nav-card-label fw-semibold">Portfolio</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'contact' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('contact')}
                >
                  <span className="nav-card-label fw-semibold">Contact</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className="nav-card nav-card-cta w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-card-label fw-semibold">Get Started</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="d-none d-lg-flex">
            <button 
              className="nav-card nav-card-cta nav-card-desktop d-flex flex-row align-items-center justify-content-center px-3 py-2 border-0"
              onClick={closeMobileMenu}
            >
              <span className="nav-card-label fw-semibold">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
