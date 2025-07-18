import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
  titleClassName = 'display-5 fw-bold text-dark',
  subtitleClassName = 'lead text-muted'
}) => {
  return (
    <div className={`text-center mb-5 ${className}`}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
  )
}
