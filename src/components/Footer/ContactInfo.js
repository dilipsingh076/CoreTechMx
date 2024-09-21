import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info text-white space-y-4 p-4 md:p-6 bg-gray-900 rounded-lg">
      <div className="flex items-start md:items-center text-sm md:text-base lg:text-lg space-x-5 md:space-x-3">
        <i className="fas fa-map-marker-alt text-blue-500 md:text-2xl"></i>
        <span>A-503, Orchid Business Park, Marol Military Road, Andheri (E), Mumbai 400059</span>
      </div>
      <div className="flex items-start md:items-center text-sm md:text-base lg:text-lg space-x-4">
        <i className="fas fa-envelope text-blue-500 md:text-2xl"></i>
        <a href="mailto:Contact@coretechmx.com" className="text-blue-500 hover:text-blue-400 transition">
          Contact@CoreTechMX.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;