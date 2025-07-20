import React from 'react'
import '../../styles/apx2-title.scss'

interface APx2DigitalTitleProps {
  /** Style variant for different use cases */
  variant?: 'default' | 'glow' | 'compact' | 'inline' | 'dark'
  /** Additional CSS classes */
  className?: string
  /** Click handler for interactive titles */
  onClick?: () => void
  /** Whether the title should be clickable */
  clickable?: boolean
  /** Custom text content (defaults to "APx2 Digital") */
  children?: React.ReactNode
}

/**
 * APx2 Digital branded title component with navy push-button styling
 * 
 * Features:
 * - Mobile-first responsive design
 * - 3D push-button effects matching navigation theme
 * - Multiple variants for different contexts
 * - Highlighted "x2" branding
 * - Consistent color scheme with project theme
 */
export const APx2DigitalTitle: React.FC<APx2DigitalTitleProps> = ({ 
  variant = 'default', 
  className = '',
  onClick,
  clickable = !!onClick,
  children
}) => {
  const getClassName = () => {
    const baseClass = 'apx2-digital-title'
    const variantClass = variant === 'glow' 
      ? 'apx2-digital-title-glow' 
      : variant === 'compact' 
        ? 'apx2-digital-title-compact'
        : variant === 'inline'
          ? 'apx2-digital-title-inline'
          : variant === 'dark'
            ? 'apx2-digital-title-dark'
            : baseClass
    
    const interactiveClass = clickable ? 'cursor-pointer' : ''
    
    return `${variantClass} ${interactiveClass} ${className}`.trim()
  }

  const defaultContent = (
    <>
      AP<span className="apx2-highlight">x2</span> Digital
    </>
  )

  const Element = clickable ? 'button' : 'div'
  
  return (
    <Element 
      className={getClassName()} 
      onClick={clickable ? onClick : undefined}
      type={clickable ? 'button' : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {children || defaultContent}
    </Element>
  )
}

export default APx2DigitalTitle
