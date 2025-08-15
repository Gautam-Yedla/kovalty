import React from "react";
import "../../styles/ServiceStyling/ServicesTemplate.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServicePageData {
  hero: {
    title: string;
    subtitle: string;
  };
  expertiseTitle: string;
  expertiseSubtitle: string;
  services: Array<{
    id: number;
    icon: string;
    title: string;
    description: string;
  }>;
  processTitle: string;
  processSubtitle: string;
  processSteps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}

const ServicePageTemplate: React.FC<{ data: ServicePageData }> = ({ data }) => {
  return (
    <div className="services-template-page">
      <header className="services-hero-section">
        <div className="services-hero-content">
          <h1 className="services-hero-title">{data.hero.title}</h1>
          <p className="services-hero-subtitle">{data.hero.subtitle}</p>
        </div>
      </header>

      <section className="key-services-section">
        <div className="services-container">
          <h2 className="services-section-title">{data.expertiseTitle}</h2>
          <p className="services-section-subtitle">{data.expertiseSubtitle}</p>
          <div className="key-services-grid">
            {data.services.map((service) => (
              <div key={service.id} className="key-service-card">
                <div className="key-service-icon">{service.icon}</div>
                <h3 className="key-service-title">{service.title}</h3>
                <p className="key-service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-we-work-section">
        <div className="services-container">
          <h2 className="services-section-title">{data.processTitle}</h2>
          <p className="services-section-subtitle">{data.processSubtitle}</p>
          <div className="work-process-steps-grid">
            {data.processSteps.map((step) => (
              <div key={step.number} className="work-process-step">
                <div className="work-step-number">{step.number}</div>
                <h3 className="work-step-title">{step.title}</h3>
                <p className="work-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="services-cta-content">
          <h2 className="services-cta-title">{data.ctaTitle}</h2>
          <p className="services-cta-subtitle">{data.ctaSubtitle}</p>
          <div className="services-cta-buttons">
            <Link to="/services" className="services-cta-button-secondary">
              <ArrowRight className="services-cta-button-icon" />
              {data.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
