import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David L.',
      image: './src/assets/david.jpg',
      text: "The quality of these clothes is unmatched. Every piece I've bought is not only beautiful but feels incredible to wear. Plus, knowing that they're made ethically makes me feel even better about my purchases."
    },
    {
      id: 2,
      name: 'Merry J.',
      image: './src/assets/david.jpg',
      text: "I've been looking for the fit, the fabric, the mission—everything about this brand is amazing. I've received so many compliments on my new wardrobe, and I love telling people it's from a sustainable brand!"
    },
    {
      id: 3,
      name: 'Sarah K.',
      image: './src/assets/david.jpg',
      text: "Outstanding quality and style! The attention to detail in every garment is remarkable. I appreciate the commitment to sustainability without compromising on fashion."
    },
    {
      id: 4,
      name: 'Michael R.',
      image: './src/assets/david.jpg',
      text: "Best purchase I've made this year! The clothes fit perfectly and the materials are top-notch. Highly recommend to anyone looking for ethical fashion."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 2) : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="header-content">
            <h2 className="testimonials-title">What Customers Saying</h2>
            <p className="testimonials-subtitle">Reviews from People Who Love Fancy</p>
          </div>
          <div className="navigation-buttons">
            <button 
              className="nav-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={handleNext}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24C12 20.6863 14.6863 18 18 18V18C18 14.6863 15.3137 12 12 12V12C8.68629 12 6 14.6863 6 18V30C6 33.3137 8.68629 36 12 36H18V24H12Z" fill="#000"/>
                  <path d="M36 24C36 20.6863 38.6863 18 42 18V18C42 14.6863 39.3137 12 36 12V12C32.6863 12 30 14.6863 30 18V30C30 33.3137 32.6863 36 36 36H42V24H36Z" fill="#000"/>
                </svg>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <p className="author-name">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;