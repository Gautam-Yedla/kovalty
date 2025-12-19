import { FC }                              from 'react';
import {
  CornerCurveBottomLeftIcon,
  CornerCurveTopRightIcon,
}                                          from '@/icons/Icons';
import '@/styles/cardStyling/TestimonialCardStyling.css';

export interface ITestimonial {
  name  : string;
  role  : string;
  text  : string;
  avatar: string;
}

interface IProps {
  testimonial: ITestimonial;
}

const TestimonialCard: FC<IProps> = ({ testimonial }) => {
  return (
    <div className = "testimonial-card">
      <div className = "testimonial-card-content">
        <span className = "testimonial-card-quote-mark">"</span>
        <p className = "testimonial-card-name">{testimonial.name}</p>
        <p className = "testimonial-card-role">{testimonial.role}</p>
        <blockquote className = "testimonial-card-text">
          {testimonial.text}
        </blockquote>
        <div className = "testimonial-card-avatar-wrapper">
          <img
            src       = {testimonial.avatar}
            alt       = {testimonial.name}
            className = "testimonial-card-avatar"
          />
          <CornerCurveTopRightIcon className = "corner-icon top-right" />
          <CornerCurveBottomLeftIcon className = "corner-icon bottom-left" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
