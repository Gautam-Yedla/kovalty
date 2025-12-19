'use client';

import { FC, useEffect }                 from 'react';
import Link                              from 'next/link';

const HeroSection: FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bgElements = document.querySelectorAll('.bg-element');

      bgElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        (element as HTMLElement).style.transform = `translateY(${
          scrolled * speed
        }px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className = "relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className = "bg-element absolute inset-0 opacity-20"></div>
      <div className = "bg-element absolute inset-0 opacity-10"></div>
      <div className = "bg-element absolute inset-0 opacity-5"></div>

      <h1 className = "text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 z-10">
        Transforming
        <br />
        <span className = "text-accent">Businesses</span> Through Technology
      </h1>

      <p className = "text-lg md:text-xl text-muted-foreground text-center max-w-3xl mb-8 z-10">
        We envision a world where technology empowers businesses to reach
        their full potential. By harnessing our expertise and innovative
        mindset,
        <span className = "font-medium text-foreground">
          {' '}
          we strive to become a trusted partner for organizations navigating
          the complexities of the digital age.
        </span>
      </p>

      <Link
        href      = "/contact"
        className  = "inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:translate-y-[-2px] active:scale-95 z-10"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default HeroSection;
