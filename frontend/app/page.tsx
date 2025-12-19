import { FC }                            from 'react';
import Link                              from 'next/link';
import { Phone, ArrowRight }              from 'lucide-react';
import HeroSection                        from '@/components/HeroSection';
import { servicesData }                  from '@/data/services';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />

      <section className = "py-20 px-4">
        <div className = "max-w-7xl mx-auto">
          <div className = "text-center mb-12">
            <h2 className = "text-4xl font-bold mb-4">Our Services</h2>
            <p className = "text-lg text-muted-foreground">
              A complete suite of services to bring your digital vision to life.
            </p>
          </div>

          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link
                key       = {service.slug}
                href      = {`/services/${service.slug}`}
                className  = "block p-6 border border-border hover:border-accent transition-all duration-200 hover:shadow-lg"
              >
                <h3 className = "text-xl font-semibold mb-2">{service.title}</h3>
                <p className = "text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className = "text-accent font-medium">
                  Explore More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className = "py-20 px-4 bg-primary text-primary-foreground">
        <div className = "max-w-4xl mx-auto text-center">
          <h2 className = "text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className = "text-lg mb-8">
            Let's discuss how Kovalty Technologies can help you achieve your
            technology goals and drive sustainable growth.
          </p>

          <div className = "flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href      = "/contact"
              className  = "inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:translate-y-[-2px] active:scale-95"
            >
              <Phone className = "w-5 h-5" />
              Schedule Free Consultation
            </Link>

            <Link
              href      = "/services"
              className  = "inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold transition-all duration-200 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 hover:shadow-md active:scale-95"
            >
              <ArrowRight className = "w-5 h-5" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

