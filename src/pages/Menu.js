// Menu.js
import React from 'react';
import './menu.css';

function Menu() {
  return (
    <section className="menu-page" aria-label="Menu">
      <h1>Our Menu</h1>
      <p>Explore a variety of dishes curated by our expert chefs.</p>
      <div className="menu-grid">
        <div className="menu-item">
          <img src="./images/food1.png" alt="Menu Dish 1" />
          <h3>Dish Name 1</h3>
          <p>$12.99</p>
        </div>
        <div className="menu-item">
          <img src="./images/food2.png" alt="Menu Dish 2" />
          <h3>Dish Name 2</h3>
          <p>$15.99</p>
        </div>
        <div className="menu-item">
          <img src="./images/food3.png" alt="Menu Dish 3" />
          <h3>Dish Name 3</h3>
          <p>$10.99</p>
        </div>
        <div className="menu-item">
          <img src="./images/food4.png" alt="Menu Dish 4" />
          <h3>Dish Name 4</h3>
          <p>$18.99</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
