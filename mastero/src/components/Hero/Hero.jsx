import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel data with your asset images
    const carouselData = [
        {
            id: 1,
            mainImage: '/src/assets/model-1.jpg',
            topImage: '/src/assets/fashion-1.jpg',
            bottomImage: '/src/assets/clothes-1.jpg'
        },
        {
            id: 2,
            mainImage: '/src/assets/model-1.jpg',
            topImage: '/src/assets/fashion-1.jpg',
            bottomImage: '/src/assets/clothes-1.jpg'
        },
        {
            id: 3,
            mainImage: '/src/assets/model-1.jpg',
            topImage: '/src/assets/fashion-1.jpg',
            bottomImage: '/src/assets/clothes-1.jpg'
        }
    ];

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [carouselData.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <div className="hero-tag">
                        <span className="tag-dot"></span>
                        Discover Fashion with Purpose
                    </div>

                    <h1 className="hero-title">
                        Focuses on comfort and lasting style
                    </h1>

                    <p className="hero-description">
                        Discover fashion that reflects your values and your style. Sustainably
                        sourced, thoughtfully designed, endlessly stylish.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Shop Now
                            <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="btn-secondary">
                            Trendy Collections
                            <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Statistics Section - Integrated in hero content */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3 className="stat-number">30k+</h3>
                            <p className="stat-label">Happy Customers</p>
                        </div>

                        <div className="stat-item">
                            <h3 className="stat-number">500+</h3>
                            <p className="stat-label">New Products</p>
                        </div>

                        <div className="stat-item">
                            <h3 className="stat-number">50M+</h3>
                            <p className="stat-label">Followers</p>
                        </div>
                    </div>
                </div>

                {/* Right Images Carousel */}
                <div className="hero-images">
                    <div className="carousel-container">
                        <div className="main-image">
                            <img
                                src={carouselData[currentSlide].mainImage}
                                alt={`Fashion Model ${currentSlide + 1}`}
                                className="model-image"
                            />
                        </div>

                        <div className="secondary-images">
                            <div className="image-card top-right">
                                <img
                                    src={carouselData[currentSlide].topImage}
                                    alt={`Fashion Collection ${currentSlide + 1}`}
                                />
                            </div>

                            <div className="image-card bottom-left">
                                <img
                                    src={carouselData[currentSlide].bottomImage}
                                    alt={`Clothing Items ${currentSlide + 1}`}
                                />
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="carousel-controls">
                            <button className="carousel-btn prev" onClick={prevSlide}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>

                            <button className="carousel-btn next" onClick={nextSlide}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Slide Numbers 
                    <div className="slide-numbers">
                        <span className="current-slide">{currentSlide + 1}</span>
                        <span className="slide-separator">/</span>
                        <span className="total-slides">{carouselData.length}</span>
                    </div>*/}

                    {/* Navigation dots */}
                    <div className="image-nav">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;