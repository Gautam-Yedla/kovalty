import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons/Icons";
import "../../styles/FAQs/FAQs.css";
import { faqs } from "../../data/faqs";

const FAQs: React.FC = () => {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);

 const toggleFAQ = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
 };

 return (
  <section className="faqs-section">
   <div className="faqs-container">
    <div className="faqs-content-wrapper">
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
   </div>
  </section>
 );
};

export default FAQs;