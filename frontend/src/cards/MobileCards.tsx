import React, { useState } from 'react';
import '../styles/ServiceStyling/MobileCards.css';
import type { ServiceCard, MobileCardsProps } from '../types';
import { mobileCardsData } from '../data/mobileCards';

const defaultServices: ServiceCard[] = mobileCardsData;

const MobileCards: React.FC<MobileCardsProps> = ({ services = defaultServices }) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const togglePopup = (cardId: number) => {
        setActiveCard(activeCard === cardId ? null : cardId);
    };

    const closePopup = (event: React.MouseEvent) => {
        event.stopPropagation();
        setActiveCard(null);
    };

    const learnMore = (service: string) => {
        alert(`Redirecting to ${service} services page...`);
        // In a real application, you would navigate to the specific service page
        // window.location.href = `/services/${service}`;
    };

    const handleOutsideClick = (event: React.MouseEvent) => {
        if (!(event.target as Element).closest('.mobile-cards-card')) {
            setActiveCard(null);
        }
    };

    const handlePopupClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div className="mobile-cards-container" onClick={handleOutsideClick}>
            <div className="mobile-cards-header">
            <h1>Professional IT Services</h1>
            <p>Delivering reliable technology solutions with proven expertise and professional excellence</p>
        </div>

            <div className="mobile-cards-grid">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`mobile-cards-card ${activeCard === service.id ? 'active' : ''}`}
                        onClick={() => togglePopup(service.id)}
                        style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    >
                        <div className="mobile-cards-background"></div>
                        <div className="mobile-cards-content">
                            <div className="mobile-cards-icon-wrapper">
                                <div className="mobile-cards-icon">{service.icon}</div>
                    </div>
                            <div className="mobile-cards-service-name">{service.serviceName}</div>
                            <h3>{service.title}</h3>
                        </div>
                        <div className="mobile-cards-popup" onClick={handlePopupClick}>
                            <button className="mobile-cards-close-popup" onClick={closePopup}>
                                &times;
                            </button>
                            <div className="mobile-cards-popup-header">
                                <div className="mobile-cards-popup-icon">{service.icon}</div>
                        <div>
                                    <div className="mobile-cards-popup-service-name">{service.serviceName}</div>
                                    <div className="mobile-cards-popup-title">{service.title}</div>
                        </div>
                    </div>
                            <div className="mobile-cards-popup-description">
                                {service.description}
                    </div>
                            <button
                                className="mobile-cards-learn-more-btn"
                                onClick={() => learnMore(service.serviceName.toLowerCase().replace(' ', '-'))}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileCards;