import React, { useState, useEffect } from "react";
import Services from "./Services";
import MobileCards from "../../cards/MobileCards";
import "../../styles/ServiceStyling/ResponsiveServices.css";
import approachVenn from "../../assets/approach-venn.jpg";

// Import icons for the new section
import {
  IoSettingsSharp,
  IoSearch,
  IoBarChart,
  IoRocketSharp,
} from "react-icons/io5";

const ResponsiveServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Services - Hidden on mobile */}
      <div
        className="desktop-services"
        style={{ display: isMobile ? "none" : "block" }}
      >
        <Services />
      </div>

      {/* Mobile Cards - Hidden on desktop */}
      <div
        className="mobile-services"
        style={{ display: isMobile ? "block" : "none" }}
      >
        <MobileCards />
      </div>

      {/* Our Approach Section */}
      <section className="services-approach-section">
        <div className="services-approach-container">
          <h2 className="services-approach-title">Our Approach</h2>
          <p className="services-approach-text">
            At Kovalty Technologies, we believe in the synergy of Technology,
            Product, and Customer Success. Our integrated approach ensures
            innovative solutions, robust products, and exceptional client
            experiences.
          </p>
          <img
            src={approachVenn}
            alt="Technology, Product, Customer Success Venn Diagram"
            className="services-approach-image"
          />
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="principles-section">
          <h2 className="principles-header">Our Principles</h2>
        <div className="principles-container">
          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <IoSettingsSharp />
            </div>
            <h3 className="principle-title">Automation First</h3>
            <p className="principle-description">
              We automate what others do manually.
            </p>
          </div>
          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <IoSearch />
            </div>
            <h3 className="principle-title">Clarity Over Complexity</h3>
            <p className="principle-description">Simplicity scales.</p>
          </div>
          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <IoBarChart />
            </div>
            <h3 className="principle-title">Test Relentlessly</h3>
            <p className="principle-description">Data tells the truth.</p>
          </div>
          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <IoRocketSharp />
            </div>
            <h3 className="principle-title">Think Like Founders</h3>
            <p className="principle-description">Because we've been there too.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponsiveServices;