import React, { useState } from 'react';
import '../styles/ServiceStyling/MobileCards.css';

import type { ServiceCard, MobileCardsProps } from '../types';

// Map actual services to ServiceCard[] for mobile cards
const defaultServices: ServiceCard[] = [
    {
        id: 1,
        icon: '💻',
        serviceName: 'Application Development',
        title: 'Application Development',
        description: 'Robust, scalable apps built to perform.',
        backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 2,
        icon: '📱',
        serviceName: 'Mobile App Development',
        title: 'Mobile App Development',
        description: 'Custom mobile solutions for Android and iOS platforms.',
        backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 3,
        icon: '📦',
        serviceName: 'Product Management',
        title: 'Product Management',
        description: 'From idea to market, we guide your product journey.',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 4,
        icon: '🛡️',
        serviceName: 'QA & Automation',
        title: 'QA & Automation',
        description: 'Ensure quality and speed with automated testing solutions.',
        backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 5,
        icon: '☁️',
        serviceName: 'Cloud Services',
        title: 'Cloud Services',
        description: 'Scalable, secure, and cost-effective cloud solutions.',
        backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=top',
    },
    {
        id: 6,
        icon: '🤖',
        serviceName: 'AI & ML',
        title: 'AI & Machine Learning Services',
        description: 'Build intelligent, learning systems with cutting-edge AI and ML solutions.',
        backgroundImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop&crop=center',
    },
];

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
                // Convert service name to slug used in /services/:slug
                let slug = '';
                switch (service) {
                    case 'Application Development': slug = 'application-development'; break;
                    case 'Mobile App Development': slug = 'mobile-app-development'; break;
                    case 'Product Management': slug = 'product-management'; break;
                    case 'QA & Automation': slug = 'qa-automation'; break;
                    case 'Cloud Services': slug = 'cloud-services'; break;
                    case 'AI & ML': slug = 'ai-ml'; break;
                    default: slug = service.toLowerCase().replace(/ /g, '-');
                }
                window.location.href = `/services/${slug}`;
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
                <h1>Our Core Services</h1>
                <p>Explore our full suite of digital, engineering, and AI-powered solutions for your business growth.</p>
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