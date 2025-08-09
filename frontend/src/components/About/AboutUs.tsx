import React from 'react';
import { Star, Users, Award, Shield, Code, Cloud, Lock, Lightbulb, Heart, Target, Quote, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer",
      bio: "With over 15 years in enterprise technology, Sarah leads Kovalty's vision of transforming businesses through innovative IT solutions. Former VP at Oracle, she brings deep industry expertise and strategic leadership."
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Michael architects our cutting-edge solutions with 12+ years in cloud infrastructure. AWS Solutions Architect Pro certified, he ensures our technology stack remains at the forefront of innovation."
    },
    {
      name: "Dr. Priya Patel",
      title: "Head of Cybersecurity",
      bio: "PhD in Cybersecurity from MIT, Priya leads our security practice with expertise in zero-trust architectures. She's published extensively on enterprise security and holds CISSP certification."
    },
    {
      name: "David Kim",
      title: "Director of Software Development",
      bio: "Full-stack architect with passion for scalable solutions. David's team has delivered 200+ successful projects across fintech, healthcare, and e-commerce industries over the past decade."
    }
  ];

  const testimonials = [
    {
      quote: "Kovalty transformed our legacy systems into a modern, cloud-first infrastructure. Their expertise and dedication exceeded our expectations, resulting in 40% improved efficiency.",
      author: "Jennifer Martinez",
      company: "TechCorp Solutions",
      title: "VP of Operations"
    },
    {
      quote: "The cybersecurity audit and implementation by Kovalty's team gave us peace of mind. Their proactive approach prevented potential threats and ensured compliance.",
      author: "Robert Thompson",
      company: "Financial Partners LLC",
      title: "CISO"
    },
    {
      quote: "Working with Kovalty on our digital transformation was seamless. They understood our business needs and delivered solutions that drove real growth.",
      author: "Amanda Foster",
      company: "Retail Dynamics",
      title: "Chief Digital Officer"
    }
  ];

  const milestones = [
    { year: "2018", event: "Kovalty Technologies founded with a vision to democratize enterprise IT" },
    { year: "2019", event: "Achieved Microsoft Gold Partner status and expanded to 25 team members" },
    { year: "2021", event: "Launched cloud migration practice, helping 100+ companies transition to cloud" },
    { year: "2023", event: "ISO 27001 certification achieved, establishing security excellence" },
    { year: "2024", event: "Reached 500+ successful project milestone and expanded internationally" }
  ];

  return (
  <div className="aboutus-root">
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
      <section className="aboutus-story">
        <div className="aboutus-story-container">
          <div className="aboutus-story-grid">
            <div>
              <h2 className="aboutus-section-title">Our Story</h2>
              <p className="aboutus-section-text">
                Founded in 2018, Kovalty Technologies emerged from a simple yet powerful vision: to make enterprise-grade IT solutions accessible to businesses of all sizes. Our founders, having witnessed countless organizations struggle with outdated technology and complex digital transformations, set out to create a different kind of IT partner.
              </p>
              <p className="aboutus-section-text">
                From our humble beginnings as a small consulting firm to becoming a trusted technology partner for hundreds of organizations worldwide, our journey has been driven by one constant: our unwavering commitment to our clients' success.
              </p>
              <div className="aboutus-mission">
                <h3 className="aboutus-mission-title">Our Mission</h3>
                <p className="aboutus-mission-text">
                  To empower businesses with innovative, secure, and scalable IT solutions that transform challenges into opportunities, driving sustainable growth and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="aboutus-values-grid">
              <div className="aboutus-value-card">
                <Lightbulb className="aboutus-value-icon" />
                <h4 className="aboutus-value-title">Innovation</h4>
                <p className="aboutus-value-text">Pioneering cutting-edge solutions that stay ahead of technological curves</p>
              </div>
              <div className="aboutus-value-card">
                <Shield className="aboutus-value-icon" />
                <h4 className="aboutus-value-title">Integrity</h4>
                <p className="aboutus-value-text">Building trust through transparency, reliability, and ethical practices</p>
              </div>
              <div className="aboutus-value-card">
                <Heart className="aboutus-value-icon" />
                <h4 className="aboutus-value-title">Client-Centricity</h4>
                <p className="aboutus-value-text">Putting our clients' success at the heart of everything we do</p>
              </div>
              <div className="aboutus-value-card">
                <Target className="aboutus-value-icon" />
                <h4 className="aboutus-value-title">Excellence</h4>
                <p className="aboutus-value-text">Delivering superior quality in every project and interaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="aboutus-services">
        <div className="aboutus-services-container">
          <div className="aboutus-services-header">
            <h2 className="aboutus-section-title">What We Do</h2>
            <p className="aboutus-section-text">
              We provide comprehensive IT services that transform your technology challenges into competitive advantages, driving efficiency and sustainable growth.
            </p>
          </div>
          <div className="aboutus-services-grid">
            <div className="aboutus-service-card">
              <Code className="aboutus-service-icon" />
              <h3 className="aboutus-service-title">Software Development</h3>
              <p className="aboutus-service-text">Custom applications, web platforms, and mobile solutions built with modern technologies and best practices.</p>
            </div>
            <div className="aboutus-service-card">
              <Cloud className="aboutus-service-icon" />
              <h3 className="aboutus-service-title">Cloud Solutions</h3>
              <p className="aboutus-service-text">Migration, optimization, and management of cloud infrastructure for scalability and cost-effectiveness.</p>
            </div>
            <div className="aboutus-service-card">
              <Lock className="aboutus-service-icon" />
              <h3 className="aboutus-service-title">Cybersecurity</h3>
              <p className="aboutus-service-text">Comprehensive security audits, implementation, and monitoring to protect your digital assets.</p>
            </div>
            <div className="aboutus-service-card">
              <Users className="aboutus-service-icon" />
              <h3 className="aboutus-service-title">IT Consulting</h3>
              <p className="aboutus-service-text">Strategic technology planning and digital transformation guidance tailored to your business goals.</p>
            </div>
          </div>
          <div className="aboutus-approach">
            <h3 className="aboutus-approach-title">Our Approach</h3>
            <p className="aboutus-approach-text">
              We believe that technology should be an enabler, not a barrier. Our methodology focuses on understanding your unique business challenges first, then crafting tailored solutions that integrate seamlessly with your existing operations. Through collaborative partnerships, rigorous testing, and continuous optimization, we ensure our solutions not only meet your current needs but scale with your future growth. Every project is approached with a commitment to efficiency, security, and measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#54a9e0]">Meet the Team</h2>
            <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, security, and business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#3a3a3a] p-6 rounded-lg text-center hover:bg-[#4a4a4a] transition-all">
                {/* Placeholder for professional photo */}
                <div className="w-32 h-32 bg-[#54a9e0] rounded-full mx-auto mb-6 flex items-center justify-content">
                  <Users className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#54a9e0] font-medium mb-4">{member.title}</p>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#54a9e0]">Our Team Culture</h3>
            <p className="text-lg text-[#e0e0e0] leading-relaxed">
              At Kovalty, we foster a collaborative environment where expertise meets creativity. Our team culture is built on continuous learning, open communication, and shared accountability for client success. We believe that diverse perspectives drive innovation, and we encourage our team members to bring their unique experiences and insights to every project. With regular knowledge sharing sessions, cross-functional collaboration, and a commitment to professional development, we ensure our team stays at the cutting edge of technology while maintaining the human touch that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#54a9e0]">Why Choose Kovalty?</h2>
            <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
              Our unique combination of expertise, commitment, and proven results sets us apart in the competitive IT services landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#2a2a2a] p-8 rounded-lg">
              <CheckCircle className="w-12 h-12 text-[#54a9e0] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Specialized Expertise</h3>
              <p className="text-[#a0a0a0] leading-relaxed">Deep domain knowledge in fintech, healthcare, and e-commerce industries with cutting-edge technology stack mastery.</p>
            </div>
            
            <div className="bg-[#2a2a2a] p-8 rounded-lg">
              <Star className="w-12 h-12 text-[#54a9e0] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Exceptional Support</h3>
              <p className="text-[#a0a0a0] leading-relaxed">24/7 support with dedicated account managers ensuring your systems run smoothly and your goals are met.</p>
            </div>
            
            <div className="bg-[#2a2a2a] p-8 rounded-lg">
              <Award className="w-12 h-12 text-[#54a9e0] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-[#a0a0a0] leading-relaxed">500+ successful projects with 98% client satisfaction rate and average 40% efficiency improvements.</p>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#54a9e0]">Certifications & Partnerships</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#3a3a3a] p-4 rounded text-center">
                <Shield className="w-8 h-8 text-[#54a9e0] mx-auto mb-2" />
                <p className="font-medium">Microsoft Gold Partner</p>
              </div>
              <div className="bg-[#3a3a3a] p-4 rounded text-center">
                <Cloud className="w-8 h-8 text-[#54a9e0] mx-auto mb-2" />
                <p className="font-medium">AWS Advanced Partner</p>
              </div>
              <div className="bg-[#3a3a3a] p-4 rounded text-center">
                <Lock className="w-8 h-8 text-[#54a9e0] mx-auto mb-2" />
                <p className="font-medium">ISO 27001 Certified</p>
              </div>
              <div className="bg-[#3a3a3a] p-4 rounded text-center">
                <Award className="w-8 h-8 text-[#54a9e0] mx-auto mb-2" />
                <p className="font-medium">CISSP Certified Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#54a9e0]">What Our Clients Say</h2>
            <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with Kovalty Technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#3a3a3a] p-8 rounded-lg hover:bg-[#4a4a4a] transition-colors">
                <Quote className="w-10 h-10 text-[#54a9e0] mb-6" />
                <p className="text-[#e0e0e0] leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-[#626262] pt-4">
                  <p className="font-semibold text-[#54a9e0]">{testimonial.author}</p>
                  <p className="text-[#a0a0a0] text-sm">{testimonial.title}</p>
                  <p className="text-[#a0a0a0] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#54a9e0]">Our Journey</h2>
            <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
              Key milestones that have shaped Kovalty Technologies into the trusted partner we are today.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#54a9e0]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-[#2a2a2a] p-6 rounded-lg max-w-md hover:bg-[#3a3a3a] transition-colors ${index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-[#54a9e0] text-white px-4 py-2 rounded-full font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <p className="text-[#e0e0e0] leading-relaxed">{milestone.event}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#54a9e0] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#54a9e0] to-[#3d7ba8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Kovalty Technologies can help you achieve your technology goals and drive sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#54a9e0] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#54a9e0] transition-colors flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Our Services
            </button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>hello@kovalty.com</span>
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (555) 123-TECH</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;