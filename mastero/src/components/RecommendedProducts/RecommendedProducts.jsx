import React from 'react';
import './RecommendedProducts.css';

const RecommendedProducts = () => {
  const products = [
    {
      id: 1,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Men's Polo T-shirt",
      price: 25.3,
      rating: 5,
      discount: '15% Off'
    },
    {
      id: 2,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's Shirt",
      price: 32.5,
      rating: 4.5,
      discount: '10% Off'
    },
    {
      id: 3,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's T-shirt",
      price: 34.5,
      rating: 4.5,
      discount: '15% Off'
    },
    {
      id: 4,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Men's Huddy",
      price: 34.5,
      rating: 5,
      discount: '10% Off'
    },
    {
      id: 5,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's T-shirt",
      price: 34.5,
      rating: 5,
      discount: '15% Off'
    },
    {
      id: 6,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Men's Huddy",
      price: 34.5,
      rating: 4,
      discount: '10% Off'
    },
    {
      id: 7,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Women's Tops",
      price: 32.5,
      rating: 5,
      discount: '10% Off'
    },
    {
      id: 8,
      image: '/src/assets/womens-denim-jacket.jpg',
      name: "Men's Polo T-shirt",
      price: 25.3,
      rating: 4,
      discount: '15% Off'
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
    <section className="recommended-products-section">
      <div className="recommended-container">
        {/* Header */}
        <div className="recommended-header">
          <div className="header-left">
            <h2 className="section-title">Recommended For You</h2>
            <p className="section-subtitle">Style, inspired by the future of fashion</p>
          </div>
          <button className="see-more-btn">
            See More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="recommended-products-grid">
          {products.map((product) => (
            <div key={product.id} className="recommended-product-card">
              <div className="recommended-product-image-wrapper">
                <span className="discount-badge">{product.discount}</span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="recommended-product-image"
                />
              </div>
              <div className="recommended-product-info">
                <div className="rating">
                  {renderStars(product.rating)}
                </div>
                <h3 className="recommended-product-name">{product.name}</h3>
                <p className="recommended-product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;