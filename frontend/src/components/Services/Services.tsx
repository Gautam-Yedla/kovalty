import React, { useEffect, useRef, useState } from 'react';
import { services } from '../../data/services';
import ServiceCard from '../../cards/ServiceCard';
import '../../styles/ServiceStyling/Services.css';

const Services: React.FC = () => {
    const stackRef = useRef<HTMLDivElement>(null);
    const [awayIndex, setAwayIndex] = useState(-1);
    const [scrollHeight, setScrollHeight] = useState(window.innerHeight);
  
    useEffect(() => {
        const calculateHeight = () => {
          const triggerGap = window.innerHeight * 0.5; // each card becomes away after 0.5 viewport height
          const requiredHeight = window.innerHeight + triggerGap * services.length;
      
          setScrollHeight(requiredHeight);
        };
      
        const handleScroll = () => {
          const distance = window.innerHeight * 0.5;
          const top = stackRef.current?.getBoundingClientRect().top ?? 0;
          const index = Math.floor(-1 * (top / distance + 1));
          setAwayIndex(index);
        };
      
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', calculateHeight);
      
        calculateHeight();
        handleScroll();
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', calculateHeight);
        };
      }, []);
      
  
    let angle = 0;
    const renderedCards = services.map((service, i) => {
      const isAway = i <= awayIndex;
      const cardAngle = isAway ? null : angle;
      if (!isAway) angle -= 10;
  
      return (
        <ServiceCard
          key={service.id}
          service={service}
          angle={cardAngle}
          isAway={isAway}
          zIndex={services.length - i}
        />
      );
    });
  
    return (
      <div
        className="stack-area"
        ref={stackRef}
        style={{ height: `${scrollHeight}px` }}
      >
        {/* ...left/right as before... */}
        <div className="left">
          <div className="title">Our Services</div>
          <div className="sub-title">
            From product planning to AI-powered engineering,<br />
            we craft modern solutions end-to-end.
            <br />
            <button>See More Details</button>
          </div>
        </div>
        <div className="right">{renderedCards}</div>
      </div>
    );
  };

export default Services;