import React, { useState } from 'react'
import { ContactModal } from './ContactModal'

const RED = '#7b1225'
const GREY = '#3a3a3a'
const GREY_LIGHT = '#6b6b6b'
const GREY_BG = '#f5f5f5'

const values = [
  {
    icon: '⚙️',
    title: 'Process Automation',
    body: 'Eliminate repetitive work with custom workflows. From data syncing to multi-step pipelines, I build automations that run in the background while you focus on what matters.',
  },
  {
    icon: '🤖',
    title: 'Is AI Right for Your Project?',
    body: "Not every problem needs AI. I help you figure out where it makes sense, then build practical integrations that deliver real results.",
  },
  {
    icon: '🛠️',
    title: 'Custom Software, Built for You',
    body: "Off-the-shelf tools don't always fit. I build lightweight, tailored applications for small businesses; practical solutions designed around your workflow, not the other way around.",
  },
]

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  header: {
    padding: '1.25rem 2rem',
    borderBottom: '1px solid #ebebeb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { fontWeight: 700, fontSize: '1.1rem', color: RED, letterSpacing: '-0.02em' },
  headerBtn: {
    padding: '0.5rem 1.25rem',
    background: 'none',
    border: `1.5px solid ${RED}`,
    borderRadius: '3px',
    color: RED,
    fontWeight: 500,
    fontSize: '0.9rem',
    cursor: 'pointer',
    minHeight: '36px',
    transition: 'background 0.15s, color 0.15s',
  },
  main: { flex: 1 },
  hero: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '5rem 2rem 4rem',
    textAlign: 'center',
  },
  tag: {
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: RED,
    marginBottom: '1.25rem',
  },
  h1: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 700,
    color: GREY,
    lineHeight: 1.2,
    marginBottom: '1.25rem',
  },
  accent: { color: RED },
  lead: {
    fontSize: '1.125rem',
    color: GREY_LIGHT,
    lineHeight: 1.7,
    maxWidth: '580px',
    margin: '0 auto 2.25rem',
  },
  cta: {
    display: 'inline-block',
    padding: '0.875rem 2.25rem',
    background: RED,
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    minHeight: '48px',
    transition: 'background 0.15s',
    letterSpacing: '0.01em',
  },
  values: {
    background: GREY_BG,
    padding: '4rem 2rem',
  },
  valuesInner: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '4px',
    borderTop: `3px solid ${RED}`,
  },
  cardIcon: { fontSize: '1.75rem', marginBottom: '0.875rem' },
  cardTitle: {
    fontWeight: 700,
    fontSize: '1.05rem',
    color: GREY,
    marginBottom: '0.625rem',
  },
  cardBody: { fontSize: '0.95rem', color: GREY_LIGHT, lineHeight: 1.65, margin: 0 },
  ctaSection: {
    padding: '4.5rem 2rem',
    textAlign: 'center',
  },
  ctaH2: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 700,
    color: GREY,
    marginBottom: '1rem',
  },
  ctaSub: {
    color: GREY_LIGHT,
    marginBottom: '2rem',
    fontSize: '1rem',
  },
  footer: {
    borderTop: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    color: GREY_LIGHT,
    fontSize: '0.875rem',
  },
}

export const LandingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const ctaHover = (e: React.MouseEvent<HTMLButtonElement>, hovered: boolean) => {
    (e.currentTarget as HTMLButtonElement).style.background = hovered ? '#5e0d1b' : RED
  }

  const headerBtnHover = (e: React.MouseEvent<HTMLButtonElement>, hovered: boolean) => {
    const btn = e.currentTarget as HTMLButtonElement
    btn.style.background = hovered ? RED : 'none'
    btn.style.color = hovered ? '#fff' : RED
  }

  return (
    <div style={s.page}>
      <header style={s.header}>
        <span style={s.logo}>APX2Digital</span>
        <button
          style={s.headerBtn}
          onClick={() => setModalOpen(true)}
          onMouseEnter={e => headerBtnHover(e, true)}
          onMouseLeave={e => headerBtnHover(e, false)}
        >
          Get in touch
        </button>
      </header>

      <main style={s.main}>
        {/* Hero */}
        <section style={s.hero}>
          <span style={s.tag}>Automation & AI Consulting</span>
          <h1 style={s.h1}>
            Stop doing things manually.<br />
            <span style={s.accent}>Start scaling smarter.</span>
          </h1>
          <p style={s.lead}>
            I help businesses save time and grow by building reliable automation workflows
            and figuring out where AI genuinely fits — no hype, just practical solutions.
          </p>
          <button
            style={s.cta}
            onClick={() => setModalOpen(true)}
            onMouseEnter={e => ctaHover(e, true)}
            onMouseLeave={e => ctaHover(e, false)}
          >
            Let's Talk About Your Project
          </button>
        </section>

        {/* Value Props */}
        <section style={s.values}>
          <div style={s.valuesInner}>
            {values.map(v => (
              <div key={v.title} style={s.card}>
                <div style={s.cardIcon}>{v.icon}</div>
                <div style={s.cardTitle}>{v.title}</div>
                <p style={s.cardBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={s.ctaSection}>
          <h2 style={s.ctaH2}>Ready to reclaim your time?</h2>
          <p style={s.ctaSub}>Tell me what you're working on. No obligation — just a conversation.</p>
          <button
            style={s.cta}
            onClick={() => setModalOpen(true)}
            onMouseEnter={e => ctaHover(e, true)}
            onMouseLeave={e => ctaHover(e, false)}
          >
            Start the Conversation
          </button>
        </section>
      </main>

      <footer style={s.footer}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} APX2Digital &nbsp;·&nbsp;
          {/* <a href="mailto:hello@apx2digital.com" style={{ color: RED }}>hello@apx2digital.com</a> */}
        </p>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

