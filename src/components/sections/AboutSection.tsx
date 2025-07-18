import React from 'react'
import { TechStackItem, StatisticCard } from '../common'

export const AboutSection: React.FC = () => {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold text-dark mb-4">About APX2Digital</h2>
            <p className="lead text-muted mb-4">
              We're a team of passionate developers and designers who specialize in creating 
              modern web applications that solve real business problems.
            </p>
            <p className="text-muted mb-4">
              With years of experience in full-stack development, we've helped businesses 
              of all sizes transform their operations through custom web solutions. From 
              startups looking to build their first SaaS platform to enterprises needing 
              scalable applications, we deliver results that drive growth.
            </p>
            <div className="row g-4">
              <StatisticCard number="50+" label="Projects Completed" />
              <StatisticCard number="5+" label="Years Experience" />
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="text-center">
              <h4 className="fw-bold text-dark mb-4">Modern Technology Stack</h4>
              <div className="row g-4">
                <TechStackItem icon="⚛️" label="React" />
                <TechStackItem icon="🟦" label="TypeScript" />
                <TechStackItem icon="🔷" label=".NET" />
                <TechStackItem icon="🐘" label="PostgreSQL" />
                <TechStackItem icon="☁️" label="Azure" />
                <TechStackItem icon="🐳" label="Docker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
