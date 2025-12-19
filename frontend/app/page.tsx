import { FC }                            from 'react';
import Link                               from 'next/link';
import { Phone, ArrowRight, Sparkles }    from 'lucide-react';
import { HeroSection }                   from '@/components/features/home/HeroSection';
import { servicesData }                  from '@/data/services';
import { Button }                        from '@/components/ui/Button';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />

      <section className = "py-32 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className = "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className = "absolute top-20 left-20 w-96 h-96 bg-kovalty-blue/20 rounded-full blur-3xl" />
          <div className = "absolute bottom-20 right-20 w-96 h-96 bg-kovalty-blue-light/20 rounded-full blur-3xl" />
        </div>

        <div className = "max-w-7xl mx-auto relative z-10">
          <div className = "text-center mb-16 animate-fade-in">
            <div className = "inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-accent/20">
              <Sparkles className = "w-4 h-4 text-accent" />
              <span className = "text-sm font-medium" style = {{ color: 'var(--text-secondary)' }}>Our Expertise</span>
            </div>
            <h2 className = "text-5xl md:text-6xl font-black mb-6 gradient-text">
              Our Services
            </h2>
            <p className = "text-xl max-w-2xl mx-auto" style = {{ color: 'var(--text-secondary)' }}>
              A complete suite of services to bring your digital vision to life.
            </p>
          </div>

          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link
                key       = {service.slug}
                href      = {`/services/${service.slug}`}
                className  = "group block glass rounded-2xl p-8 border border-accent/10 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden animate-slide-up"
                style     = {{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className = "absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className = "relative z-10">
                  {/* Icon Placeholder */}
                  <div className = "w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Sparkles className = "w-7 h-7 text-accent" />
                  </div>

                  <h3 className = "text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className = "mb-6 line-clamp-3 leading-relaxed" style = {{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                  <span className = "inline-flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Explore More
                    <ArrowRight className = "w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </div>

                {/* Decorative Corner Element */}
                <div className = "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className = "py-32 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className = "absolute inset-0 bg-gradient-to-br from-kovalty-blue-dark via-kovalty-blue to-kovalty-blue-light opacity-20" />
        <div className = "absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className = "absolute top-20 left-20 w-96 h-96 bg-kovalty-blue rounded-full blur-3xl animate-pulse" />
          <div className = "absolute bottom-20 right-20 w-96 h-96 bg-kovalty-blue-light rounded-full blur-3xl animate-pulse" style = {{ animationDelay: '1s' }} />
        </div>

        <div className = "max-w-5xl mx-auto text-center relative z-10">
          <div className = "inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-accent/30">
            <Sparkles className = "w-4 h-4 text-accent" />
            <span className = "text-sm font-medium" style = {{ color: 'var(--text-secondary)' }}>Let's Build Something Great</span>
          </div>

          <h2 className = "text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-foreground leading-tight">
            Ready to Transform
            <br />
            <span className = "gradient-text">Your Business?</span>
          </h2>
            <p className = "text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style = {{ color: 'var(--text-secondary)' }}>
            Let's discuss how Kovalty Technologies can help you achieve your
            technology goals and drive sustainable growth.
          </p>

          <div className = "flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant   = "accent"
              size      = "lg"
              className = "group flex items-center gap-2 glow-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href = "/contact">
                <Phone className = "w-5 h-5 group-hover:rotate-12 transition-transform" />
                Schedule Free Consultation
              </Link>
            </Button>

            <Button
              variant   = "outline"
              size      = "lg"
              className = "group flex items-center gap-2 border-2 border-accent/30 text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
              asChild
            >
              <Link href = "/services">
                <ArrowRight className = "w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

