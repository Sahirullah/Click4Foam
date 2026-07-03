import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🧽</span>
          <span className="logo-text">Click4Foam</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#products">Products</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
