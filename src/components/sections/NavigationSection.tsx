import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

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
          <ul className="navbar-nav me-auto">
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
          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link to="/login" className="btn btn-outline-primary" onClick={closeMobileMenu}>
              Sign In
            </Link>
            <Link to="/register" className="btn btn-primary" onClick={closeMobileMenu}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
