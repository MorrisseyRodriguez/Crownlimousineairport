import './TravelerRecognition.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const travelerTypes = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: 'Business Travelers',
    title: 'Built For Executives Who Cannot Afford Delays',
    body: 'Professional airport transportation for executives, teams, and business travelers who need reliable transportation that works around demanding schedules.',
    cta: 'Learn More About Corporate Transportation',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Families',
    title: 'More Room, Less Stress, Ready When You Are',
    body: 'More room, less stress, and airport transportation that\'s ready when you are. Let us handle the logistics while you focus on your family.',
    cta: 'Perfect For Family Airport Transfers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: 'Special Events & Visitors',
    title: 'Start The Trip The Right Way',
    body: 'Arriving for a wedding, sporting event, concert, or special occasion? Start the trip the right way with professional transportation already arranged.',
    cta: 'Transportation For Special Occasions',
  },
]

export default function TravelerRecognition() {
  return (
    <section className="traveler" aria-labelledby="traveler-heading">
      <div className="container">
        <div className="traveler-header">
          <p className="section-label">Who We Serve</p>
          <div className="divider" />
          <h2 id="traveler-heading" className="section-title reveal">
            Airport Transportation For Every Traveler
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            Whoever you are, your transportation should already be handled.
          </p>
        </div>

        <div className="traveler-grid">
          {travelerTypes.map((t, i) => (
            <div key={i} className={`traveler-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="traveler-card-icon" aria-hidden="true">
                {t.icon}
              </div>
              <p className="traveler-card-label">{t.label}</p>
              <h3 className="traveler-card-title">{t.title}</h3>
              <p className="traveler-card-body">{t.body}</p>
              <button className="traveler-card-cta" onClick={scrollToQuote}>
                {t.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
