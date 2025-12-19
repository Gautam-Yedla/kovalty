import { FC }                              from 'react';

interface IProps {
  delay: number;
  size : number;
  color: string;
}

const FloatingElement: FC<IProps> = ({
  delay,
  size,
  color,
}) => (
  <div
    className = {`absolute rounded-full ${color} opacity-20 animate-float`}
    style     = {{
      width           : `${size}px`,
      height          : `${size}px`,
      left            : `${Math.random() * 100}%`,
      top             : `${Math.random() * 100}%`,
      animationDelay  : `${delay}ms`,
      animationDuration: `${3000 + Math.random() * 2000}ms`,
    }}
  />
);

export default FloatingElement;
