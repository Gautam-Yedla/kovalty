import { FC } from 'react';
import { ContactForm } from '@/components/features/contact/ContactForm';

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Fill out the form below and our team will
          get back to you soon.
        </p>
      </header>
      <main className="max-w-4xl mx-auto">
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;

