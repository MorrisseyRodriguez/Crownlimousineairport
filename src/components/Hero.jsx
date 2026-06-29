import airportHero from '../Images/AirportHero.png'
import './Hero.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img
          src={airportHero}
          alt="Professional chauffeur greeting a traveler at an airport with luggage"
          className="hero-bg-img"
          fetchpriority="high"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Crown Limousine LA , Airport Transportation</p>
        <h1 id="hero-heading" className="hero-title">
          Your Flight Lands. Your Chauffeur Is Already There.
        </h1>
        <p className="hero-subtitle">
          Professional airport transportation serving LAX, BUR, LGB, ONT, and VNY. Flight tracking, professional chauffeurs, and reliable service throughout Southern California since 1994.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hero-btn" onClick={scrollToQuote}>
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
