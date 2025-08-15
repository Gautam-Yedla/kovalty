import { Phone, ArrowRight } from "lucide-react";
import "../styles/HomePage.css";
import HeroSection from "../components/HeroSection";
import { servicesData } from "../data/services";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section className="home-services-section">
        <div className="home-services-container">
          <div className="home-services-header">
            <h2 className="home-services-title">Our Services</h2>
            <p className="home-services-subtitle">
              A complete suite of services to bring your digital vision to life.
            </p>
          </div>

          <div className="home-services-grid">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="home-service-card"
              >
                <h3 className="home-service-title">{service.title}</h3>
                <p className="home-service-description">
                  {service.description}
                </p>
                <span className="home-service-link">Explore More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-cta-container">
          <h2 className="home-cta-title">Ready to Transform Your Business?</h2>
          <p className="home-cta-text">
            Let's discuss how Kovalty Technologies can help you achieve your
            technology goals and drive sustainable growth.
          </p>

          <div className="home-cta-buttons">
            <Link to="/contact" className="home-cta-button-primary">
              <Phone className="home-cta-button-icon" />
              Schedule Free Consultation
            </Link>

            <Link to="/services" className="home-cta-button-secondary">
              <ArrowRight className="home-cta-button-icon" />
              Explore Our Services
            </Link>
          </div>

          {/* <div className="home-cta-contact">
            <div className="home-cta-contact-item">
              <Mail className="home-cta-contact-icon" />
              <span>hello@kovalty.com</span>
            </div>
            <div className="home-cta-divider">|</div>
            <div className="home-cta-contact-item">
              <Phone className="home-cta-contact-icon" />
              <span>+1 (555) 123-TECH</span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
