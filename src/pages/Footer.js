// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Terracotta Restaurant</h3>
          <p>
            Address: 1234, Some Street,<br />
            City, State 56789
          </p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Email: terracotta@example.com</p>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#!" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TERRACOTTA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
