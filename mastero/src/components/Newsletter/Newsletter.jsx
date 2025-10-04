import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Stay in the Loop</h2>
        <p className="newsletter-description">
          Join our community for exclusive offers, new arrivals,<br />
          and sustainable fashion tips
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Sign Up
            <span className="button-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;