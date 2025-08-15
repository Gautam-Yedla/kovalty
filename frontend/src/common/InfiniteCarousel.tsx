import React from "react";
import "../styles/Testimonials.css";

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  speed = 30,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="infinite-carousel-outer">
      <div
        className="infinite-carousel-inner"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <div className="carousel-track">{childrenArray}</div>
        <div className="carousel-track">{childrenArray}</div>
        <div className="carousel-track">{childrenArray}</div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
