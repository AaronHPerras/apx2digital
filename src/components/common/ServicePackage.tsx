import React from 'react'

export interface ServicePackageProps {
  title: string
  timeline: string
  price: string
  currency: 'CAD' | 'USD'
  features: string[]
  isPopular?: boolean
  ctaText?: string
  onCtaClick?: () => void
}

export const ServicePackage: React.FC<ServicePackageProps> = ({
  title,
  timeline,
  price,
  currency,
  features,
  isPopular = false,
  ctaText = "Get Started",
  onCtaClick
}) => {
  return (
    <div className={`col-12 col-md-6 col-lg-4 mb-4 ${isPopular ? 'position-relative' : ''}`}>
      {isPopular && (
        <div className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2 z-index-1">
          Most Popular
        </div>
      )}
      <div className={`card h-100 ${isPopular ? 'border-primary border-2 shadow' : 'border-2'}`}>
        <div className="card-body text-center p-4">
          <h3 className="card-title text-primary mb-3">{title}</h3>
          <div className="mb-3">
            <span className="h4 text-dark">{price} {currency}</span>
            <div className="text-muted small mt-1">{timeline}</div>
          </div>
          <ul className="list-unstyled text-start mb-4">
            {features.map((feature, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {onCtaClick && (
            <button 
              className={`btn ${isPopular ? 'btn-primary' : 'btn-outline-primary'} btn-lg w-100`}
              onClick={onCtaClick}
              style={{ minHeight: '44px' }}
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
