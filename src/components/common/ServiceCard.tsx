import React from 'react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`col-12 col-md-6 col-lg-4 ${className}`}>
      <div className="card h-100 border-0 shadow-sm hover-lift">
        <div className="card-body p-4 text-center">
          <div className="text-primary fs-1 mb-3">{icon}</div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  )
}
