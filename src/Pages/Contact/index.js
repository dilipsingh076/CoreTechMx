import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({id}) => {
    return (
        <section id={id} className="contact-page  text-white py-16 flex justify-center items-center">
            <div className="container mx-auto">
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactPage;
