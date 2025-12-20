'use client';
import { useState, useEffect } from "react";
import Services from "@/components/Services/Services";
import MobileCards from "@/cards/MobileCards";
import "@/styles/ServiceStyling/ResponsiveServices.css";
import approachVenn from "@/assets/approach-venn.jpg";
import {
  IoSettingsSharp,
  IoSearch,
  IoBarChart,
  IoRocketSharp,
} from "react-icons/io5";

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div
        className="desktop-services"
        style={{ display: isMobile ? "none" : "block" }}
      >
        <Services />
      </div>

      <div
        className="mobile-services"
        style={{ display: isMobile ? "block" : "none" }}
      >
        <MobileCards />
      </div>

      <section className="services-approach-section">
        <div className="services-approach-container">
          <h2 className="services-approach-title">Our Approach</h2>
          <p className="services-approach-text">
            At Kovalty Technologies, we believe in the synergy of Technology,
            Product, and Customer Success. Our integrated approach ensures
            that every solution we deliver is not just technically sound, but
            also strategically aligned with your business goals.
          </p>
          <div className="services-approach-visual">
            <img
              src={typeof approachVenn === 'string' ? approachVenn : approachVenn.src}
              alt="Our Approach: Technology, Product, Customer Success"
              className="services-approach-image"
            />
          </div>
          <div className="services-approach-steps">
            <div className="services-approach-step">
              <IoSettingsSharp className="services-approach-icon" />
              <h3 className="services-approach-step-title">Technology</h3>
              <p className="services-approach-step-text">
                Cutting-edge tools and frameworks
              </p>
            </div>
            <div className="services-approach-step">
              <IoSearch className="services-approach-icon" />
              <h3 className="services-approach-step-title">Product</h3>
              <p className="services-approach-step-text">
                Strategic product development
              </p>
            </div>
            <div className="services-approach-step">
              <IoBarChart className="services-approach-icon" />
              <h3 className="services-approach-step-title">Customer Success</h3>
              <p className="services-approach-step-text">
                Measurable business outcomes
              </p>
            </div>
            <div className="services-approach-step">
              <IoRocketSharp className="services-approach-icon" />
              <h3 className="services-approach-step-title">Result</h3>
              <p className="services-approach-step-text">
                Sustainable growth and innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

