import React from 'react'
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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <button 
          className="navbar-brand fw-bold text-primary fs-3 btn btn-link text-decoration-none border-0"
          onClick={() => onNavigate('hero')}
        >
          APX2Digital
        </button>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => onNavigate('services')}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => onNavigate('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => onNavigate('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => onNavigate('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link to="/login" className="btn btn-outline-primary">
              Sign In
            </Link>
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
