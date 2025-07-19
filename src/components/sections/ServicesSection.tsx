import React from 'react'
import { ServiceCard, SectionHeader } from '../common'

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <SectionHeader 
          title="Our Services"
          subtitle="Comprehensive web development solutions for modern businesses"
        />
        
        <div className="row g-4">
          <ServiceCard 
            icon="🌐"
            title="SaaS Development"
            description="Custom SaaS platforms with subscription management, user dashboards, and scalable architecture."
          />
          <ServiceCard 
            icon="🛒"
            title="E-commerce Solutions"
            description="Modern online stores with payment integration, inventory management, and conversion optimization."
          />
          <ServiceCard 
            icon="📊"
            title="Business Applications"
            description="Custom web applications to streamline operations, manage data, and boost productivity."
          />
          <ServiceCard 
            icon="🔗"
            title="API Development"
            description="RESTful APIs and microservices for seamless integration and data exchange."
          />
          <ServiceCard 
            icon="☁️"
            title="Cloud Deployment"
            description="Scalable cloud hosting, DevOps setup, and continuous deployment pipelines."
          />
          <ServiceCard 
            icon="🔧"
            title="Maintenance & Support"
            description="Ongoing maintenance, updates, and technical support to keep your applications running smoothly."
          />
        </div>
      </div>
    </section>
  )
}
