import React from 'react';
import { Star, Users, Zap, Shield, ArrowRight } from 'lucide-react';

export const DemoContent: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kovalty-black dark:text-white mb-6 animate-fade-in">
            Professional
            <span className="text-kovalty-pink"> Navbar </span>
            Component
          </h1>
          <p className="text-lg sm:text-xl text-kovalty-black/70 dark:text-kovalty-gray/70 mb-8 animate-fade-in delay-200">
            Responsive, accessible, and beautifully animated navigation with theme support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <button className="px-8 py-3 bg-kovalty-pink text-white rounded-lg hover:bg-kovalty-pink/90 focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black transform hover:scale-105 transition-all duration-200 ease-in-out">
              Get Started
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 border-2 border-kovalty-pink text-kovalty-pink hover:bg-kovalty-pink hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black transform hover:scale-105 transition-all duration-200 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-kovalty-gray/5 dark:bg-kovalty-pink/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-kovalty-black dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Design',
                description: 'Beautiful, modern design with smooth animations',
              },
              {
                icon: Users,
                title: 'Fully Responsive',
                description: 'Works perfectly on all devices and screen sizes',
              },
              {
                icon: Zap,
                title: 'Theme Support',
                description: 'Light and dark mode with smooth transitions',
              },
              {
                icon: Shield,
                title: 'Accessible',
                description: 'Built with accessibility best practices in mind',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white dark:bg-kovalty-black/50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-kovalty-pink/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-kovalty-pink" />
                </div>
                <h3 className="text-lg font-semibold text-kovalty-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-kovalty-black/70 dark:text-kovalty-gray/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-kovalty-black dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-kovalty-black/70 dark:text-kovalty-gray/70 mb-8">
            Ready to implement this navbar in your project? Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-kovalty-pink text-white rounded-lg hover:bg-kovalty-pink/90 focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black transform hover:scale-105 transition-all duration-200 ease-in-out">
              Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-kovalty-gray dark:border-kovalty-pink text-kovalty-black dark:text-kovalty-gray hover:bg-kovalty-gray/10 dark:hover:bg-kovalty-pink/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black transform hover:scale-105 transition-all duration-200 ease-in-out">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};