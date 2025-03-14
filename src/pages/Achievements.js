// Achievements.js
import React from 'react';
import './achievements.css';

function Achievements() {
  return (
    <section className="achievements-page" aria-label="Achievements">
      <h1>Achievements</h1>
      <p>
        Over the years, Terracotta has been honored with several awards and recognitions.
        We take pride in delivering exceptional service and quality.
      </p>
      <div className="achievements-grid">
        <img src="./images/achieve.avif" alt="Certificate of Award 1" />
        <img src="./images/achieve1.png" alt="Certificate of Award 2" />
        <img src="./images/achieve2.png" alt="Certificate of Award 3" />
        <img src="./images/achieve3.png" alt="Certificate of Award 4" />
      </div>
    </section>
  );
}

export default Achievements;
