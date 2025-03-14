// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="./images/logo.png.png" alt="Terracotta Logo" />
        </Link>
      </div>
      <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/our-story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
        <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
        <Link to="/banquet" onClick={() => setIsMobileMenuOpen(false)}>Banquet</Link>
        <Link to="/achievements" onClick={() => setIsMobileMenuOpen(false)}>Achievements</Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        {/* New Order Online Link using an anchor to scroll to the section */}
        <a href="/#order-online" onClick={() => setIsMobileMenuOpen(false)}>Order Online</a>
      </nav>
      <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Toggle Navigation">
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
}

export default Navbar;
