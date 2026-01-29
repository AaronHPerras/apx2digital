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
    icon: "bi-chat-dots",
    title: "1. Free Brainstorm Call",
    description: "We clarify your idea or problem; no commitment required."
  },
  {
    icon: "bi-hammer",
    title: "2. Prototyping (2–7 Days)", 
    description: "I design & build a functional MVP—with frequent checkpoints—tailored to your needs."
  },
  {
    icon: "bi-rocket-takeoff",
    title: "3. Test & Iterate",
    description: "You play with the solution, get feedback from users, and decide on next steps."
  },
  {
    icon: "bi-check-circle",
    title: "You Own Everything",
    description: "All code and assets are handed off to you. No ongoing commitments or lock-in."
  }
]

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  title = "🤝 How It Works",
  subtitle = "Simple, transparent process from idea to working MVP",
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
