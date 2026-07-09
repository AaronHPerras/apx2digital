import React, { useState } from 'react'
import { ContactModal } from './ContactModal'
import logo from '../assets/logo.png'
import './LandingPage.scss'

const values: { icon: string; title: string; body: React.ReactNode }[] = [
  {
    icon: '⚙️',
    title: 'Close the deal. We\'ll build the rest.',
    body: "Grow what you deliver without growing your overhead. Get the results of expensive tooling without buying it.",
  },
  {
    icon: '🛠️',
    title: 'Stop Running on Spreadsheets and Gut Instinct',
    body: 'Better systems. Flat monthly. No agency markup. No expensive tools. Just a team that builds it and keeps it working.',
  },
  {
    icon: '🤖',
    title: 'Is AI Right for Your Workplace?',
    body: "Not every problem needs AI. I help you figure out where it makes sense, then build practical integrations that deliver real results.",
  },
  {
    icon: '📊',
    title: 'Do You Know the Risks You\'re Taking with AI?',
    body: 'We will teach you how to use AI responsibly and safely, and build systems that protect your business from the risks of accidental misuse.',
  },
]

export const LandingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="lp-page">
      <header className="lp-header">
        <img src={logo} alt="APX2Digital" className="lp-logo" />
        <button className="lp-header-btn" onClick={() => setModalOpen(true)}>
          Get in touch
        </button>
      </header>

      <main className="lp-main">
        <section className="lp-hero">
          <span className="lp-tag">Automation & AI Consulting</span>
          <h1 className="lp-h1">Your systems should run without you.</h1>
          <p className="lp-lead">
            I build and manage the automations, integrations, and dashboards your business needs. You can stop being the glue holding everything together.
          </p>
          <button className="lp-cta" onClick={() => setModalOpen(true)}>
            Let's Talk About Your Project
          </button>
        </section>

        <section className="lp-values">
          <div className="lp-values-inner">
            {values.map(v => (
              <div key={v.title} className="lp-card">
                <div className="lp-card-icon">{v.icon}</div>
                <div className="lp-card-title">{v.title}</div>
                <div className="lp-card-body">{v.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="lp-cta-section">
          <h2 className="lp-cta-h2">Ready to reclaim your time?</h2>
          <p className="lp-cta-sub">Tell me what you're working on. No obligation — just a conversation.</p>
          <button className="lp-cta" onClick={() => setModalOpen(true)}>
            Start the Conversation
          </button>
        </section>
      </main>

      <footer className="lp-footer">
        <p>© {new Date().getFullYear()} APX2Digital &nbsp;·&nbsp;</p>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
