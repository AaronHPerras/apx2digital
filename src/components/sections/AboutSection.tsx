import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold text-dark mb-4">Who I Work With</h2>
            <div className="mb-4">
              <h4 className="text-primary mb-3">Automation & AI Agencies</h4>
              <p className="text-muted mb-4">
                When client projects need deeper technical reliability, custom integrations, or escalation support.
              </p>
              
              <h4 className="text-primary mb-3">Small and Mid-Sized Businesses</h4>
              <p className="text-muted mb-0">
                When internal automation, CRM systems, or AI workflows need to move from "working sometimes" to "working consistently and safely."
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <h2 className="display-5 fw-bold text-dark mb-4">How I Fit Into Projects</h2>
            <p className="text-muted mb-3">
              I'm not usually the first builder on a project.
            </p>
            <p className="text-muted mb-3">
              <strong className="text-dark">I'm the specialist teams call when:</strong>
            </p>
            <ul className="text-muted">
              <li className="mb-2">Edge cases appear</li>
              <li className="mb-2">Data integrity becomes critical</li>
              <li className="mb-2">Systems need to scale beyond low-code defaults</li>
              <li className="mb-2">Automation logic needs to be hardened for real-world usage</li>
            </ul>
            <p className="text-muted fst-italic mt-4">
              Think of me as back-of-house technical support for complex workflow systems.
            </p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="fw-bold text-dark mb-4 text-center">Areas I Commonly Work In</h3>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• Workflow automation architecture</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• CRM and system integrations</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• AI-assisted workflow design</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• Data synchronization and reliability</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• Automation debugging and rescue projects</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• Custom scripting and platform extensions</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="mb-0">• Process hardening and failure-proofing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="fw-bold text-dark mb-3 text-center">My Approach</h3>
              <p className="text-muted text-center mb-4">
                Most automation failures aren't tool problems — they're reliability and assumption problems.
              </p>
              <div className="text-muted">
                <p className="mb-2"><strong>My work focuses on:</strong></p>
                <ul>
                  <li className="mb-2">Anticipating failure points</li>
                  <li className="mb-2">Designing for messy real-world data</li>
                  <li className="mb-2">Making workflows observable and recoverable</li>
                  <li className="mb-2">Keeping systems maintainable as they grow</li>
                </ul>
                <p className="text-center mt-4 fst-italic">
                  The goal isn't just to make automation work.<br />
                  <strong>The goal is to make it dependable.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
