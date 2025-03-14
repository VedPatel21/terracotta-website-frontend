// OrderOnline.js
import React from 'react';
import './orderOnline.css';

function OrderOnline() {
  return (
    <section className="order-online" id="order-online" aria-label="Order Online">
      <h2>Order Online</h2>
      <p>
        Enjoy our delicious offerings from the comfort of your home. Order directly through our trusted partners:
      </p>
      <div className="order-buttons">
        <a
          href="https://www.zomato.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="order-button"
        >
          Order on Zomato
        </a>
        <a
          href="https://www.swiggy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="order-button"
        >
          Order on Swiggy
        </a>
      </div>
    </section>
  );
}

export default OrderOnline;
