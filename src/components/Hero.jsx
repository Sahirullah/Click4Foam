import { useState, useEffect } from 'react'
import '../styles/Hero.css'
import heroImg1 from '../assets/hero-section.png'
import heroImg2 from '../assets/hero-section1.png'
import heroImg3 from '../assets/hero-section2.png'

function Hero() {
  const images = [heroImg1, heroImg2, heroImg3]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Click4Foam</h1>
        <p className="hero-subtitle">All Types of Foam Available in Pakistan</p>
        <p className="hero-tagline">Premium Quality. Factory Prices. Delivering Nationwide.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <button
        className="slider-arrow left-arrow"
        onClick={handlePrev}
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <button
        className="slider-arrow right-arrow"
        onClick={handleNext}
        aria-label="Next image"
      >
        &#10095;
      </button>
    </section>
  )
}

export default Hero
