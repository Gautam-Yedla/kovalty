import React, { useState, useEffect } from 'react';
import Services from './Services';
import MobileCards from '../../cards/MobileCards';
import '../../styles/ServiceStyling/ResponsiveServices.css';

const ResponsiveServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Services - Hidden on mobile */}
      <div className="desktop-services" style={{ display: isMobile ? 'none' : 'block' }}>
        <Services />
      </div>
      
      {/* Mobile Cards - Hidden on desktop */}
      <div className="mobile-services" style={{ display: isMobile ? 'block' : 'none' }}>
        <MobileCards />
      </div>
    </>
  );
};

export default ResponsiveServices; 