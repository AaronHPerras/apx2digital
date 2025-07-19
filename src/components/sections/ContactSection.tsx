import React from 'react'
import { Link } from 'react-router-dom'
import { ContactInfoItem } from '../common'

export const ContactSection: React.FC = () => {
  return (
    <section className="py-5 py-lg-6 bg-light text-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4 text-dark">
              Ready to Transform Your Business?
            </h2>
            <p className="lead mb-5 fs-5 text-secondary">
              Let's discuss your project and create a solution that drives results. 
              Get started with a free consultation today.
            </p>
            
            <div className="row g-4 mb-5">
              <ContactInfoItem 
                icon="📧"
                title="Email"
                content={
                  <a href="mailto:hello@apx2digital.com" className="text-primary text-decoration-none">
                    hello@apx2digital.com
                  </a>
                }
              />
              <ContactInfoItem 
                icon="📞"
                title="Phone"
                content={
                  <a href="tel:+15551234567" className="text-primary text-decoration-none">
                    +1 (555) 123-4567
                  </a>
                }
              />
              <ContactInfoItem 
                icon="💬"
                title="Social"
                content={
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary text-decoration-none">LinkedIn</a>
                    <a href="#" className="text-primary text-decoration-none">GitHub</a>
                  </div>
                }
              />
            </div>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/register" className="btn btn-primary btn-lg px-5 py-3">
                Start Free Consultation
              </Link>
              <a 
                href="mailto:hello@apx2digital.com" 
                className="btn btn-outline-primary btn-lg px-5 py-3"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
