import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's Denim Jacket",
      price: 34.5,
      rating: 4,
      isNew: true
    },
    {
      id: 2,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Man's Formal Shirt",
      price: 21.4,
      rating: 5,
      isNew: true
    },
    {
      id: 3,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's Collared T-shirt",
      price: 17.5,
      rating: 4.5,
      isNew: false
    },
    {
      id: 4,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Men's T-shirt",
      price: 15.3,
      rating: 4.5,
      isNew: false
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">★</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">★</span>
      );
    }

    return stars;
  };

  return (
    <section className="featured-products-section">
      <div className="featured-container">
        {/* Header */}
        <div className="featured-header">
          <div className="header-left">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Effortless style, inspired by the future of fashion</p>
          </div>
          <button className="see-more-btn">
            See More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                {product.isNew && (
                  <span className="new-badge">New</span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="rating">
                  {renderStars(product.rating)}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;