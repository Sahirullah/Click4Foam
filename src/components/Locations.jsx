import '../styles/Locations.css'

function Locations() {
  const reasons = [
    { id: 1, icon: '✓', title: 'Premium Quality', description: 'High-grade foam products meeting international standards' },
    { id: 2, icon: '💰', title: 'Factory Prices', description: 'Direct from manufacturer, best prices guaranteed' },
    { id: 3, icon: '🚚', title: 'Fast Delivery', description: 'Nationwide delivery within 24-48 hours' },
    { id: 4, icon: '👥', title: 'Expert Support', description: 'Knowledgeable team ready to help 24/7' },
    { id: 5, icon: '🔄', title: 'Easy Returns', description: '30-day money-back guarantee on all products' },
    { id: 6, icon: '⭐', title: '5-Star Rated', description: 'Trusted by thousands of satisfied customers' },
  ]

  return (
    <section className="locations" id="why-choose-us">
      <div className="locations-container">
        <h2>Why Choose Us</h2>
        <p className="locations-subtitle">Here's what makes Click4Foam the best choice</p>
        <div className="locations-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="location-card">
              <div className="location-flag">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
