import { type FC, useState, useRef, useEffect } from 'react'
import { Button, SectionWrapper } from '../common'
import { Collapse } from 'bootstrap'

interface ServiceDrawerProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  services: Array<{
    name: string
    duration: string
    phase: number
  }>
}

interface HeroSectionProps {
  onNavigate?: (section: 'services' | 'contact') => void
}

const ServiceDrawer: FC<ServiceDrawerProps> = ({ title, isOpen, onToggle, services }) => {
  const collapseRef = useRef<HTMLDivElement>(null)
  const collapseInstance = useRef<Collapse | null>(null)

  useEffect(() => {
    if (collapseRef.current) {
      collapseInstance.current = new Collapse(collapseRef.current, { toggle: false })
    }
    return () => collapseInstance.current?.dispose()
  }, [])

  useEffect(() => {
    if (collapseInstance.current) {
      if (isOpen) {
        collapseInstance.current.show()
      } else {
        collapseInstance.current.hide()
      }
    }
  }, [isOpen])

  // Generate sin wave path for timeline
  const generateSinWavePath = (width: number, height: number, frequency: number = 2) => {
    const points: string[] = []
    const steps = 100
    
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width
      const y = height / 2 + Math.sin((i / steps) * frequency * Math.PI * 2) * (height / 4)
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    }
    
    return points.join(' ')
  }

  return (
    <div className="mb-4 hero-service-drawer">
      <div className="row">
        {/* Service Card - Always takes left side on desktop */}
        <div className="col-12 col-lg-6">
          <div 
            className="card border-2 border-primary cursor-pointer h-100"
            onClick={onToggle}
            style={{ cursor: 'pointer', minHeight: '200px' }}
          >
            <div className="card-body d-flex flex-column justify-content-center text-center p-4">
              <div className="mb-3">
                <i className={`${title === 'Web Solutions' ? 'bi-globe2' : 'bi-shield-lock'} text-primary`} 
                   style={{ fontSize: '3rem' }}></i>
              </div>
              <h3 className="card-title text-primary mb-3">{title}</h3>
              <p className="text-muted mb-3">
                {title === 'Web Solutions' 
                  ? 'Modern websites, SEO optimization, and no-code automation solutions'
                  : 'Data protection, security audits, and compliance management'
                }
              </p>
              <div className="mt-auto">
                <i className={`bi-chevron-${isOpen ? 'up' : 'down'} d-lg-none text-primary`}></i>
                <i className={`bi-chevron-${isOpen ? 'left' : 'right'} d-none d-lg-inline text-primary`}></i>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Drawer opens to the right */}
        <div className={`col-12 col-lg-6 d-none d-lg-block drawer-desktop ${isOpen ? 'drawer-open' : ''}`}>
          <div className="card card-body bg-light border-0 h-100">
            <h5 className="text-primary mb-4">Service Timeline</h5>
            <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
              {/* Sin Wave SVG - Horizontal for desktop */}
              <svg 
                width="100%" 
                height="200" 
                className="position-absolute timeline-svg"
                style={{ top: 0, left: 0 }}
              >
                <path
                  d={generateSinWavePath(400, 200, 2)}
                  stroke="#660000"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
              
              {/* Service Points - Horizontal layout */}
              {services.map((service, index) => {
                const x = (index / (services.length - 1)) * 350 + 25
                const y = 100 + Math.sin((index / (services.length - 1)) * 2 * Math.PI * 2) * 50
                
                return (
                  <div
                    key={service.name}
                    className={`position-absolute d-flex flex-column align-items-center timeline-point ${isOpen ? 'animate-in' : ''}`}
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                      width: '80px'
                    }}
                  >
                    <div 
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white mb-2"
                      style={{ width: '44px', height: '44px', fontSize: '12px', fontWeight: 'bold' }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-center">
                      <div className="small fw-bold text-dark" style={{ fontSize: '11px' }}>
                        {service.name}
                      </div>
                      <div className="text-muted" style={{ fontSize: '10px' }}>
                        {service.duration}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Drawer slides down (only on mobile) */}
      <div ref={collapseRef} className="collapse d-lg-none">
        <div className="card card-body mt-3 bg-light border-0">
          <h5 className="text-primary mb-4 text-center">Service Timeline</h5>
          <div className="position-relative" style={{ height: '300px', overflow: 'hidden' }}>
            {/* Sin Wave SVG */}
            <svg 
              width="100%" 
              height="300" 
              className="position-absolute timeline-svg"
              style={{ top: 0, left: 0 }}
            >
              <path
                d={generateSinWavePath(300, 300, 3)}
                stroke="#660000"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
            </svg>
            
            {/* Service Points */}
            {services.map((service, index) => {
              const x = (index / (services.length - 1)) * 280 + 10
              const y = 150 + Math.sin((index / (services.length - 1)) * 3 * Math.PI * 2) * 75
              
              return (
                <div
                  key={service.name}
                  className={`position-absolute d-flex flex-column align-items-center timeline-point ${isOpen ? 'animate-in' : ''}`}
                  style={{ 
                    left: `${x}px`, 
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                    width: '80px'
                  }}
                >
                  <div 
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white mb-2"
                    style={{ width: '40px', height: '40px', fontSize: '12px', fontWeight: 'bold' }}
                  >
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <div className="small fw-bold text-dark" style={{ fontSize: '10px' }}>
                      {service.name}
                    </div>
                    <div className="text-muted" style={{ fontSize: '9px' }}>
                      {service.duration}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export const HeroSection: FC<HeroSectionProps> = ({ onNavigate }) => {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null)

  const handleNavigate = (section: 'services' | 'contact') => {
    if (onNavigate) {
      onNavigate(section)
    } else {
      const targetSection = document.getElementById(section)
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleDrawerToggle = (drawerName: string) => {
    setOpenDrawer(openDrawer === drawerName ? null : drawerName)
  }

  // Dummy service data
  const webSolutionsServices = [
    { name: 'Discovery', duration: '1-2 days', phase: 1 },
    { name: 'Design', duration: '3-5 days', phase: 2 },
    { name: 'Development', duration: '1-2 weeks', phase: 3 },
    { name: 'Testing', duration: '2-3 days', phase: 4 },
    { name: 'Launch', duration: '1 day', phase: 5 },
    { name: 'Support', duration: 'Ongoing', phase: 6 }
  ]

  const cybersecurityServices = [
    { name: 'Assessment', duration: '1 week', phase: 1 },
    { name: 'Analysis', duration: '3-5 days', phase: 2 },
    { name: 'Strategy', duration: '1 week', phase: 3 },
    { name: 'Implementation', duration: '2-4 weeks', phase: 4 },
    { name: 'Monitoring', duration: 'Ongoing', phase: 5 },
    { name: 'Compliance', duration: 'Quarterly', phase: 6 }
  ]

  return (
    <SectionWrapper id="hero" className="bg-light text-dark py-5">
      <div className="container">
        {/* Hero Content */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-4">
              Website Design | No-Code Automation | Digital Growth
            </h1>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              We deliver clean, professional, and user-friendly solutions leveraging cutting-edge AI tools to bring you exceptional results—faster.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <Button
                variant="cta"
                onClick={() => handleNavigate('contact')}
                label="Discuss Your Vision"
                className="btn-lg px-4 py-3"
                style={{ minHeight: '44px' }}
              />
              <Button
                variant="secondary"
                onClick={() => handleNavigate('services')}
                label="View Our Services"
                className="btn-lg px-4 py-3"
                style={{ minHeight: '44px' }}
              />
            </div>
          </div>
        </div>

        {/* Service Drawers */}
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Solution Areas</h2>
          </div>
        </div>

        <div className="row">
          {/* Web Solutions */}
          <div className="col-12 mb-4">
            <ServiceDrawer
              title="Web Solutions"
              isOpen={openDrawer === 'web'}
              onToggle={() => handleDrawerToggle('web')}
              services={webSolutionsServices}
            />
          </div>

          {/* Cybersecurity and Data */}
          <div className="col-12 mb-4">
            <ServiceDrawer
              title="Cybersecurity and Data"
              isOpen={openDrawer === 'cyber'}
              onToggle={() => handleDrawerToggle('cyber')}
              services={cybersecurityServices}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted mb-3">
              <strong>Ready to transform your digital presence?</strong>
            </p>
            <Button
              variant="cta"
              onClick={() => handleNavigate('contact')}
              label="Get Started Today"
              className="btn-lg px-5 py-3"
              style={{ minHeight: '44px' }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
