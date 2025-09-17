import React from 'react';
import './Hero.css';

const Hero = ({ hero }) => {
  if (!hero) return null;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <button className="hero-cta">{hero.cta_text}</button>
        </div>
        <div className="hero-image">
          {hero.image ? (
            <img src={hero.image} alt="Hero" />
          ) : (
            <div className="hero-placeholder">
              <span>Hero Image</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
