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
          {/* Desktop Navigation */}
          <ul className="navbar-nav me-auto d-none d-lg-flex">
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={() => handleNavigateAndClose('hero')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => handleNavigateAndClose('services')}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavigateAndClose('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavigateAndClose('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavigateAndClose('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Card Navigation */}
          <div className="d-lg-none w-100">
            <div className="row g-4 p-3">
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'hero' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('hero')}
                >
                  <div className="nav-card-icon mb-2">🏠</div>
                  <span className="nav-card-label fw-semibold">Home</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'services' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('services')}
                >
                  <div className="nav-card-icon mb-2">⚡</div>
                  <span className="nav-card-label fw-semibold">Services</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'about' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('about')}
                >
                  <div className="nav-card-icon mb-2">💼</div>
                  <span className="nav-card-label fw-semibold">About</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'portfolio' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('portfolio')}
                >
                  <div className="nav-card-icon mb-2">🎨</div>
                  <span className="nav-card-label fw-semibold">Portfolio</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className={`nav-card w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3 ${activeSection === 'contact' ? 'nav-card-active' : ''}`}
                  onClick={() => handleNavigateAndClose('contact')}
                >
                  <div className="nav-card-icon mb-2">📞</div>
                  <span className="nav-card-label fw-semibold">Contact</span>
                </button>
              </div>
              <div className="col-6">
                <button 
                  className="nav-card nav-card-cta w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-3"
                  onClick={closeMobileMenu}
                >
                  <div className="nav-card-icon mb-2">🚀</div>
                  <span className="nav-card-label fw-semibold">Get Started</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="d-none d-lg-flex">
            <button className="btn btn-primary" onClick={closeMobileMenu}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
