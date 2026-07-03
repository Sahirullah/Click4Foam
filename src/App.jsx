import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Locations from './components/Locations'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import whatsappBtnImg from './assets/Whatsapp-btn.avif'

function App() {
  const whatsappNumber = '923001234567'
  const whatsappMessage = 'Hello Click4Foam, I would like to inquire about your products.'

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Locations />
      <Reviews />
      <Footer />
      
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <img src={whatsappBtnImg} alt="WhatsApp" className="whatsapp-button-img" />
      </a>
    </div>
  )
}

export default App
