import React from 'react'
import { TechStackItem, StatisticCard } from '../common'

export const AboutSection: React.FC = () => {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold text-dark mb-4">🌟 Why Me?</h2>
            <div className="mb-4">
              <p className="text-muted mb-3">
                <strong className="text-dark">20+ years</strong> of creative, hands-on problem solving in software & product
              </p>
              <p className="text-muted mb-3">
                <strong className="text-dark">Deep experience</strong> in cutting-edge AI tools—deliver more, faster
              </p>
              <p className="text-muted mb-3">
                <strong className="text-dark">Process focused:</strong> zero "dev agency" headaches, zero ongoing commitments
              </p>
              <p className="text-muted mb-0">
                <strong className="text-dark">You own what's built</strong>—all code & assets handed off
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="text-center">
              <h4 className="fw-bold text-dark mb-4">Tech I Work With</h4>
              <div className="row g-4">
                <TechStackItem icon="⚛️" label="React" />
                <TechStackItem icon="🟦" label="TypeScript" />
                <TechStackItem icon="🤖" label="AI Tools" />
                <TechStackItem icon="🔗" label="APIs" />
                <TechStackItem icon="⚡" label="No-Code" />
                <TechStackItem icon="🚀" label="Rapid Dev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
