import React from 'react'

interface StatisticCardProps {
  number: string
  label: string
  className?: string
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  number,
  label,
  className = ''
}) => {
  return (
    <div className={`col-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-primary fw-bold">{number}</h3>
        <p className="text-muted mb-0">{label}</p>
      </div>
    </div>
  )
}
