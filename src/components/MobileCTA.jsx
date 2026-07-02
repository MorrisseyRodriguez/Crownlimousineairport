import { useState } from 'react'
import './MobileCTA.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
]

const serviceItems = [
  'LAX Airport Transportation',
  'Burbank Airport Transportation',
  'Long Beach Airport Transportation',
  'Ontario Airport Transportation',
  'Private Aviation Transportation',
  'Group Airport Transfers',
]

export default function MobileCTA() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeDrawer = () => {
    setDrawerOpen(false)
    setServicesOpen(false)
  }

  const handleQuote = () => {
    closeDrawer()
    scrollToQuote()
  }

  return (
    <>
      {/* Navigation drawer */}
      <div
        className={`mob-drawer${drawerOpen ? ' mob-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="mob-drawer-nav">
          {/* Services accordion */}
          <div className="mob-drawer-accordion">
            <button
              className="mob-drawer-accordion-trigger"
              onClick={() => setServicesOpen(o => !o)}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <svg
                className={`mob-drawer-chevron${servicesOpen ? ' mob-drawer-chevron--open' : ''}`}
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div className={`mob-drawer-accordion-body${servicesOpen ? ' mob-drawer-accordion-body--open' : ''}`}>
              {serviceItems.map((s, i) => (
                <a key={i} href="#services" className="mob-drawer-sub-link" onClick={closeDrawer}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map(l => (
            <a key={l.label} href={l.href} className="mob-drawer-link" onClick={closeDrawer}>
              {l.label}
            </a>
          ))}

          <div className="mob-drawer-cta-wrap">
            <button className="btn-primary mob-drawer-cta" onClick={handleQuote}>
              Book Your Airport Transfer
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div className="mob-drawer-backdrop" onClick={closeDrawer} aria-hidden="true" />
      )}

      {/* 3-button bottom bar */}
      <div className="mob-bar" role="navigation" aria-label="Mobile quick actions">
        {/* Menu */}
        <button
          className={`mob-bar-btn${drawerOpen ? ' mob-bar-btn--active' : ''}`}
          onClick={() => setDrawerOpen(o => !o)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span className="mob-bar-icon-wrap">
            {drawerOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </span>
          <span className="mob-bar-label">Menu</span>
        </button>

        {/* Get Quote — primary center action */}
        <button
          className="mob-bar-btn mob-bar-btn--primary"
          onClick={handleQuote}
          aria-label="Get a quote"
        >
          <span className="mob-bar-icon-wrap mob-bar-icon-wrap--primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span className="mob-bar-label mob-bar-label--primary">Get Quote</span>
        </button>

        {/* Call */}
        <a
          href="tel:+13109478898"
          className="mob-bar-btn"
          aria-label="Call us"
        >
          <span className="mob-bar-icon-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span className="mob-bar-label">Call</span>
        </a>
      </div>
    </>
  )
}
