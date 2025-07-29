import React from 'react';
import HeroSection from '../../components/Sections/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Kovalty</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We deliver innovative technology solutions to help your business grow. Explore our services and get in touch to start your digital transformation journey.
        </p>
      </section>
    </div>
  );
};

export default Home;
