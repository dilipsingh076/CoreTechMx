import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info text-white space-y-4 p-4 md:p-6 bg-gray-900 rounded-lg">
      <p className="text-sm md:text-base lg:text-lg">
        A-503, Orchid Business Park, Marol Military Road, Andheri (E), Mumbai 400059
      </p>
      <div className="flex items-center text-sm md:text-base lg:text-lg">
        <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
        <a href="tel:+918484033881" className="text-blue-500 hover:text-blue-400 transition">
          +91 84840 33881
        </a>
      </div>
      <div className="flex items-center text-sm md:text-base lg:text-lg">
        <i className="fas fa-envelope text-blue-500 mr-2"></i>
        <a href="mailto:Contact@coretechmx.com" className="text-blue-500 hover:text-blue-400 transition">
          Contact@CoreTechMX.com
        </a>
      </div>
      <div className="flex items-center text-sm md:text-base lg:text-lg">
        <i className="fas fa-clock text-blue-500 mr-2"></i>
        <p>Mon-Fri - 08:00-19:00</p>
      </div>
    </div>
  );
};

export default ContactInfo;