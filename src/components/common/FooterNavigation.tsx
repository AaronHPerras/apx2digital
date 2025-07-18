import React from 'react'

interface FooterNavigationProps {
  title: string
  items: {
    label: string
    onClick?: () => void
    href?: string
    isLink?: boolean
  }[]
  className?: string
}

export const FooterNavigation: React.FC<FooterNavigationProps> = ({
  title,
  items,
  className = ''
}) => {
  return (
    <div className={`col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 ${className}`}>
      <h6 className="fw-bold text-warning mb-3">{title}</h6>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.isLink ? (
              <a href={item.href} className="text-light text-decoration-none">
                {item.label}
              </a>
            ) : item.onClick ? (
              <button 
                onClick={item.onClick} 
                className="btn btn-link text-light text-decoration-none p-0 text-start"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-light">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
