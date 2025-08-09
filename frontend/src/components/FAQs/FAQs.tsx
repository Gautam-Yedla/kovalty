import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons/Icons";
import "../../styles/FAQs/FAQs.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Kovalty Technologies different from other IT service providers?",
    answer:
      "We combine deep technical expertise with a client-first approach, offering enterprise-grade solutions tailored to businesses of all sizes. Our team focuses on security, scalability, and measurable business impact."
  },
  {
    question: "Do you work with small businesses or only large enterprises?",
    answer:
      "We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are designed to scale with your business growth and adapt to your specific needs and budget."
  },
  {
    question: "How involved is your team during project implementation?",
    answer:
      "Our team provides hands-on support throughout the entire project lifecycle. You'll have dedicated project managers, regular progress updates, and 24/7 support to ensure seamless implementation."
  },
  {
    question: "Can I start with one service before committing to a full digital transformation?",
    answer:
      "Absolutely. Many clients start with a single service like cybersecurity audit or cloud migration, then expand as they see results. We offer flexible engagement models to match your comfort level."
  },
  {
    question: "How do you ensure security and compliance in your solutions?",
    answer:
      "Security is at the core of everything we do. We're ISO 27001 certified, follow industry best practices, and ensure all solutions meet relevant compliance requirements including GDPR, HIPAA, and SOC 2."
  },
  {
    question: "What kind of results and ROI can I expect from your services?",
    answer:
      "While results vary by project, our clients typically see 40% improved operational efficiency, reduced IT costs, and enhanced security posture. We provide detailed analytics and ROI reports for all engagements."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and strategic consulting to ensure your technology continues to drive business value."
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on scope and complexity. Simple implementations may take 2-4 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed timelines during our initial consultation."
  }
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        <div className="faqs-header">
          <h2 className="faqs-title">FAQs</h2>
          <p className="faqs-subtitle">
            Find answers to common questions about our IT services and solutions. 
            Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>
        
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "faq-item--active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <ChevronDownIcon 
                  className={`faq-chevron ${activeIndex === index ? "faq-chevron--rotated" : ""}`} 
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${activeIndex === index ? "faq-answer--open" : ""}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
