import '../styles/Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add form submission logic here
    alert('Thank you for your message. We will get back to you soon!')
    e.target.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+923001234567">+92 300 1234567</a></p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:info@click4foam.com">info@click4foam.com</a></p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>Your Company Address Here</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
