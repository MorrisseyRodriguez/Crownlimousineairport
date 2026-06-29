import { useState, useRef, useEffect, useCallback } from 'react'
import yelpLogo from '../Logo/download.png'
import './Reviews.css'

const reviews = [
  {
    text: "This is the second time I have used Crown and both times I was extremely satisfied. When arriving at LAX with multiple suitcases from a long trip, it's so nice to have a curbside pickup. The drivers have always been prompt and accommodating.",
    name: "Vickie Walker",
    meta: "2 reviews · a year ago",
    stars: 5,
  },
  {
    text: "Fast, easy process during booking ... even though I booked last minute. Very professional and service was amazing. The driver was super nice and flexible. Thank you all!!",
    name: "Esfeidy Search",
    meta: "3 reviews · 11 months ago",
    stars: 5,
  },
  {
    text: "Crown Limousine provides, consistent, extraordinary customer service. The drivers are prompt, courteous, friendly, and the rides are quite enjoyable.",
    name: "clammusselhead",
    meta: "6 reviews · 5 months ago",
    stars: 5,
  },
  {
    text: "I picked this company randomly over many choices. The cars were clean, the drivers professional and courteous. The drivers were there even a few minutes early and texted upon their arrival. I would definitely use again in the future.",
    name: "Erin Keen",
    meta: "9 reviews · 9 months ago",
    stars: 5,
  },
  {
    text: "Outstanding Experience & Service!!! We have been using Crown Limo pretty much from the day they launched. We will only use them. Their front end from booking to dispatch is an excellent experience. Very professional and accommodating. Their drivers are experienced and professional. The drivers always show up a little early which is fantastic. Better early than late. The vehicles are in beautiful condition, clean and well kept. No smoking allowed, thank you Crown. I do not use Uber or Lift because I do not feel safe or secure. Crown Limo hires experienced professionals, and this is worth the cost and peace of mind I get. THANKS team!!",
    name: "Celia Margison",
    meta: "Local Guide · 34 reviews · 6 years ago",
    stars: 5,
  },
]

const Stars = ({ count }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
)

export default function Reviews() {
  const [active, setActive] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const startXRef = useRef(null)
  const isDraggingRef = useRef(false)

  const prev = useCallback(() => setActive(a => (a - 1 + reviews.length) % reviews.length), [])
  const next = useCallback(() => setActive(a => (a + 1) % reviews.length), [])

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.getBoundingClientRect().width)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX
    isDraggingRef.current = true
  }

  const onTouchEnd = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const onMouseDown = (e) => {
    startXRef.current = e.clientX
    isDraggingRef.current = true
  }

  const onMouseUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const translateX = cardWidth ? -(active * (cardWidth + 28)) : 0

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Client Reviews</p>
          <div className="divider" />
          <h2 id="reviews-heading" className="section-title reveal">
            What Travelers Say About Crown Airport Transportation
          </h2>
        </div>
      </div>

      <div
        className="reviews-carousel"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        role="region"
        aria-label="Customer reviews carousel"
        aria-live="polite"
      >
        <div className="reviews-track" style={{ transform: `translateX(${translateX}px)` }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              className={`review-card${i === active ? ' review-card--active' : ''}`}
              role="article"
              aria-hidden={i !== active}
            >
              <Stars count={r.stars} />
              <blockquote className="review-text">"{r.text}"</blockquote>
              <div className="review-author">
                <div className="review-author-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="review-author-name">{r.name}</p>
                  {r.meta && <p className="review-author-title">{r.meta}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="reviews-controls">
          <button
            className="reviews-arrow"
            onClick={prev}
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="reviews-dots" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`reviews-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="reviews-arrow"
            onClick={next}
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="reviews-platforms">
          <p className="reviews-platforms-label">READ OUR REVIEWS ON</p>
          <div className="reviews-platform-buttons">
            <a
              href="https://share.google/45bGCU7ezNMWlrIMo"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
              aria-label="Read our reviews on Google"
            >
              <svg className="reviews-google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google</span>
            </a>
            <a
              href="https://www.yelp.com/biz/crown-limousine-la-los-angeles-3"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
              aria-label="Read our reviews on Yelp"
            >
              <img src={yelpLogo} alt="" className="reviews-yelp-icon" aria-hidden="true" />
              <span>Yelp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
