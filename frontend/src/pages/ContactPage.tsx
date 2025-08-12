import ContactForm from '../components/Contact/ContactForm';
import '../styles/pageStyling/ContactPageStyling.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <header className="contact-page-header">
        <h1 className="contact-page-title">Contact Us</h1>
        <p className="contact-page-subtitle">We'd love to hear from you. Fill out the form below and our team will get back to you soon.</p>
      </header>
      <main className="contact-page-main">
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;
