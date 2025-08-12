import React, { useEffect } from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bgElements = document.querySelectorAll('.bg-element');

      bgElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        {/* Animated background elements */}
        <div className="bg-element"></div>
        <div className="bg-element"></div>
        <div className="bg-element"></div>

        <h1 className="main-title">
          Transforming<br />
          <span className="highlight">Businesses</span> Through Technology
        </h1>

        <p className="subtitle">
          We're an IT services company that helps you streamline your operations and <span className="brand-multiplier">accelerate your business growth</span>
        </p>

        <button className="cta-button" onClick={() => { /* Add your click handler here */ }}>
          <a href="/contact" className="cta-link">
              Contact Us
            </a>
        </button>
      </section>
    </>
  );
};

export default HeroSection;