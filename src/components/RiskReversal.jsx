import './RiskReversal.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    question: 'Flight Delayed?',
    answer: 'We already know. Flight tracking allows us to adjust automatically. Your chauffeur waits based on your actual arrival, not your scheduled one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    question: 'Need A Larger Vehicle?',
    answer: 'Our fleet accommodates everything from solo travelers to large groups. From sedans and SUVs to Sprinter vans and charter buses.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    question: 'Need Immediate Assistance?',
    answer: 'Your chauffeur stays in direct contact with you throughout your trip. Our dispatch team is also available 24/7 — call or text us and a live team member will respond immediately.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    question: 'Concerned About Pricing?',
    answer: 'No surge pricing. No last-minute surprises. Your rate is fixed at the time of booking and confirmed before you travel.',
  },
]

export default function RiskReversal() {
  return (
    <section className="risk" aria-labelledby="risk-heading">
      <div className="container">
        <div className="risk-header">
          <p className="section-label">Peace Of Mind</p>
          <div className="divider" />
          <h2 id="risk-heading" className="section-title reveal">
            What Happens When Plans Change?
          </h2>
</div>

        <div className="risk-grid">
          {cards.map((c, i) => (
            <div key={i} className={`risk-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="risk-card-icon" aria-hidden="true">
                {c.icon}
              </div>
              <h3 className="risk-card-question">{c.question}</h3>
              <p className="risk-card-answer">{c.answer}</p>
            </div>
          ))}
        </div>

        <div className="risk-close reveal">
          <p className="risk-close-text">The only risk is leaving it to chance.</p>
          <button className="btn-primary" onClick={scrollToQuote}>
            Book Your Airport Transfer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
