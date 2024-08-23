import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <div className="contact-page bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;