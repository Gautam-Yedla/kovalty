'use client';

import { FC } from 'react';
import { ReadAllArrowIcon } from '@/icons/Icons';
import InfiniteCarousel from '@/common/InfiniteCarousel';
import TestimonialCard from '@/cards/TestimonialCard';
import { testimonialsData, buttonAvatars } from '@/data/testimonials';
import { Button } from '@/components/ui/Button';
import '@/styles/Testimonials.css';

export const Testimonials: FC = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <div className="testimonials-tag-wrapper">
                        <span className="testimonials-tag">TESTIMONIALS</span>
                    </div>
                    <h2 className="testimonials-heading">
                        Real stories from beloved clients
                    </h2>
                    <p className="testimonials-subheading">
                        See how businesses just like yours are leveling up with a little
                        help from our AI magic!
                    </p>
                </div>
            </div>

            <InfiniteCarousel speed={20}>
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                    />
                ))}
            </InfiniteCarousel>

            <div className="testimonials-footer">
                <Button
                    variant="ghost"
                    className="read-all-button h-auto p-0 hover:bg-transparent"
                    asChild
                >
                    <a href="#reviews">
                        <div className="read-all-avatars">
                            {buttonAvatars.map((avatar) => (
                                <img
                                    key={avatar.id}
                                    src={avatar.src}
                                    alt={`User avatar ${avatar.id}`}
                                    className="read-all-avatar-img"
                                />
                            ))}
                        </div>
                        <div className="read-all-text-wrapper">
                            <span className="read-all-text">Read All Stories</span>
                            <ReadAllArrowIcon className="read-all-icon" />
                        </div>
                    </a>
                </Button>
            </div>
        </section>
    );
};
