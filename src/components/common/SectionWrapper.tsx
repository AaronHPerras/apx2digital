import { type FC, type ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  id,
  className = '',
  containerClassName = '',
  children
}) => {
  return (
    <section id={id} className={className}>
      <div className={`container ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
