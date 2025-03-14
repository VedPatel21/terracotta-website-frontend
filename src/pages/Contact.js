// Contact.js
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact-page" aria-label="Contact Us">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please reach out with any questions.</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Visit</h3>
          <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
          <p>Address: 1234 Some Street, City, State</p>
          <h3>Call</h3>
          <p>+1 (234) 567-8901</p>
          <h3>Email</h3>
          <p>terracotta@example.com</p>
        </div>
        <form className="contact-form">
          <h3>Send a Message</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
