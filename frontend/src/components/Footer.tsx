import "../styles/Footer.css";
import { ScrollToTopIcon } from "../icons/Icons";
import { Mail, Phone } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/" className="footer-nav-link">
                Home
              </a>
            </li>
            {/* <li className="footer-nav-item">
              <a href="/project" className="footer-nav-link">
                Projects
              </a>
            </li> */}
            <li className="footer-nav-item">
              <a href="/about" className="footer-nav-link">
                About
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/services" className="footer-nav-link">
                Services
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/contact" className="footer-nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-content">
          <div className="footer-contact-info">
            <p className="footer-contact-text">Drop us a Line at :</p>
            <Mail className="footer-cta-contact-icon" />
            <a href="mailto:info@kovalty.com" className="footer-link">
              info@kovalty.com
            </a>
          </div>
          <div className="footer-contact-info">
            <p className="footer-contact-text">Phone :</p>
            <Phone className="footer-cta-contact-icon" />
            <a href="tel:+917661805678" className="footer-link">
              +91 76618 05678
            </a>
          </div>
          <div className="footer-contact-info">
            <p className="footer-contact-text">Address :</p>
            <a
              href="https://maps.app.goo.gl/FrizC6mKpXe8YWS29"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Plot No 54, Tripura Landmark-II,
              <br />
              Bowrampet, Hyderabad - 500043
              <br />
              Telangana, India
            </a>
          </div>

          <div className="footer-social-media">
            <p className="footer-social-text">Social Media</p>
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com/company/kovalty/"
                aria-label="LinkedIn"
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

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

      <div className="footer-bottom-info">
        <span className="footer-copyright">
          © 2025 Kovalty Technologies LLP
        </span>
        <div className="footer-legal-links">
          <a href="#" className="footer-legal-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-legal-link">
            Terms of Usage
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
