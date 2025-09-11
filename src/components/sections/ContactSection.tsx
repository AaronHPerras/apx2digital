import { type FC } from 'react'
import { ContactForm, SectionWrapper } from '../common'
import type { ContactFormData } from '../common/ContactForm'
import { contactInfo } from '../common/data'

export interface ContactSectionProps {
  onFormSubmit?: (data: ContactFormData) => void | Promise<void>
}

export const ContactSection: FC<ContactSectionProps> = ({
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
    <SectionWrapper id="contact" className="py-5 bg-light">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">
            Get Started Today
          </h2>
          <p className="lead text-muted mb-4">
            Ready to transform your digital presence? Let's discuss your project and get you results—fast.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <div className="bg-primary text-white p-4 rounded mb-4">
                  <h5 className="mb-2">🚀 1-Week Website Launch Available</h5>
                  <p className="mb-0">Mobile-first design • API-ready • Review integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow border-0">
              <div className="card-body p-4 p-md-5">
                <h3 className="card-title text-center mb-4">
                  Get Your Free Consultation
                </h3>
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 mb-3">
                <div className="text-muted">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  Service Area: {contactInfo.serviceArea}
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="text-muted">
                  <i className="bi bi-clock-fill text-primary me-2"></i>
                  {contactInfo.businessHours}
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="text-muted">
                  <i className="bi bi-lightning-fill text-primary me-2"></i>
                  Response within 24 hours
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted small mb-2">
                <strong>{contactInfo.tagline}</strong>
              </p>
              <p className="text-muted small">
                We're committed to transparent pricing, clear communication, and delivering results that drive your business forward.
              </p>
            </div>
          </div>
        </div>
    </SectionWrapper>
  )
}
