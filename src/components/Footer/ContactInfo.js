import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info text-white space-y-4">
            <p>Manhattan, New York, NY, United States</p>
            <div className="flex items-center">
                <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
                <a href="tel:+19997777000" className="text-blue-500">999-7777-000</a>
            </div>
            <div className="flex items-center">
                <i className="fas fa-envelope text-blue-500 mr-2"></i>
                <a href="mailto:dilipsinghf@gmail.com" className="text-blue-500">dilipsinghf@gmail.com</a>
            </div>
            <div className="flex items-center">
                <i className="fas fa-clock text-blue-500 mr-2"></i>
                <p>Mon-Fri - 08:00-19:00</p>
            </div>
        </div>
    );
};

export default ContactInfo;