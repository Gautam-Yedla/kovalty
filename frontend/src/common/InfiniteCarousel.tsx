import React from 'react';
import '../styles/Testimonials.css';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ 
  children, 
  speed = 30
}) => {
  // Convert children to array to duplicate them
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className="infinite-carousel-outer">
      <div 
        className="infinite-carousel-inner"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* First set of items */}
        <div className="carousel-track">
          {childrenArray}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="carousel-track">
          {childrenArray}
        </div>
        {/* Third set to ensure smooth transition */}
        <div className="carousel-track">
          {childrenArray}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
