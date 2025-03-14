// Banquet.js
import React from 'react';
import './banquet.css';

function Banquet() {
  return (
    <section className="banquet-page" aria-label="Banquet Hall">
      <h1>Our Elegant Banquet Hall</h1>
      <p>
        Welcome to our gathering hall, a cozy and elegant space perfect for hosting a family celebration or a corporate event.
        Our banquet hall provides an intimate yet comfortable atmosphere.
      </p>
      <div className="banquet-images">
        <img src="./images/banquet1.avif" alt="Banquet view 1" />
        <img src="./images/banquet.avif" alt="Banquet view 2" />
      </div>
    </section>
  );
}

export default Banquet;
