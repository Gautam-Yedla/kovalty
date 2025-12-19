'use client';

import { FC, useState, MouseEvent }         from 'react';
import { useRouter }                       from 'next/navigation';
import Image                                from 'next/image';
import '@/styles/ServiceStyling/MobileCards.css';
import ApplicationDevelopmentIcon          from '@/assets/icons/application-development.png';
import MobileAppDevelopmentIcon             from '@/assets/icons/mobile-development.png';
import AiMlIcon                             from '@/assets/icons/ai-ml.png';
import ProductManagementIcon                from '@/assets/icons/product-management.png';
import QaAutomationIcon                     from '@/assets/icons/qa-automation.png';
import CloudServicesIcon                    from '@/assets/icons/cloud-service.png';
import BgApplicationDevelopment            from '@/assets/images/bg-application-development.png';
import BgMobileAppDevelopment               from '@/assets/images/bg-mobile-app-development.png';
import BgAiMl                               from '@/assets/images/bg-ai-ml.png';
import BgProductManagement                  from '@/assets/images/bg-product-management.png';
import BgQaAutomation                       from '@/assets/images/bg-qa-automation.png';
import BgCloudServices                      from '@/assets/images/bg-cloud-services.png';
import type { ServiceCard, MobileCardsProps } from '@/types';

const defaultServices: ServiceCard[] = [
  {
    id: 1,
    icon: (
      <Image src = {ApplicationDevelopmentIcon} alt = "Application Development" width = {48} height = {48} />
    ),
    serviceName: "Application Development",
    title: "Bespoke Applications Engineered for Performance",
    description: "Design and develop custom applications that are fast, reliable, and built to grow with your business.",
    backgroundImage: BgApplicationDevelopment,
  },
  {
    id: 2,
    icon: <Image src = {MobileAppDevelopmentIcon} alt = "Mobile App Development" width = {48} height = {48} />,
    serviceName: "Mobile App Development",
    title: "Crafting Seamless Mobile Experiences",
    description: "Deliver feature-rich, high-performance mobile apps that engage users and drive results on Android and iOS.",
    backgroundImage: BgMobileAppDevelopment,
  },
  {
    id: 3,
    icon: <Image src = {AiMlIcon} alt = "AI & ML" width = {48} height = {48} />,
    serviceName: "AI & ML",
    title: "Intelligent Solutions Powered by AI & Machine Learning",
    description: "Leverage data-driven intelligence to automate processes, enhance decision-making, and innovate faster.",
    backgroundImage: BgAiMl,
  },
  {
    id: 4,
    icon: <Image src = {ProductManagementIcon} alt = "Product Management" width = {48} height = {48} />,
    serviceName: "Product Management",
    title: "Guiding Your Product from Concept to Launch",
    description: "Strategically plan, execute, and optimize every stage of your product’s lifecycle for maximum market impact.",
    backgroundImage: BgProductManagement,
  },
  {
    id: 5,
    icon: <Image src = {QaAutomationIcon} alt = "QA & Automation" width = {48} height = {48} />,
    serviceName: "QA & Automation",
    title: "Automated Testing for Quality at Speed",
    description: "Streamline testing with intelligent automation to ensure flawless performance and faster releases.",
    backgroundImage: BgQaAutomation,
  },
  {
    id: 6,
    icon: <Image src = {CloudServicesIcon} alt = "Cloud Services" width = {48} height = {48} />,
    serviceName: "Cloud Services",
    title: "Future-Ready Cloud Infrastructure & Solutions",
    description: "Design, deploy, and manage secure cloud architectures that scale with your business needs.",
    backgroundImage: BgCloudServices,
  },
];


const MobileCards: FC<MobileCardsProps> = ({
  services = defaultServices,
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const router = useRouter();

  const togglePopup = (cardId: number) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  const closePopup = (event: MouseEvent) => {
    event.stopPropagation();
    setActiveCard(null);
  };

  const learnMore = (serviceName: string) => {
    const slug = serviceName
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-");
    router.push(`/services/${slug}`);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (!(event.target as Element).closest(".mobile-cards-card")) {
      setActiveCard(null);
    }
  };

  const handlePopupClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="mobile-cards-container" onClick={handleOutsideClick}>
      <div className="mobile-cards-header">
        <h1>Our Core Services</h1>
        <p>
          Explore our full suite of digital, engineering, and AI-powered
          solutions for your business growth.
        </p>
      </div>

      <div className="mobile-cards-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`mobile-cards-card ${
              activeCard === service.id ? "active" : ""
            }`}
            onClick={() => togglePopup(service.id)}
          >
            <div className="mobile-cards-background">
              <Image 
                src = {service.backgroundImage} 
                alt = {service.title}
                fill
                className = "object-cover"
              />
            </div>
            <div className="mobile-cards-content">
              <div className="mobile-cards-icon-wrapper">
                <div className="mobile-cards-icon">{service.icon}</div>
              </div>
              <div className="mobile-cards-service-name">
                {service.serviceName}
              </div>
              <h3>{service.title}</h3>
            </div>
            {activeCard === service.id && (
              <div className="mobile-cards-popup" onClick={handlePopupClick}>
                <button
                  className="mobile-cards-close-popup"
                  onClick={closePopup}
                >
                  &times;
                </button>
                <div className="mobile-cards-popup-header">
                  <div className="mobile-cards-popup-icon">{service.icon}</div>
                  <div>
                    <div className="mobile-cards-popup-service-name">
                      {service.serviceName}
                    </div>
                    <div className="mobile-cards-popup-title">
                      {service.title}
                    </div>
                  </div>
                </div>
                <div className="mobile-cards-popup-description">
                  {service.description}
                </div>
                <button
                  className="mobile-cards-learn-more-btn"
                  onClick={() => learnMore(service.serviceName)}
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCards;
