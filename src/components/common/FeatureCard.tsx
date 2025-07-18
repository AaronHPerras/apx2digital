import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`col-6 ${className}`}>
      <div className="bg-white bg-opacity-20 rounded-3 p-3 h-100">
        <div className="text-warning fs-2 mb-2">{icon}</div>
        <h6 className="fw-bold">{title}</h6>
        <small>{description}</small>
      </div>
    </div>
  )
}
