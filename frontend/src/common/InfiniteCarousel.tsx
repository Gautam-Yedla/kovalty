// import React from 'react';

// interface InfiniteCarouselProps {
//   children: React.ReactNode;
//   speed?: number;
// }

// const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ 
//   children, 
//   speed = 50 
// }) => (
//   <div className="overflow-hidden">
//     <div 
//       className="flex animate-scroll"
//       style={{
//         animationDuration: `${speed}s`,
//         animationTimingFunction: 'linear',
//         animationIterationCount: 'infinite'
//       }}
//     >
//       {children}
//       {children}
//     </div>
//   </div>
// );

// export default InfiniteCarousel;







import React from 'react';
import '../styles/Testimonials.css'

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ 
  children, 
  speed = 50
}) => (
  <div className="infinite-carousel-outer">
    <div 
      className="infinite-carousel-inner"
      style={{
        animationDuration: `${speed}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  </div>
);

export default InfiniteCarousel;
