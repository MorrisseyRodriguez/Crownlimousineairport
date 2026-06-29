import familyInSUV from '../Images/FamilyinSUV.png'
import './Aspirational.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Aspirational() {
  return (
    <section className="aspirational" aria-labelledby="aspirational-heading">
      <div className="container">
        <div className="aspirational-header">
          <p className="section-label">The Experience</p>
          <div className="divider" />
          <h2 id="aspirational-heading" className="section-title reveal">
            What If The Last Hard Part Of Travel Was Already Handled?
          </h2>
        </div>

        <div className="aspirational-inner">
          <div className="aspirational-image-wrap reveal">
            <img
              src={familyInSUV}
              alt="Professional chauffeur standing beside a luxury vehicle at an airport"
              className="aspirational-photo"
              loading="lazy"
            />
            <div className="aspirational-badge" aria-label="Serving Southern California Since 1994">
              <span className="aspirational-badge-year">1994</span>
              <span className="aspirational-badge-text">Serving SoCal</span>
            </div>
          </div>

          <div className="aspirational-text">
            <p className="section-label aspirational-label-inline">The Experience</p>
            <div className="divider aspirational-divider-inline" />
            <h2 className="section-title reveal aspirational-title-inline">
              What If The Last Hard Part Of Travel Was Already Handled?
            </h2>

            <div className="aspirational-body">
              <p className="aspirational-pull reveal reveal-delay-1">
                Your flight is tracked. Your chauffeur is waiting.
              </p>
              <div className="aspirational-paragraphs reveal reveal-delay-2">
                <p>Your luggage is handled. Your vehicle is ready and waiting at the curb.</p>
                <p>No surge pricing. No confusion. No standing outside wondering where your ride is.</p>
                <p>Just a professional chauffeur exactly where they said they would be , before you even land.</p>
              </div>
              <div className="aspirational-close reveal reveal-delay-3">
                <p className="aspirational-close-strong">Travel should feel this simple.</p>
              </div>
            </div>

            <button className="btn-primary aspirational-cta reveal reveal-delay-3" onClick={scrollToQuote}>
              Book Your Airport Transfer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
