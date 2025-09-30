import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      image: '/src/assets/long-sleeve-tshirt.jpg',
      label: "Women's Collections",
      title: 'Long Sleeve T-Shirt',
      size: 'large'
    },
    {
      id: 2,
      image: '/src/assets/half-sleeve-shirt.jpg',
      label: "Men's Collections",
      title: 'Half Sleeve Shirt',
      size: 'small'
    },
    {
      id: 3,
      image: '/src/assets/polo-tshirt.jpg',
      label: "T-Shirt Collections",
      title: 'Polo T-Shirt',
      size: 'small'
    },
    {
      id: 4,
      image: '/src/assets/denim-jacket.jpg',
      label: "Denim Collections",
      title: 'Denim-Jacket',
      size: 'large'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-grid">
          {/* Left Column - Large Card */}
          <div className="category-card large">
            <img 
              src={categories[0].image} 
              alt={categories[0].title}
              className="category-image"
            />
            <div className="category-content">
              <span className="category-label">{categories[0].label}</span>
              <h3 className="category-title">{categories[0].title}</h3>
              <button className="explore-btn">
                Explore Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Grid of 3 Cards */}
          <div className="category-grid-right">
            {categories.slice(1).map((category) => (
              <div key={category.id} className="category-card small">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="category-image"
                />
                <div className="category-content">
                  <span className="category-label">{category.label}</span>
                  <h3 className="category-title">{category.title}</h3>
                  <button className="explore-btn">
                    Explore Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;