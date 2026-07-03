import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Locations from './components/Locations'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Locations />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
