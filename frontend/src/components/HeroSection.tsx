import React, { useEffect } from "react";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bgElements = document.querySelectorAll(".bg-element");

      bgElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        (element as HTMLElement).style.transform = `translateY(${
          scrolled * speed
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="bg-element"></div>
        <div className="bg-element"></div>
        <div className="bg-element"></div>

        <h1 className="main-title">
          Transforming
          <br />
          <span className="highlight">Businesses</span> Through Technology
        </h1>

        <p className="subtitle">
          We envision a world where technology empowers businesses to reach
          their full potential. By harnessing our expertise and innovative
          mindset,
          <span className="brand-multiplier">
            {" "}
            we strive to become a trusted partner for organizations navigating
            the complexities of the digital age.
          </span>
        </p>

        <Link to="/contact" className="cta-button cta-link">
          Contact Us
        </Link>
      </section>
    </>
  );
};

export default HeroSection;