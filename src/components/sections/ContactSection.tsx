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
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
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
    </SectionWrapper>
  )
}
