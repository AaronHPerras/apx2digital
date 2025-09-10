import React from 'react'

interface ApproachItem {
  icon: string
  title: string
  description: string
}

export interface ApproachSectionProps {
  title?: string
  subtitle?: string
  approaches?: ApproachItem[]
}

const defaultApproaches: ApproachItem[] = [
  {
    icon: "bi-phone",
    title: "Mobile First",
    description: "Everything is mobile-first. We design and test rigorously across all devices—smartphones, tablets, and desktops."
  },
  {
    icon: "bi-arrow-up-right-circle",
    title: "API-Ready & Future-Proofed", 
    description: "Your site is structured to easily support advanced features as your needs evolve, without costly rebuilds."
  },
  {
    icon: "bi-handshake",
    title: "True Partnership",
    description: "We're invested in your success and always looking for ways to help you grow online."
  },
  {
    icon: "bi-eye",
    title: "No Surprises",
    description: "Transparent pricing, clear communication, and proactive service every step of the way."
  }
]

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  title = "Our Approach",
  subtitle = "This is your brand. We're here to make it happen.",
  approaches = defaultApproaches
}) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              {title}
            </h2>
            <p className="lead text-muted">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="row">
          {approaches.map((approach, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <i 
                    className={`${approach.icon} text-primary`} 
                    style={{fontSize: '3rem'}}
                    aria-hidden="true"
                  ></i>
                </div>
                <h4 className="mb-3">{approach.title}</h4>
                <p className="text-muted">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
