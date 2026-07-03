import '../styles/Locations.css'

function Locations() {
  const locations = [
    { id: 1, country: 'Lahore', flag: '🇵🇰', address: 'Plot 45-B, Sector C, DHA Phase 6' },
    { id: 2, country: 'Karachi', flag: '🇵🇰', address: 'Showroom 12, Main Khalid Bin Waleed Rd' },
    { id: 3, country: 'Islamabad', flag: '🇵🇰', address: 'Shop 8, G-9 Markaz' },
    { id: 4, country: 'Peshawar', flag: '🇵🇰', address: 'University Road, Opposite KTH' },
    { id: 5, country: 'Faisalabad', flag: '🇵🇰', address: 'P-32, Susan Road, Madina Town' },
    { id: 6, country: 'Multan', flag: '🇵🇰', address: 'Chowk Kumharanwala, Main Multan Road' },
  ]

  return (
    <section className="locations" id="locations">
      <div className="locations-container">
        <h2>Our Locations</h2>
        <p className="locations-subtitle">Visit us around the region</p>
        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-flag">{location.flag}</div>
              <h3>{location.country}</h3>
              <p>{location.address}</p>
              <button className="btn btn-small">Visit Store</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
