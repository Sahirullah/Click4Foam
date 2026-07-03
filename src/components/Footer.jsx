import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#about">Company Info</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#products">Shop</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@click4foam.pk</p>
          <p>Phone: +92 (300) 123-4567</p>
          <p>WhatsApp: +92 300 1234567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Click4Foam Pakistan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
