import { useState, useEffect, useRef } from 'react'
import './Fleet.css'

import xtsExt from '../Fleet/Cadillac XTS/xts.webp'
import xtsInt from '../Fleet/Cadillac XTS/xts-int.webp'
import teslaSExt from '../Fleet/Tesla S Model/tesla-s.webp'
import teslaSInt from '../Fleet/Tesla S Model/tesla-s-int.webp'
import escaladeExt from '../Fleet/Cadillac Escalade/escalade.webp'
import escaladeInt from '../Fleet/Cadillac Escalade/escalade-int.webp'
import teslaYExt from '../Fleet/Tesla Y Model/tesla-y.webp'
import teslaYInt from '../Fleet/Tesla Y Model/tesla-y-int.webp'
import sprinterExt from '../Fleet/Mercedes Sprinter Van/sprinter-van.webp'
import sprinterInt from '../Fleet/Mercedes Sprinter Van/sprinter-van-int.webp'
import mktExt from '../Fleet/MKT Stretch Limousine/mkt-limo.webp'
import mktInt from '../Fleet/MKT Stretch Limousine/mkt-limo-int.webp'
import partyBusExt from '../Fleet/Party bus/party-bus.webp'
import partyBusInt from '../Fleet/Party bus/party-bus-int.jpg'
import charterExt from '../Fleet/Executive Charter Bus/charter-bus.webp'
import charterInt from '../Fleet/Executive Charter Bus/charter-bus-int.webp'

const vehicles = [
  {
    class: 'Tesla Model S',
    label: 'Business Travelers',
    models: 'Perfect For: Business Travelers · Executive Airport Transfers',
    exterior: teslaSExt,
    interior: teslaSInt,
    features: [
      'Fits up to 3 passengers',
      'Zero emissions, whisper-quiet cabin',
      'Ideal for the discerning business traveler',
    ],
  },
  {
    class: 'Cadillac XTS',
    label: 'Executive Airport Transfers',
    models: 'Perfect For: Executive Travel · Business Meetings · Airport Transfers',
    exterior: xtsExt,
    interior: xtsInt,
    features: [
      'Fits up to 3 passengers',
      'Sleek, professional sedan',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Cadillac Escalade',
    label: 'Families & VIP Travelers',
    models: 'Perfect For: Families · VIP Travelers · Small Groups',
    exterior: escaladeExt,
    interior: escaladeInt,
    features: [
      'Fits up to 6 passengers',
      'Generous luggage capacity',
      'Most popular for family airport transfers',
    ],
  },
  {
    class: 'Tesla Model Y',
    label: 'Families & Small Groups',
    models: 'Perfect For: Families · Small Groups · Eco-Conscious Travelers',
    exterior: teslaYExt,
    interior: teslaYInt,
    features: [
      'Fits up to 5 passengers',
      'Zero emissions, premium SUV comfort',
      'Spacious for families with luggage',
    ],
  },
  {
    class: 'Mercedes Sprinter Van',
    label: 'Groups & Airport Teams',
    models: 'Perfect For: Corporate Groups · Airport Teams · Family Groups',
    exterior: sprinterExt,
    interior: sprinterInt,
    features: [
      'Fits up to 12 passengers',
      'Ample luggage space for the whole group',
      'Available for airport transfers throughout LA',
    ],
  },
  {
    class: 'MKT Stretch Limousine',
    label: 'VIP Airport Arrivals',
    models: 'Perfect For: VIP Arrivals · Special Occasions · Corporate Clients',
    exterior: mktExt,
    interior: mktInt,
    features: [
      'Fits up to 8 passengers',
      'Make an impression on arrival',
      'Available for special occasion airport transfers',
    ],
  },
  {
    class: 'Party Bus',
    label: 'Large Group Transportation',
    models: 'Perfect For: Large Groups · Corporate Events · Group Airport Transfers',
    exterior: partyBusExt,
    interior: partyBusInt,
    features: [
      'Fits large groups comfortably',
      'Keep the entire group together',
      'Available for group airport transfers',
    ],
  },
  {
    class: 'Executive Charter Bus',
    label: 'Large Group Transportation',
    models: 'Perfect For: Large Groups · Corporate Travel · Conference Groups',
    exterior: charterExt,
    interior: charterInt,
    features: [
      'Fits large groups comfortably',
      'Organized group airport transportation',
      'Available throughout Southern California',
    ],
  },
]

function FleetCard({ v }) {
  const [showInterior, setShowInterior] = useState(false)

  return (
    <div className="fleet-card">
      <div className="fleet-card-img">
<img
          src={showInterior ? v.interior : v.exterior}
          alt={`${v.class} ${showInterior ? 'interior' : 'exterior'}`}
          className="fleet-card-photo"
          draggable={false}
          loading="lazy"
        />
        <button
          className="fleet-img-arrow fleet-img-arrow--left"
          aria-label="Show exterior"
          onClick={() => setShowInterior(false)}
          disabled={!showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="fleet-img-arrow fleet-img-arrow--right"
          aria-label="Show interior"
          onClick={() => setShowInterior(true)}
          disabled={showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="fleet-img-dots" aria-hidden="true">
          <span className={`fleet-img-dot${!showInterior ? ' fleet-img-dot--active' : ''}`} />
          <span className={`fleet-img-dot${showInterior ? ' fleet-img-dot--active' : ''}`} />
        </div>
      </div>

      <div className="fleet-card-body">
        <h3 className="fleet-card-name">{v.class}</h3>
        <p className="fleet-card-models">{v.models}</p>
        <div className="fleet-card-divider" />
        <ul className="fleet-card-features">
          {v.features.map((f, fi) => (
            <li key={fi} className="fleet-card-feature">
              <svg
                className="fleet-check"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Fleet() {
  const [page, setPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(2)
  const touchStartX = useRef(null)
  const mouseStartX = useRef(null)

  useEffect(() => {
    const update = () => {
      const cpp = window.innerWidth <= 640 ? 1 : 2
      setCardsPerPage(cpp)
      setPage(0)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(vehicles.length / cardsPerPage)

  const goPrev = () => setPage(p => Math.max(0, p - 1))
  const goNext = () => setPage(p => Math.min(totalPages - 1, p + 1))

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    touchStartX.current = null
  }
  const onMouseDown = (e) => { mouseStartX.current = e.clientX }
  const onMouseUp = (e) => {
    if (mouseStartX.current === null) return
    const diff = mouseStartX.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    mouseStartX.current = null
  }

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <div className="fleet-header reveal">
          <h2 id="fleet-heading" className="fleet-heading">
            The Right Vehicle For Every Airport Transfer
          </h2>
        </div>
      </div>

      <div
        className="fleet-carousel-outer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div
          className="fleet-carousel-track"
          style={{
            transform: `translateX(calc(-1 * ${page * cardsPerPage} * (var(--fleet-card-w) + var(--fleet-gap))))`,
          }}
        >
          {vehicles.map((v, i) => (
            <FleetCard key={i} v={v} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="fleet-pagination">
          <button
            className="fleet-page-arrow"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`fleet-page-num${page === i ? ' fleet-page-num--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="fleet-page-arrow"
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
