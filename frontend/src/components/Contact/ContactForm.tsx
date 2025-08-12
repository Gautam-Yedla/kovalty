import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import '../../styles/Contact/ContactForm.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@kovalty.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 76618 05678',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Plot No 54, Tripura Landmark-II,\nBowrampet, Hyderabad - 500043,\nTelangana, India',
      description: 'Come say hello at our office'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* <div className="contact-header">
          <h2 className="contact-title">
            Get In Touch
          </h2>
          <p className="contact-description">
            Ready to transform your business with technology? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div> */}

        <div className="contact-grid">
          <div className="contact-info-blocks">
            <div>
              <h3 className="contact-subtitle">Let's Start a Conversation</h3>
              <p className="contact-subdesc">
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Our team of experts is ready to discuss your needs and provide tailored solutions.
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    <info.icon className="icon-svg" />
                  </div>
                  <div>
                    <h4 className="contact-info-title">{info.title}</h4>
                    <p className="contact-info-details">
                      {info.details.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < info.details.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="contact-info-desc">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-extra-block">
              <div className="contact-extra-row">
                <Clock className="icon-svg" />
                <h4 className="contact-extra-title">Response Time</h4>
              </div>
              <p className="contact-extra-desc">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="contact-extra-row">
                <Globe className="icon-svg" />
                <h4 className="contact-extra-title">Global Reach</h4>
              </div>
              <p className="contact-extra-desc">
                We work with clients across multiple time zones and can accommodate meetings at your convenience.
              </p>
            </div>
          </div>

          <div className="contact-form-block">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="contact-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="contact-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="contact-input"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="contact-label">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-textarea"
                  placeholder="Tell us about your project, timeline, and specific requirements..."
                />
              </div>
              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <Send className="icon-svg ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
