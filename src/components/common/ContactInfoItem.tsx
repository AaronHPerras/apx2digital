import React from 'react'

interface ContactInfoItemProps {
  icon: string
  title: string
  content: React.ReactNode
  className?: string
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
  className = ''
}) => {
  return (
    <div className={`col-12 col-md-4 ${className}`}>
      <div className="text-center">
        <div className="text-warning fs-1 mb-3">{icon}</div>
        <h5 className="fw-bold">{title}</h5>
        <div>{content}</div>
      </div>
    </div>
  )
}
