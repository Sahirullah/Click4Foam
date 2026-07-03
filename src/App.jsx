import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Locations from './components/Locations'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

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
        <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.56.934-2.846 2.243-3.749 3.645-.872 1.352-1.286 2.821-1.286 4.302 0 .552.047 1.101.14 1.64C1.1 20.126 0 24 0 24l4.26-1.408c1.495.411 3.022.625 4.56.625 5.051 0 9.248-3.939 10.24-9.231.61-3.15.445-6.694-1.186-9.778-.934-1.725-2.306-3.283-3.897-4.377C14.632 1.077 12.545.56 10.051.56z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
