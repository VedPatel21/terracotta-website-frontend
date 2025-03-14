// OurStory.js
import React from 'react';
import './ourStory.css';

function OurStory() {
  return (
    <section className="our-story" aria-label="Our Story">
      <h1>Discover the Essence of Terracotta</h1>
      <p>
        Welcome to Terracotta, where food meets soul. Our culinary philosophy revolves around bringing together diverse flavors and cultures. We aim to create a dining experience that is both comforting and exciting.
      </p>
      <p>
        Each dish is meticulously crafted using the finest ingredients and time-honored techniques. From our signature curries to our indulgent desserts, every bite reflects our passion for culinary excellence.
      </p>
      <img src="https://via.placeholder.com/800x400.png?text=Restaurant+Interior" alt="Restaurant Interior" className="story-image" />
      <p>
        We believe that great food creates memorable moments. Whether you're celebrating a milestone or simply craving a hearty meal, Terracotta welcomes you with open arms.
        Come be part of our story, and let us become part of yours.
      </p>
    </section>
  );
}

export default OurStory;
