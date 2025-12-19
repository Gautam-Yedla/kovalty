'use client';

import { FC, useEffect, useState }                      from 'react';
import Link                                             from 'next/link';
import { Button }                                       from '@/components/ui/Button';
import { Sparkles, Zap, Rocket }                        from 'lucide-react';

export const HeroSection: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bgElements = document.querySelectorAll('.bg-element');

      bgElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className = "relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className = "absolute inset-0 opacity-30"
        style = {{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, rgba(29, 78, 216, 0.2) 30%, transparent 70%)`,
        }}
      />

      {/* Floating Background Elements */}
      <div className = "bg-element absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-kovalty-blue/20 to-kovalty-blue-dark/20 rounded-full blur-3xl animate-float" />
      <div className = "bg-element absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-kovalty-blue-light/15 to-kovalty-blue/15 rounded-full blur-3xl animate-float" style = {{ animationDelay: '2s' }} />
      <div className = "bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-kovalty-blue/10 to-transparent rounded-full blur-3xl animate-float" style = {{ animationDelay: '4s' }} />

      {/* Grid Pattern Overlay */}
      <div className = "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className = "relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className = "inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-accent/20 animate-slide-up">
          <Sparkles className = "w-4 h-4 text-accent" />
          <span className = "text-sm font-medium text-text-secondary" style = {{ color: 'var(--text-secondary)' }}>
            Transforming Businesses Through Innovation
          </span>
        </div>

        {/* Main Heading */}
        <h1 className = "text-6xl md:text-7xl lg:text-8xl font-black text-center mb-8 leading-tight animate-slide-up" style = {{ animationDelay: '0.1s' }}>
          <span className = "block text-foreground">Transforming</span>
          <span className = "block gradient-text mt-2">Businesses</span>
          <span className = "block text-foreground mt-2">Through Technology</span>
        </h1>

        {/* Subtitle */}
        <p className = "text-xl md:text-2xl text-center max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style = {{ color: 'var(--text-secondary)', animationDelay: '0.2s' }}>
          We envision a world where technology empowers businesses to reach
          their full potential. By harnessing our expertise and innovative
          mindset,
          <span className = "font-semibold" style = {{ color: 'var(--text-primary)' }}>
            {' '}
            we strive to become a trusted partner for organizations navigating
            the complexities of the digital age.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className = "flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style = {{ animationDelay: '0.3s' }}>
          <Button
            variant   = "accent"
            size      = "lg"
            className = "group relative overflow-hidden glow-lg hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href = "/contact">
              <span className = "relative z-10 flex items-center gap-2">
                <Rocket className = "w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get Started
              </span>
              <div className = "absolute inset-0 bg-gradient-to-r from-kovalty-blue-light to-kovalty-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>

          <Button
            variant   = "outline"
            size      = "lg"
            className = "group border-2 border-accent/30 text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
            asChild
          >
            <Link href = "/services">
              <span className = "flex items-center gap-2">
                <Zap className = "w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Services
              </span>
            </Link>
          </Button>
        </div>

        {/* Stats or Features */}
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style = {{ animationDelay: '0.4s' }}>
          {[
            { icon: Sparkles, label: '500+', sublabel: 'Projects Delivered' },
            { icon: Zap, label: '98%', sublabel: 'Client Satisfaction' },
            { icon: Rocket, label: '24/7', sublabel: 'Support Available' },
          ].map((stat, index) => (
            <div
              key       = {index}
              className = "glass rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className = "w-8 h-8 text-accent mb-4 mx-auto" />
              <div className = "text-3xl font-bold text-foreground mb-2">{stat.label}</div>
              <div className = "text-sm" style = {{ color: 'var(--text-secondary)' }}>{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className = "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className = "w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
          <div className = "w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
