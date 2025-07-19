import React from 'react'
import { Link } from 'react-router-dom'
import { FeatureCard } from '../common'

interface HeroSectionProps {
  onNavigate: (section: 'portfolio') => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-light text-dark py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-4 text-dark">
              Transform Your Business with 
              <span className="text-primary"> Modern Web Solutions</span>
            </h1>
            <p className="lead mb-4 fs-5 text-secondary">
              We build powerful, scalable web applications that drive growth. 
              From SaaS platforms to e-commerce solutions, we turn your vision into reality.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Link to="/register" className="btn btn-primary btn-lg px-4 py-3">
                Start Your Project
              </Link>
              <button 
                onClick={() => onNavigate('portfolio')} 
                className="btn btn-outline-primary btn-lg px-4 py-3"
              >
                View Our Work
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-4 p-4 backdrop-filter">
                <div className="row g-3">
                  <FeatureCard 
                    icon="⚡" 
                    title="Fast Development" 
                    description="Rapid prototyping & deployment" 
                  />
                  <FeatureCard 
                    icon="🚀" 
                    title="Scalable Solutions" 
                    description="Built for growth & performance" 
                  />
                  <FeatureCard 
                    icon="🛡️" 
                    title="Secure & Reliable" 
                    description="Enterprise-grade security" 
                  />
                  <FeatureCard 
                    icon="📱" 
                    title="Mobile-First" 
                    description="Responsive on all devices" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
