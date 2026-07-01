import { useState } from 'react'
import './QuoteForm.css'

const serviceTypes = [
  'Airport (to or from)',
  'Hourly (as directed)',
]

const vehicleTypes = [
  'Cadillac XTS (1–3 passengers)',
  'Tesla S Model (1–3 passengers)',
  'Tesla Y Model (1–4 passengers)',
  'Cadillac Escalade (1–6 passengers)',
  'MKT Stretch Limousine (up to 8 passengers)',
  'Mercedes Sprinter Van (up to 14 passengers)',
  'Party Bus (up to 20 passengers)',
  'Executive Charter Bus (up to 55 passengers)',
  'Not Sure — Help Me Choose',
]

const transferTypes = [
  'Airport Arrival (Pickup)',
  'Airport Departure (Drop-off)',
  'Round Trip',
]

const defaultForm = {
  campaignType: 'Airport Transportation',
  name: '',
  phone: '',
  email: '',
  date: '',
  airport: '',
  vehicleType: '',
  transferType: '',
  passengers: '',
  pickup: '',
  destination: '',
  notes: '',
}

export default function QuoteForm() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const encode = (data) =>
    new URLSearchParams(data).toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'airport-transfer-request',
          campaignType: 'Airport Transportation',
          ...form,
        }),
      })
    } catch (error) {
      console.warn('Netlify submission failed (only works on deployed Netlify URLs):', error)
    }

    const templateParams = {
      campaignType: 'Airport Transportation',
      name: form.name || 'Not provided',
      phone: form.phone || 'Not provided',
      email: form.email || 'Not provided',
      date: form.date || 'Not provided',
      serviceType: form.airport || 'Not provided',
      vehicleType: form.vehicleType || 'Not provided',
      passengers: form.passengers || 'Not provided',
      pickup: form.pickup || 'Not provided',
      destination: form.destination || 'Not provided',
      notes: [
        form.transferType ? `Transfer Type: ${form.transferType}` : '',
        form.notes ? `Notes: ${form.notes}` : '',
      ].filter(Boolean).join('\n') || 'None',
    }

    try {
      await emailjs.send(
        'service_3ft34fv',
        'template_xpozite',
        templateParams,
        'OZo1S52ylqKZv5AWM'
      )
      setSubmitted(true)
      setForm(defaultForm)
    } catch (error) {
      console.error('EmailJS submission failed:', error)
      alert('Submission failed')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="quote-section" id="quote" aria-labelledby="quote-heading">
        <div className="container">
          <div className="quote-success">
            <div className="quote-success-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="quote-success-title">Your Transfer Is Being Arranged</h2>
            <p className="quote-success-body">
              Your airport transfer request has been received. A member of the Crown Limousine LA team will confirm your booking shortly.
            </p>
            <button className="btn-outline" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-section" id="quote" aria-labelledby="quote-heading">
      <div className="container">
        <div className="quote-inner">
          <div className="quote-text">
            <p className="section-label">Book Your Transfer</p>
            <div className="divider" />
            <h2 id="quote-heading" className="section-title">
              Book Your Airport Transfer
            </h2>
            <p className="section-subtitle">
              Tell us about your trip and we'll make sure your transportation is already handled before you travel.
            </p>

            <div className="quote-trust">
              {[
                'Flight Tracking Included',
                'Professional Chauffeurs',
                '1,900+ Reviews',
                'All Major LA Airports',
              ].map((t, i) => (
                <div key={i} className="quote-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="quote-direct">
              <p className="quote-direct-label">Call Or Text Us Directly</p>
              <a href="tel:+13105551994" className="quote-phone">
                (310) 555-1994
              </a>
            </div>
          </div>

          <form
            className="quote-form"
            name="airport-transfer-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Airport transfer booking request"
          >
            <input type="hidden" name="form-name" value="airport-transfer-request" />
            <input type="hidden" name="campaignType" value="Airport Transportation" />
            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="passengers" className="form-label">Group Size</label>
                <input
                  id="passengers"
                  name="passengers"
                  type="number"
                  className="form-input"
                  value={form.passengers}
                  onChange={handleChange}
                  placeholder="1"
                  min="1"
                  max="60"
                />
              </div>
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="phone" className="form-label">Phone <span aria-hidden="true">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(310) 555-0100"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="airport" className="form-label">Service Type <span aria-hidden="true">*</span></label>
                <select
                  id="airport"
                  name="airport"
                  className="form-input form-select"
                  value={form.airport}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select service type</option>
                  {serviceTypes.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  className="form-input form-select"
                  value={form.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">Select vehicle</option>
                  {vehicleTypes.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="transferType" className="form-label">Arrival or Departure</label>
                <select
                  id="transferType"
                  name="transferType"
                  className="form-input form-select"
                  value={form.transferType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  {transferTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="date" className="form-label">Date of Travel</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="form-input"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="pickup" className="form-label">Pickup Location <span aria-hidden="true">*</span></label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                className="form-input"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Home address, hotel, or terminal"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="destination" className="form-label">Destination</label>
              <input
                id="destination"
                name="destination"
                type="text"
                className="form-input"
                value={form.destination}
                onChange={handleChange}
                placeholder="Hotel, home address, or terminal"
              />
            </div>

            <div className="form-field">
              <label htmlFor="notes" className="form-label">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                className="form-input form-textarea"
                value={form.notes}
                onChange={handleChange}
                placeholder="Special requests, number of bags, child seats, preferences…"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className={`btn-primary form-submit${loading ? ' loading' : ''}`}
              disabled={loading}
              aria-label={loading ? 'Submitting your airport transfer request' : 'Submit airport transfer request'}
            >
              {loading ? (
                <>
                  <span className="form-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Book Your Airport Transfer
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
