import busyAirport from '../Images/busyairport.png'
import './Problem.css'

const painPoints = [
  'Navigating LAX rideshare pickup zones while managing luggage.',
  'Driver cancellations and no-shows at the worst possible moment.',
  'Surge pricing that triples your fare during peak hours.',
  'Long waits outside while your family stands on the curb.',
]

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container">
        <div className="problem-header">
          <p className="section-label">The Problem</p>
          <div className="divider" />
          <h2 id="problem-heading" className="section-title reveal">
            Getting To Or From The Airport Shouldn't Be The Hardest Part Of The Trip
          </h2>
        </div>

        <div className="problem-inner">
          <div className="problem-text">
            <p className="section-label problem-label-inline">The Problem</p>
            <div className="divider problem-divider-inline" />
            <h2 className="section-title reveal problem-title-inline">
              Getting To Or From The Airport Shouldn't Be The Hardest Part Of The Trip
            </h2>
            <p className="problem-lead reveal reveal-delay-1">
              You've already navigated check-in, security, and the terminal.<br />
              Your ground transportation shouldn't add to that.
            </p>
            <ul className="problem-list" aria-label="Airport transportation pain points">
              {painPoints.map((p, i) => (
                <li key={i} className={`problem-list-item reveal reveal-delay-${i + 2}`}>
                  <span className="problem-dash" aria-hidden="true">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="problem-conclusion reveal reveal-delay-2">
              <p>The airport is already demanding enough.</p>
              <p>Ground transportation shouldn't add to it.</p>
            </div>
          </div>

          <div className="problem-image-wrap reveal reveal-delay-1">
            <img
              src={busyAirport}
              alt="Crowded airport terminal with travelers and luggage"
              className="problem-photo"
              loading="lazy"
            />
            <div className="problem-image-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
