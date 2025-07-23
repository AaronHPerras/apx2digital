import React from 'react'

type Section = 'hero' | 'services' | 'about' | 'portfolio' | 'contact'

type ButtonVariant = 'primary' | 'secondary' | 'cta' | 'hamburger' | 'close' | 'navigation' | 'mobile-nav' | 'mobile-cta'

interface ButtonProps {
	section?: Section
	activeSection?: Section
	onClick: () => void
	label?: string
	variant?: ButtonVariant
	isDesktop?: boolean
	className?: string
	children?: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	style?: React.CSSProperties
	'data-bs-toggle'?: string
	'data-bs-target'?: string
	'data-bs-dismiss'?: string
	'aria-controls'?: string
	'aria-expanded'?: boolean
	'aria-label'?: string
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	label,
	section,
	activeSection,
	variant = 'primary',
	isDesktop = false,
	className = '',
	children,
	type = 'button',
	disabled = false,
	style,
	...dataProps
}) => {
	
	// Build class names based on props
	const baseClasses = 'btn-knoll'
	
	// Check if this navigation button is active
	const isActive = section && activeSection && section === activeSection
	
	// Variant-specific classes
	const getVariantClasses = () => {
		switch (variant) {
			case 'navigation': {
				const navClasses = isDesktop ? 'flex-row' : 'w-100 h-100'
				return isActive ? `${navClasses} active` : navClasses
			}
			case 'mobile-nav': {
				const mobileNavClasses = 'w-100 h-100 square-ratio'
				return isActive ? `${mobileNavClasses} active` : mobileNavClasses
			}
			case 'mobile-cta': {
				const mobileCTAClasses = 'w-100 h-100 square-ratio nav-card-cta'
				return mobileCTAClasses
			}
			case 'cta':
				return isDesktop ? 'flex-row nav-card-cta' : 'w-100 h-100 nav-card-cta'
			case 'hamburger':
				return 'hamburger-menu-btn'
			case 'close':
				return 'btn-close-custom'
			case 'secondary':
				return 'btn-secondary-custom'
			default:
				return ''
		}
	}
	
	const variantClasses = getVariantClasses()
	
	// Render menu icon for hamburger variant
	const renderContent = () => {
		if (variant === 'hamburger') {
			return (
				<div className="button-outer">
					<div className="button-inner">
						<div className="menu-icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			)
		}
		
		if (children) {
			return children
		}
		
		return (
			<div className="button-outer">
				<div className="button-inner">
					<span>{label}</span>
				</div>
			</div>
		)
	}
	
	return (
		<button 
			className={`${baseClasses} ${variantClasses} ${className}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
			style={style}
			{...dataProps}
		>
			{renderContent()}
		</button>
	)
}
