import { Star, Users, Award, Shield, Code, Cloud, Lock, Lightbulb, Heart, Target, CheckCircle } from 'lucide-react';
import '../../styles/About/AboutUs.css';
// import FAQs from '../FAQs/FAQs';
// import Testimonials from '../Testimonials';
import { teamMembers } from '../../data/aboutUs'; 

const AboutUsPage = () => {

  return (
    <div className="aboutus-root">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-bg"></div>
        <div className="aboutus-hero-content">
          <h1 className="aboutus-title">
            About Kovalty Technologies
          </h1>
          <p className="aboutus-subtitle">
            Empowering businesses with innovative IT solutions that drive efficiency, security, and sustainable growth in the digital age.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="aboutus-story-section">
        <div className="aboutus-story-container">
          <div className="aboutus-story-grid">
            <div className="aboutus-story-content">
              <h2>Our Story</h2>
              <p className="aboutus-story-text">
                Founded in 2024, Kovalty Technologies emerged from a simple yet powerful vision: to make enterprise-grade IT solutions accessible to businesses of all sizes. Our founders, having witnessed countless organizations struggle with outdated technology and complex digital transformations, set out to create a different kind of IT partner.
              </p>
              <p className="aboutus-story-text">
                From our humble beginnings as a small consulting firm to becoming a trusted technology partner for hundreds of organizations worldwide, our journey has been driven by one constant: our unwavering commitment to our clients' success.
              </p>
              
              <div className="aboutus-mission-box">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with innovative, secure, and scalable IT solutions that transform challenges into opportunities, driving sustainable growth and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            
            <div className="aboutus-values-grid">
              <div className="aboutus-value-card">
                <Lightbulb />
                <h4>Innovation</h4>
                <p>Pioneering cutting-edge solutions that stay ahead of technological curves</p>
              </div>
              <div className="aboutus-value-card">
                <Shield />
                <h4>Integrity</h4>
                <p>Building trust through transparency, reliability, and ethical practices</p>
              </div>
              <div className="aboutus-value-card">
                <Heart />
                <h4>Client-Centricity</h4>
                <p>Putting our clients' success at the heart of everything we do</p>
              </div>
              <div className="aboutus-value-card">
                <Target />
                <h4>Excellence</h4>
                <p>Delivering superior quality in every project and interaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="aboutus-services-section">
        <div className="aboutus-services-container">
          <div className="aboutus-section-header">
            <h2>What We Do</h2>
            <p>
              We provide comprehensive IT services that transform your technology challenges into competitive advantages, driving efficiency and sustainable growth.
            </p>
          </div>
          
          <div className="aboutus-services-grid">
            <div className="aboutus-service-card">
              <Code />
              <h3>Software Development</h3>
              <p>Custom applications, web platforms, and mobile solutions built with modern technologies and best practices.</p>
            </div>
            
            <div className="aboutus-service-card">
              <Cloud />
              <h3>Cloud Solutions</h3>
              <p>Migration, optimization, and management of cloud infrastructure for scalability and cost-effectiveness.</p>
            </div>
            
            <div className="aboutus-service-card">
              <Lock />
              <h3>Cybersecurity</h3>
              <p>Comprehensive security audits, implementation, and monitoring to protect your digital assets.</p>
            </div>
            
            <div className="aboutus-service-card">
              <Users />
              <h3>IT Consulting</h3>
              <p>Strategic technology planning and digital transformation guidance tailored to your business goals.</p>
            </div>
          </div>
          
          <div className="aboutus-approach-box">
            <h3>Our Approach</h3>
            <p>
              We believe that technology should be an enabler, not a barrier. Our methodology focuses on understanding your unique business challenges first, then crafting tailored solutions that integrate seamlessly with your existing operations. Through collaborative partnerships, rigorous testing, and continuous optimization, we ensure our solutions not only meet your current needs but scale with your future growth. Every project is approached with a commitment to efficiency, security, and measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="aboutus-team-section">
        <div className="aboutus-team-container">
          <div className="aboutus-section-header">
            <h2>Meet the Team</h2>
            <p>
              Our diverse team of experts brings together decades of experience in technology, security, and business transformation.
            </p>
          </div>
          
          <div className="aboutus-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="aboutus-team-card">
                {/* Placeholder for professional photo */}
                <div className="aboutus-team-avatar">
                  <Users />
                </div>
                <h3>{member.name}</h3>
                <p className="aboutus-team-title">{member.title}</p>
                <p className="aboutus-team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="aboutus-culture-box">
            <h3>Our Team Culture</h3>
            <p>
              At Kovalty, we foster a collaborative environment where expertise meets creativity. Our team culture is built on continuous learning, open communication, and shared accountability for client success. We believe that diverse perspectives drive innovation, and we encourage our team members to bring their unique experiences and insights to every project. With regular knowledge sharing sessions, cross-functional collaboration, and a commitment to professional development, we ensure our team stays at the cutting edge of technology while maintaining the human touch that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="aboutus-choose-section">
        <div className="aboutus-choose-container">
          <div className="aboutus-section-header">
            <h2>Why Choose Kovalty?</h2>
            <p>
              Our unique combination of expertise, commitment, and proven results sets us apart in the competitive IT services landscape.
            </p>
          </div>
          
          <div className="aboutus-benefits-grid">
            <div className="aboutus-benefit-card">
              <CheckCircle />
              <h3>Specialized Expertise</h3>
              <p>Deep domain knowledge in fintech, healthcare, and e-commerce industries with cutting-edge technology stack mastery.</p>
            </div>
            
            <div className="aboutus-benefit-card">
              <Star />
              <h3>Exceptional Support</h3>
              <p>24/7 support with dedicated account managers ensuring your systems run smoothly and your goals are met.</p>
            </div>
            
            <div className="aboutus-benefit-card">
              <Award />
              <h3>Proven Track Record</h3>
              <p>500+ successful projects with 98% client satisfaction rate and average 40% efficiency improvements.</p>
            </div>
          </div>
          
          <div className="aboutus-certifications-box">
            <h3>Certifications & Partnerships</h3>
            <div className="aboutus-certifications-grid">
              <div className="aboutus-certification-item">
                <Shield />
                <p>Microsoft Gold Partner</p>
              </div>
              <div className="aboutus-certification-item">
                <Cloud />
                <p>AWS Advanced Partner</p>
              </div>
              <div className="aboutus-certification-item">
                <Lock />
                <p>ISO 27001 Certified</p>
              </div>
              <div className="aboutus-certification-item">
                <Award />
                <p>CISSP Certified Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* <section className="aboutus-testimonials-section">
        <div className="aboutus-testimonials-container">
          <div className="aboutus-section-header">
            <h2>What Our Clients Say</h2>
            <p>
              Don't just take our word for it. Here's what industry leaders say about working with Kovalty Technologies.
            </p>
          </div>
          
          <div className="aboutus-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="aboutus-testimonial-card">
                <Quote />
                <p className="aboutus-testimonial-quote">"{testimonial.quote}"</p>
                <div className="aboutus-testimonial-divider">
                  <p className="aboutus-testimonial-author">{testimonial.author}</p>
                  <p className="aboutus-testimonial-title">{testimonial.title}</p>
                  <p className="aboutus-testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}




      {/* <Testimonials /> */}


      {/* Company Timeline */}
      {/* <section className="aboutus-timeline-section">
        <div className="aboutus-timeline-container">
          <div className="aboutus-section-header">
            <h2>Our Journey</h2>
            <p>
              Key milestones that have shaped Kovalty Technologies into the trusted partner we are today.
            </p>
          </div>
          
          <div className="aboutus-timeline-wrapper">
            <div className="aboutus-timeline-line"></div>
            <div className="aboutus-timeline-items">
              {milestones.map((milestone, index) => (
                <div key={index} className="aboutus-timeline-item">
                  <div className="aboutus-timeline-content">
                    <div className="aboutus-timeline-year">
                      {milestone.year}
                    </div>
                    <p className="aboutus-timeline-event">{milestone.event}</p>
                  </div>
                  <div className="aboutus-timeline-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <FAQs /> */}

    </div>
  );
};

export default AboutUsPage;