import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const FooterSection = () => {
  const footerLinks = {
    Services: [
      'Software Development',
      'Data Engineering',
      'Cloud Solutions',
      'Mobile Development',
      'AI & Machine Learning',
      'Cybersecurity'
    ],
    Industries: [
      'Healthcare',
      'Financial Services',
      'E-commerce',
      'Logistics',
      'Education',
      'Real Estate'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Support Center',
      'Privacy Policy',
      'Terms of Service',
      'Security'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Kovalty</h3>
              <p className="text-gray-300 leading-relaxed mb-6" style={{ color: 'var(--kovalty-gray)' }}>
                Transforming businesses through innovative technology solutions. We deliver cutting-edge software development, data engineering, and digital transformation services.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center" style={{ color: 'var(--kovalty-gray)' }}>
                <Mail className="w-4 h-4 mr-3" />
                hello@kovalty.com
              </div>
              <div className="flex items-center" style={{ color: 'var(--kovalty-gray)' }}>
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center" style={{ color: 'var(--kovalty-gray)' }}>
                <MapPin className="w-4 h-4 mr-3" />
                San Francisco, CA
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ 
                    backgroundColor: 'var(--kovalty-gray)',
                    color: 'var(--kovalty-black)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--kovalty-pink)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--kovalty-gray)';
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="transition-colors duration-200 text-sm"
                      style={{ color: 'var(--kovalty-gray)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--kovalty-pink)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--kovalty-gray)';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8" style={{ borderColor: 'var(--kovalty-gray)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: 'var(--kovalty-gray)' }}>
              © 2024 Kovalty. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="transition-colors duration-200"
                style={{ color: 'var(--kovalty-gray)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-gray)';
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="transition-colors duration-200"
                style={{ color: 'var(--kovalty-gray)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-gray)';
                }}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="transition-colors duration-200"
                style={{ color: 'var(--kovalty-gray)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--kovalty-gray)';
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
