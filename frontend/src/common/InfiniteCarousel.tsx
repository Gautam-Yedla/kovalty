import { FC, ReactNode, Children }          from 'react';
import '@/styles/Testimonials.css';

interface IProps {
  children: ReactNode;
  speed   ?: number;
}

const InfiniteCarousel: FC<IProps> = ({
  children,
  speed = 30,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className = "infinite-carousel-outer">
      <div
        className = "infinite-carousel-inner"
        style     = {{
          animationDuration: `${speed}s`,
        }}
      >
        <div className = "carousel-track">{childrenArray}</div>
        <div className = "carousel-track">{childrenArray}</div>
        <div className = "carousel-track">{childrenArray}</div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
