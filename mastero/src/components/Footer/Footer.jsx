import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column footer-brand">
          <h3 className="footer-brand-title">Fancy</h3>
          <p className="footer-brand-description">
            We're always seeking out new ways to improve our sustainability efforts eco-friendly production processes.
          </p>
        </div>

        {/* About Us Section */}
        <div className="footer-column">
          <h4 className="footer-column-title">About Us</h4>
          <ul className="footer-links">
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/ethical-practices">Ethical Practices</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="footer-column">
          <h4 className="footer-column-title">Shop</h4>
          <ul className="footer-links">
            <li><a href="/men">Men's Collection</a></li>
            <li><a href="/women">Women's Collection</a></li>
            <li><a href="/kids">Kid's Collection</a></li>
            <li><a href="/accessories">Accessories</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-column">
          <h4 className="footer-column-title">Contact Us</h4>
          <ul className="footer-contact">
            <li className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Fashion St., Suite 456<br />City, State, ZIP Code</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>support@fancy.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2024 Fancy . All rights reserved .
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/facebook-icon.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/images/youtube-icon.svg" alt="YouTube" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/images/twitter-icon.svg" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src="/images/pinterest-icon.svg" alt="Pinterest" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/instagram-icon.svg" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;