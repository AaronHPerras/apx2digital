import React, { useState, useEffect, useRef } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const s: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem',
  },
  modal: {
    background: '#fff',
    width: '100%',
    maxWidth: '520px',
    borderRadius: '4px',
    padding: '2.5rem',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    lineHeight: 1,
    cursor: 'pointer',
    color: '#6b6b6b',
    padding: '0.25rem',
    minHeight: 'auto',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#3a3a3a',
    marginBottom: '0.5rem',
  },
  sub: {
    color: '#6b6b6b',
    marginBottom: '1.75rem',
    fontSize: '0.95rem',
  },
  label: {
    display: 'block',
    fontWeight: 500,
    marginBottom: '0.375rem',
    fontSize: '0.9rem',
    color: '#3a3a3a',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.625rem 0.875rem',
    border: '1px solid #d0d0d0',
    borderRadius: '3px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#3a3a3a',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.15s',
    marginBottom: '1.25rem',
    minHeight: '44px',
  },
  textarea: {
    display: 'block',
    width: '100%',
    padding: '0.625rem 0.875rem',
    border: '1px solid #d0d0d0',
    borderRadius: '3px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#3a3a3a',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.15s',
    marginBottom: '1.25rem',
    resize: 'vertical',
    minHeight: '120px',
  },
  submit: {
    width: '100%',
    padding: '0.875rem',
    background: '#7b1225',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    minHeight: '48px',
    transition: 'background 0.15s',
  },
  success: {
    textAlign: 'center',
    padding: '1rem 0',
  },
  successIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  successText: {
    fontWeight: 600,
    fontSize: '1.1rem',
    color: '#3a3a3a',
    marginBottom: '0.5rem',
  },
  successSub: {
    color: '#6b6b6b',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
  },
  doneBtn: {
    padding: '0.75rem 2rem',
    background: '#3a3a3a',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    minHeight: '44px',
  },
  error: {
    color: '#7b1225',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  },
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setStatus('idle')
      setForm({ name: '', email: '', message: '' })
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: form.name,
        email: form.email,
        message: form.message,
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#7b1225'
  }
  const inputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#d0d0d0'
  }

  return (
    <div style={s.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Contact form">
      <div style={s.modal} onClick={e => e.stopPropagation()}>
        <button style={s.closeBtn} onClick={onClose} aria-label="Close">×</button>

        {status === 'success' ? (
          <div style={s.success}>
            <div style={s.successIcon}>✓</div>
            <p style={s.successText}>Message sent!</p>
            <p style={s.successSub}>I'll be in touch within 1–2 business days.</p>
            <button style={s.doneBtn} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={s.heading}>Let's talk about your project</h2>
            <p style={s.sub}>Tell me what you're working on and I'll reach out to set up a time to chat.</p>

            {status === 'error' && (
              <p style={s.error}>Something went wrong. Please try again or email me directly.</p>
            )}

            <form onSubmit={handleSubmit} noValidate name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <label style={s.label} htmlFor="name">Name</label>
              <input
                ref={firstInputRef}
                style={s.input}
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                required
                autoComplete="name"
              />

              <label style={s.label} htmlFor="email">Email</label>
              <input
                style={s.input}
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                required
                autoComplete="email"
              />

              <label style={s.label} htmlFor="message">What are you working on?</label>
              <textarea
                style={s.textarea}
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                required
                placeholder="Briefly describe your project or challenge..."
              />

              <button
                type="submit"
                style={{
                  ...s.submit,
                  background: status === 'sending' ? '#a0a0a0' : '#7b1225',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
