import React from 'react'
import { ContactForm } from '../common/ContactForm'
import type { ContactFormData } from '../common/ContactForm'
import { contactInfo } from '../common/data'

export interface ContactSectionProps {
  onFormSubmit?: (data: ContactFormData) => void | Promise<void>
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onFormSubmit
}) => {
  const handleFormSubmit = async (data: ContactFormData) => {
    if (onFormSubmit) {
      await onFormSubmit(data)
    } else {
      // Default submission handler - could integrate with email service
      console.log('Form submitted:', data)
      // Here you could integrate with an email service like EmailJS or a backend API
    }
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Working Together
            </h2>
            <p className="lead text-muted mb-4">
              If your automation or AI workflows are becoming complex, fragile, or difficult to maintain, I can help.
            </p>
            <p className="text-muted">
              Tell me a bit about your workflow or integration challenge and I'll let you know if I'm a good fit.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow border-0">
              <div className="card-body p-4 p-md-5">
                <h3 className="card-title text-center mb-4">
                  Let's Discuss Your Challenge
                </h3>
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-3">
                <div className="text-muted">
                  <i className="bi bi-lightning-fill text-primary me-2"></i>
                  Response within 24 hours
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <div className="text-muted">
                  <i className="bi bi-shield-check text-primary me-2"></i>
                  Confidential consultations
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted small">
                Most engagements fall into: escalation support for agency projects, short-term integration/reliability projects, or ongoing advisory and system maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
