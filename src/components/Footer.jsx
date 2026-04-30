import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo-container">
            <img
              src="/images/logo-white.png"
              alt="Hoco Logo"
              className="footer-logo-img"
              onError={(e) => {
                // Fallback if logo fails to load
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const textLogo = document.createElement('h3');
                textLogo.className = 'footer-logo-text';
                textLogo.textContent = 'hoco.';
                parent.appendChild(textLogo);
              }}
            />
          </div>
          <p className="footer-tagline">Premium Mobile Phones & Accessories</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/repair">Repair Services</a></li>
            <li><a href="/stores">Our Stores</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Return Policy</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="footer-contact">
            <i className="fas fa-envelope"></i> info@hocomobile.ie
          </p>
          <p className="footer-contact">
            <i className="fas fa-phone-alt"></i> +353 1 878 8378
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Hoco Mobile Store. All rights reserved.
        </p>
        <div className="footer-payment">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
          <i className="fab fa-cc-apple-pay"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;