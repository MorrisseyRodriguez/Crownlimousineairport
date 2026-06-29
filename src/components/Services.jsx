import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'LAX Airport Transportation',
    body: 'Professional pickups and drop-offs at all LAX terminals. Flight tracking included. No rideshare chaos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Burbank Airport Transportation',
    body: 'Convenient transportation to and from Bob Hope Airport serving the San Fernando Valley and surrounding communities.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Long Beach Airport Transportation',
    body: 'Reliable airport transfers serving LGB and the South Bay, Long Beach, and Orange County areas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Ontario Airport Transportation',
    body: 'Professional transportation serving Ontario International Airport and the Inland Empire region.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'Private Aviation Transportation',
    body: 'Dedicated ground transportation for private terminals, FBOs, and executive aviation throughout Southern California.',
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
    title: 'Group Airport Transfers',
    body: 'Coordinated group airport transportation for corporate teams, families, wedding parties, and event groups.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-header">
          <p className="section-label">Airports We Serve</p>
          <div className="divider" />
          <h2 id="services-heading" className="section-title reveal">
            Airport Transportation Throughout Southern California
          </h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="service-card-icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-body">{s.body}</p>
              <div className="service-card-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
