import { type FC } from 'react'
import { ContactForm } from './common'
import type { ContactFormData } from './common/ContactForm'
import apx2Logo from '../assets/apx2-logo.svg'
import './LandingPage.scss'

export const LandingPage: FC = () => {
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
    <div className="landing-page min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg sticky-top border-bottom bg-light">
        <div className="container">
          <div className="d-flex align-items-center">
            <div 
              className="bg-primary me-3" 
              style={{ width: '32px', height: '32px' }}
            ></div>
            <span className="navbar-brand fw-bold fs-4 text-dark mb-0">APx2 DIGITAL</span>
          </div>
          <div className="d-none d-md-flex align-items-center gap-4">
            <a
              href="#services"
              className="nav-link text-muted fw-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="nav-link text-muted fw-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="nav-link text-muted fw-medium"
            >
              Contact
            </a>
            <button className="btn btn-primary btn-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden border-bottom">
        {/* Art Deco geometric pattern background */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.05 }}>
          <div className="position-absolute start-0 top-0 h-100 w-33 bg-gradient-primary"></div>
          <div className="position-absolute end-0 bottom-0 h-100 w-33 bg-gradient-primary"></div>
        </div>

        <div className="container position-relative py-5" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <div className="mb-4 d-inline-block border border-2 border-primary px-3 py-2">
                <span className="text-xs fw-bold text-uppercase text-primary" style={{ letterSpacing: '0.2em' }}>Est. 2024</span>
              </div>
              
              <div className="d-flex align-items-center justify-content-center mb-4">
                <img 
                  src={apx2Logo} 
                  alt="APx2 Digital Logo" 
                  style={{ width: '80px', height: '80px' }}
                  className="me-3"
                />
                <h1 className="display-2 fw-bold text-dark mb-0 text-balance">
                  APx2 Digital Excellence
                </h1>
              </div>
              
              <p className="lead mx-auto mb-5 text-muted" style={{ maxWidth: '600px', fontSize: '1.25rem', lineHeight: '1.6' }}>
                Professional web development and cybersecurity services that blend modern technology with reliable business solutions. 
                We build digital experiences that drive real results for your business.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                <button className="btn btn-primary btn-lg">
                  Start Your Project
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-primary" style={{ height: '4px' }}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-bottom py-5" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="display-4 fw-bold text-dark mb-4">Our Services</h2>
              <p className="lead text-muted" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Web Development Service */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-2 position-relative overflow-hidden service-card">
                <div className="position-absolute end-0 top-0 bg-primary" style={{ width: '128px', height: '128px', opacity: 0.05 }}></div>
                <div className="card-body p-4 position-relative">
                  <div className="d-inline-flex align-items-center justify-content-center border-2 border-primary bg-light mb-4" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-globe2 text-primary fs-5"></i>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">Web Development</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    Modern, responsive websites built with React, Next.js, and cutting-edge technologies that perform beautifully across all devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Cybersecurity Service */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-2 position-relative overflow-hidden service-card">
                <div className="position-absolute end-0 top-0 bg-primary" style={{ width: '128px', height: '128px', opacity: 0.05 }}></div>
                <div className="card-body p-4 position-relative">
                  <div className="d-inline-flex align-items-center justify-content-center border-2 border-primary bg-light mb-4" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-shield-lock text-primary fs-5"></i>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">Cybersecurity & Data</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    Comprehensive security assessments, data protection strategies, and monitoring solutions to keep your business safe.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance/SEO Service */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-2 position-relative overflow-hidden service-card">
                <div className="position-absolute end-0 top-0 bg-primary" style={{ width: '128px', height: '128px', opacity: 0.05 }}></div>
                <div className="card-body p-4 position-relative">
                  <div className="d-inline-flex align-items-center justify-content-center border-2 border-primary bg-light mb-4" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-lightning text-primary fs-5"></i>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">Performance & SEO</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    Lightning-fast websites optimized for search engines, user experience, and exceptional business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="border-bottom py-5 bg-light" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="display-4 fw-bold text-dark mb-4 text-balance">
                Why Choose APx2 Digital
              </h2>
              <p className="lead text-muted mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                We combine technical expertise with practical business sense to deliver solutions that not only look great 
                but drive real results for your organization.
              </p>
              <div className="mb-4">
                {[
                  "Custom solutions tailored to your business",
                  "Clean, maintainable, and scalable code",
                  "Responsive design across all devices", 
                  "Ongoing support and maintenance"
                ].map((item, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 mb-3">
                    <i className="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i>
                    <span className="text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              {/* Art Deco Stats Grid */}
              <div className="row g-3">
                <div className="col-6">
                  <div className="card border-2 border-primary h-100">
                    <div className="card-body p-4 d-flex flex-column justify-content-between" style={{ aspectRatio: '1', minHeight: '150px' }}>
                      <span className="display-4 fw-bold text-primary">98%</span>
                      <span className="small fw-medium text-dark">Client Satisfaction</span>
                    </div>
                  </div>
                  <div className="card border-2 mt-3 bg-secondary">
                    <div className="card-body p-4 d-flex flex-column justify-content-between text-white" style={{ aspectRatio: '1', minHeight: '150px' }}>
                      <span className="display-4 fw-bold">50+</span>
                      <span className="small fw-medium">Projects Delivered</span>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ paddingTop: '2rem' }}>
                  <div className="card border-2 bg-primary">
                    <div className="card-body p-4 d-flex flex-column justify-content-between text-white" style={{ aspectRatio: '1', minHeight: '150px' }}>
                      <span className="display-4 fw-bold">5+</span>
                      <span className="small fw-medium">Years Experience</span>
                    </div>
                  </div>
                  <div className="card border-2 border-primary mt-3">
                    <div className="card-body p-4 d-flex flex-column justify-content-between" style={{ aspectRatio: '1', minHeight: '150px' }}>
                      <span className="display-4 fw-bold text-primary">100%</span>
                      <span className="small fw-medium text-dark">Code Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-5" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark mb-4 text-balance">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="lead text-muted mb-5" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                Let's discuss your project and create a digital solution that exceeds expectations and drives real business results.
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <h3 className="h4 text-center mb-4 text-dark">Get Your Free Consultation</h3>
                  <ContactForm onSubmit={handleFormSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-top bg-light py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-12 col-md-auto">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-primary" style={{ width: '32px', height: '32px' }}></div>
                <span className="fw-bold fs-4 text-dark">APx2 DIGITAL</span>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              <p className="small text-muted mb-0">© 2025 APx2 Digital. All rights reserved.</p>
            </div>
            <div className="col-12 col-md-auto">
              <div className="d-flex gap-4">
                <a href="#" className="small text-muted text-decoration-none">
                  Privacy
                </a>
                <a href="#" className="small text-muted text-decoration-none">
                  Terms
                </a>
                <a href="#" className="small text-muted text-decoration-none">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
