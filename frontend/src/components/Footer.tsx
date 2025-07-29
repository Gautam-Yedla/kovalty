import { useState } from 'react';
import '../styles/Footer.css';
import { FooterLogoIcon, ScrollToTopIcon } from '../icons/Icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Block */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Newsletter Block */}
          <div className="footer-newsletter-block">
            <h3 className="footer-heading">Get Our Newsletters</h3>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit}>
                <div className="footer-form-wrapper">
                  <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="footer-input"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="footer-button"
                    disabled={isLoading}
                  >
                    {isLoading ? '...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <p>✓ Thank you for subscribing!</p>
              </div>
            )}
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="footer-heading">Quick Link</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#features" className="footer-link">Features</a>
              </li>
              <li className="footer-list-item">
                <a href="#pricing" className="footer-link">Pricing Plan</a>
              </li>
              <li className="footer-list-item">
                <a href="#contact" className="footer-link">Contact</a>
              </li>
              <li className="footer-list-item">
                <a href="#404" className="footer-link">404</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#about" className="footer-link">About Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#changelog" className="footer-link">Changelog</a>
              </li>
              <li className="footer-list-item">
                <a href="#blog" className="footer-link">Blog</a>
              </li>
              <li className="footer-list-item">
                <a href="#terms" className="footer-link">Terms & Condition</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="footer-heading">Get In Touch</h3>
            <address className="footer-contact">
              <div className="footer-list-item">
                <a href="mailto:hello@pentaclay.com" className="footer-link">
                  hello@kovalty.com
                </a>
              </div>
              <div className="footer-list-item">
                <a href="https://maps.google.com/?q=55+main+Street,+2nd+blockMelbourne,+Australia" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="footer-link">
                  55 main Street, 2nd<br/>
                  blockMelbourne, Australia
                </a>
              </div>
              <div className="footer-list-item">
                <a href="tel:+00012345688" className="footer-link">
                  +000 (123) 456 88
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Divider and Up Arrow */}
      <div className="footer-divider-container">
        <div className="footer-divider" />
        <button 
          className="footer-up-arrow"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ScrollToTopIcon />
        </button>
      </div>

      {/* Bottom Block */}
      <div className="footer-bottom-block">
        <div className="footer-logo-container">
          <button 
            className="footer-logo-link"
            onClick={scrollToTop}
            aria-label="Go to top"
          >
            <FooterLogoIcon className="footer-logo" />
          </button>
          <span className="footer-logo-text">Kovalty</span>
        </div>
        <div className="footer-copyright">
          <span className="footer-copyright-text">Copyright</span>
          <span className="footer-copyright-year">@2025</span>
          <span className="footer-copyright-company">Kovalty All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;