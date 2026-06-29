import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Schedule Your Transfer',
    body: 'Book through our quote form or call us directly. Tell us your airport, date, and group size.',
  },
  {
    number: '02',
    title: 'We Track Your Flight',
    body: 'Our system monitors your flight in real time and adjusts automatically for any delays or early arrivals.',
  },
  {
    number: '03',
    title: 'Your Chauffeur Arrives Early',
    body: 'Your chauffeur is at the terminal before you land , uniformed, ready, and holding your name.',
  },
  {
    number: '04',
    title: 'Travel Stress-Free',
    body: 'Your transportation is already handled before your trip even begins.',
  },
]

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function HowItWorks() {
  return (
    <section className="how" aria-labelledby="how-heading">
      <div className="container">
        <div className="how-header">
          <p className="section-label">The Process</p>
          <div className="divider" />
          <h2 id="how-heading" className="section-title reveal">
            Planning Your Airport Transfer Is Simple
          </h2>
        </div>

        <div className="how-steps" role="list">
          {steps.map((s, i) => (
            <div key={i} className={`how-step reveal reveal-delay-${i + 1}`} role="listitem">
              <div className="how-step-left">
                <div className="how-step-num" aria-hidden="true">{s.number}</div>
                {i < steps.length - 1 && <div className="how-step-line" aria-hidden="true" />}
              </div>
              <div className="how-step-content">
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-cta reveal">
          <button className="btn-primary how-cta-btn" onClick={scrollToQuote}>
            Book Your Airport Transfer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
