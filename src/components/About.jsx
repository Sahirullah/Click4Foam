import '../styles/About.css'

function About() {
  const features = [
    { icon: '✓', title: 'Premium Quality', description: 'Certified density and premium durability' },
    { icon: '🚚', title: 'Nationwide Delivery', description: 'Fast shipping across Lahore, Karachi, Islamabad & more' },
    { icon: '✂️', title: 'Custom Cut Sizes', description: 'Get foam cut exactly to your specifications' },
    { icon: '💰', title: 'Wholesale Rates', description: 'Direct factory-to-doorstep pricing' },
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Click4Foam</h2>
        <p className="about-subtitle">Pakistan's Premier Online Foam Portal</p>
        <p className="about-description">
          At Click4Foam, we provide high-grade cushioning, soundproofing, and bedding solutions across Pakistan. With state-of-the-art materials, we offer customized foam cuts for mattresses, sofa cushioning, acoustics, and packaging.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
