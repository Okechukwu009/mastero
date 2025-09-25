import React, { useState } from 'react';
import './Header.css';
import Frame15 from '../../assets/Frame 15.svg';

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>Fancy</h1>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <a href="#shop" className="nav-link">
                Shop
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isShopOpen && (
                <div className="dropdown-menu">
                  <a href="#category1">Category 1</a>
                  <a href="#category2">Category 2</a>
                  <a href="#category3">Category 3</a>
                </div>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <a href="#collections" className="nav-link">
                Collections
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isCollectionsOpen && (
                <div className="dropdown-menu">
                  <a href="#collection1">Spring Collection</a>
                  <a href="#collection2">Summer Collection</a>
                  <a href="#collection3">Fall Collection</a>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Header Icons */}
        <div className="header-icons">

          <button className="icon-btn" aria-label="Search">
            <svg width="41" height="40" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.09375" y="0.59375" width="28.6875" height="28.6875" rx="14.3438" stroke="black" strokeOpacity="0.5" strokeWidth="0.9625" />
              <path d="M18.1904 17.705L19.9229 19.4375M19.4228 14.7018C19.4228 17.057 17.5199 18.9661 15.1731 18.9661C12.8258 18.9661 10.9229 17.057 10.9229 14.7024C10.9229 12.3461 12.8258 10.4375 15.1725 10.4375C17.5199 10.4375 19.4228 12.3466 19.4228 14.7018Z" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Shopping Cart Icon */}
          <button className="icon-btn" aria-label="Shopping Cart">
            <svg width="41" height="40" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.09375" y="0.59375" width="28.6875" height="28.6875" rx="14.3438" stroke="black" strokeOpacity="0.5" strokeWidth="0.9625" />
              <path d="M10.5 19.5C10.5 20.0523 10.0523 20.5 9.5 20.5C8.94772 20.5 8.5 20.0523 8.5 19.5C8.5 18.9477 8.94772 18.5 9.5 18.5C10.0523 18.5 10.5 18.9477 10.5 19.5Z" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 19.5C18.5 20.0523 18.0523 20.5 17.5 20.5C16.9477 20.5 16.5 20.0523 16.5 19.5C16.5 18.9477 16.9477 18.5 17.5 18.5C18.0523 18.5 18.5 18.9477 18.5 19.5Z" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 9.5H19.5L18.3 15.5H8.7L7.5 9.5Z" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="cart-count">0</span>
          </button>

          {/* User Account Icon */}
          <button className="icon-btn" aria-label="User Account">
            <svg width="41" height="40" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.09375" y="0.59375" width="28.6875" height="28.6875" rx="14.3438" stroke="black" strokeOpacity="0.5" strokeWidth="0.9625" />
              <path d="M15.5 15.5C17.1569 15.5 18.5 14.1569 18.5 12.5C18.5 10.8431 17.1569 9.5 15.5 9.5C13.8431 9.5 12.5 10.8431 12.5 12.5C12.5 14.1569 13.8431 15.5 15.5 15.5Z" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5 20.5C20.5 18.2909 18.2091 16.5 15.5 16.5C12.7909 16.5 10.5 18.2909 10.5 20.5" stroke="#ADADAD" strokeWidth="0.94375" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;