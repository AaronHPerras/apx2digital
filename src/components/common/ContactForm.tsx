import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Form data interface
export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: 'website' | 'seo' | 'automation' | 'other'
  budget: 'under-5k' | '5k-10k' | '10k-25k' | '25k-plus' | 'not-sure'
  timeline: 'asap' | '1-month' | '2-3-months' | '3-plus-months' | 'flexible'
  description: string
  hearAboutUs: string
}

// Validation schema
const validationSchema: yup.ObjectSchema<ContactFormData> = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  projectType: yup
    .mixed<'website' | 'seo' | 'automation' | 'other'>()
    .required('Please select a project type')
    .oneOf(['website', 'seo', 'automation', 'other']),
  budget: yup
    .mixed<'under-5k' | '5k-10k' | '10k-25k' | '25k-plus' | 'not-sure'>()
    .required('Please select a budget range')
    .oneOf(['under-5k', '5k-10k', '10k-25k', '25k-plus', 'not-sure']),
  timeline: yup
    .mixed<'asap' | '1-month' | '2-3-months' | '3-plus-months' | 'flexible'>()
    .required('Please select your preferred timeline')
    .oneOf(['asap', '1-month', '2-3-months', '3-plus-months', 'flexible']),
  description: yup
    .string()
    .required('Please describe your project')
    .min(20, 'Please provide at least 20 characters describing your project'),
  hearAboutUs: yup.string().default('')
})

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void | Promise<void>
  isSubmitting?: boolean
  className?: string
}

export const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting = false,
  className = ""
}) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange'
  })

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle')
      await onSubmit(data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className={`contact-form ${className}`}>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="row">
          {/* Name Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              placeholder="Your full name"
              style={{ minHeight: '44px' }}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="your.email@example.com"
              style={{ minHeight: '44px' }}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Phone Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              placeholder="+1 (555) 123-4567"
              style={{ minHeight: '44px' }}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>

          {/* Project Type Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="projectType" className="form-label">
              Project Type <span className="text-danger">*</span>
            </label>
            <select
              {...register('projectType')}
              className={`form-select ${errors.projectType ? 'is-invalid' : ''}`}
              id="projectType"
              style={{ minHeight: '44px' }}
            >
              <option value="">Select project type...</option>
              <option value="website">Website Design & Launch</option>
              <option value="seo">SEO & Local Marketing</option>
              <option value="automation">No-Code Automation</option>
              <option value="other">Other / Multiple Services</option>
            </select>
            {errors.projectType && (
              <div className="invalid-feedback">{errors.projectType.message}</div>
            )}
          </div>

          {/* Budget Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="budget" className="form-label">
              Budget Range <span className="text-danger">*</span>
            </label>
            <select
              {...register('budget')}
              className={`form-select ${errors.budget ? 'is-invalid' : ''}`}
              id="budget"
              style={{ minHeight: '44px' }}
            >
              <option value="">Select budget range...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-plus">$25,000+</option>
              <option value="not-sure">Not sure yet</option>
            </select>
            {errors.budget && (
              <div className="invalid-feedback">{errors.budget.message}</div>
            )}
          </div>

          {/* Timeline Field */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="timeline" className="form-label">
              Preferred Timeline <span className="text-danger">*</span>
            </label>
            <select
              {...register('timeline')}
              className={`form-select ${errors.timeline ? 'is-invalid' : ''}`}
              id="timeline"
              style={{ minHeight: '44px' }}
            >
              <option value="">Select timeline...</option>
              <option value="asap">ASAP (1-2 weeks)</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-plus-months">3+ months</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.timeline && (
              <div className="invalid-feedback">{errors.timeline.message}</div>
            )}
          </div>

          {/* Description Field */}
          <div className="col-12 mb-3">
            <label htmlFor="description" className="form-label">
              Project Description <span className="text-danger">*</span>
            </label>
            <textarea
              {...register('description')}
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              id="description"
              rows={4}
              placeholder="Please describe your project, goals, and any specific requirements..."
              style={{ minHeight: '100px' }}
            />
            {errors.description && (
              <div className="invalid-feedback">{errors.description.message}</div>
            )}
          </div>

          {/* How did you hear about us (optional) */}
          <div className="col-12 mb-4">
            <label htmlFor="hearAboutUs" className="form-label">
              How did you hear about us? (Optional)
            </label>
            <input
              {...register('hearAboutUs')}
              type="text"
              className="form-control"
              id="hearAboutUs"
              placeholder="Google search, referral, social media, etc."
              style={{ minHeight: '44px' }}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={isSubmitting || !isValid}
              style={{ minHeight: '56px' }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                'Get Your Free Consultation'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="col-12 mt-3">
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                Thank you! We've received your request and will get back to you within 24 hours.
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="col-12 mt-3">
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                There was an error sending your message. Please try again or contact us directly.
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
