import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Flight Tracking Included',
    body: 'We monitor your flight and adjust automatically for delays. Your chauffeur arrives based on your actual landing time, not your scheduled one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Professional Chauffeurs',
    body: 'Background-checked, professionally trained, and experienced in airport logistics. Every chauffeur arrives uniformed and prepared.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'All Major LA Airports',
    body: 'Serving LAX, BUR, LGB, ONT, VNY, and private aviation terminals throughout Southern California.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24/7/365 Availability',
    body: 'Early morning departures, late night arrivals, weekends, and holidays. We are available whenever your travel schedule requires.',
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
    title: 'Vehicles For Any Group Size',
    body: 'From solo business travelers to large groups. Sedans, SUVs, Sprinter vans, and charter buses are available.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Fixed Transparent Pricing',
    body: 'No surge pricing. No last-minute surprises. Your rate is confirmed when you book and does not change.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-header">
          <p className="section-label">Why Travelers Choose Crown</p>
          <div className="divider" />
          <h2 id="benefits-heading" className="section-title reveal">
            Why Travelers Choose Crown For Airport Transportation
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            Six reasons thousands of Southern California travelers trust Crown for every airport transfer.
          </p>
        </div>

        <div className="benefits-grid benefits-grid--six">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="benefit-card-icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
