import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({id}) => {
    return (
        <section className="contact-page bg-gray-900 text-white py-16 flex justify-center items-center">
            <div className="container mx-auto">
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactPage;
