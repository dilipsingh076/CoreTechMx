import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({id}) => {
    return (
        <section id={id} className="contact-page bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactPage;