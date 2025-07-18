import React from 'react'

interface PortfolioCardProps {
  icon: string
  backgroundColor: string
  title: string
  description: string
  technologies: string[]
  className?: string
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  icon,
  backgroundColor,
  title,
  description,
  technologies,
  className = ''
}) => {
  return (
    <div className={`col-12 col-lg-4 ${className}`}>
      <div className="card h-100 border-0 shadow hover-lift">
        <div 
          className={`card-img-top ${backgroundColor} d-flex align-items-center justify-content-center`} 
          style={{height: '200px'}}
        >
          <div className="text-white fs-1">{icon}</div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <div className="d-flex flex-wrap gap-1 mb-3">
            {technologies.map((tech, index) => (
              <span key={index} className="badge bg-light text-dark">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
