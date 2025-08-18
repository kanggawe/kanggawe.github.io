import React from 'react'

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries.</p>
      
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message"></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
    </div>
  )
}

export default Contact
