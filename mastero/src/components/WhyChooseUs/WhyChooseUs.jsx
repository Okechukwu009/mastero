import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#4A90E2" strokeWidth="2" fill="none"/>
          <path d="M12 20L18 26L28 14" stroke="#4A90E2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#E3F2FD',
      title: 'Ethical Production',
      description: 'Our garments are made in fair-trade certified facilities for all involved.'
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="12" r="6" stroke="#4CAF50" strokeWidth="2" fill="none"/>
          <path d="M20 20V32" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 26L20 32L26 26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#E8F5E9',
      title: 'Commitment to Innovation',
      description: "We're always seeking out new ways to improve our sustainability efforts."
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="16" width="20" height="16" rx="2" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <rect x="14" y="12" width="12" height="8" rx="2" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <rect x="18" y="8" width="4" height="8" rx="1" stroke="#E91E63" strokeWidth="2" fill="none"/>
        </svg>
      ),
      iconBg: '#FCE4EC',
      title: 'Quality You Can Trust',
      description: 'We take pride in producing high-quality, that stands the test of time.'
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 10 12 14 12 20C12 26 16 30 20 30C24 30 28 26 28 20C28 14 20 10 20 10Z" stroke="#9C27B0" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="3" stroke="#9C27B0" strokeWidth="2" fill="none"/>
          <path d="M16 16L24 24M24 16L16 24" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#F3E5F5',
      title: 'Sustainable Materials',
      description: 'We source eco-friendly fabrics, such as organic cotton and recycled materials.'
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        {/* Header */}
        <div className="why-choose-us-header">
          <div className="header-content">
            <h2 className="why-title">Why Choose Us</h2>
            <p className="why-subtitle">Fashion You Can Feel Good About</p>
          </div>
          <button className="learn-more-btn">
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="icon-wrapper" style={{ backgroundColor: feature.iconBg }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;