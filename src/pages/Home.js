// Home.js
import React from 'react';
import './home.css';
import OrderOnline from './OrderOnline';

function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-logo-background">
          <img src="./images/pattern.png" alt="Terracotta Logo Background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Savor the Flavors of Terracotta</h1>
          <p className="hero-subtitle">
            Experience exquisite culinary delights in a warm and inviting ambiance.
            Join us for a taste of authentic fusion cuisine.
          </p>
          <a href="#menu-section" className="cta-button">View Our Menu</a>
        </div>
      </section>

      <section className="featured-section" id="menu-section">
        <h2>Featured Dishes</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="./images/food4.png" alt="Signature Dish One" />
            <h3>Signature Dish One</h3>
            <p>Delicious mix of spices and flavors to tantalize your taste buds.</p>
          </div>
          <div className="featured-item">
            <img src="./images/food3.png" alt="Signature Dish Two" />
            <h3>Signature Dish Two</h3>
            <p>A perfect blend of tradition and innovation in every bite.</p>
          </div>
          <div className="featured-item">
            <img src="./images/food2.png" alt="Signature Dish Three" />
            <h3>Signature Dish Three</h3>
            <p>Crafted with fresh ingredients and authentic flavors.</p>
          </div>
        </div>
      </section>

      {/* New Order Online Section */}
      <OrderOnline />
    </main>
  );
}

export default Home;
