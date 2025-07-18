import React from 'react'

interface TechStackItemProps {
  icon: string
  label: string
  className?: string
}

export const TechStackItem: React.FC<TechStackItemProps> = ({
  icon,
  label,
  className = ''
}) => {
  return (
    <div className={`col-4 ${className}`}>
      <div className="p-3">
        <div className="fs-2 mb-2">{icon}</div>
        <h6 className="fw-bold">{label}</h6>
      </div>
    </div>
  )
}
