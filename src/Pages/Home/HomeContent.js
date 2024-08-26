import React from 'react';
import { services } from '../../constant/serviceData'; // Adjust the path as needed

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Innovate with CoreTechMX</h1>
        <div className="w-20 h-1 bg-blue-900 mb-4 mx-auto"></div>
        <p className="text-lg md:text-xl mb-8">
          At CoreTechMX Solutions, we are at the forefront of technology innovation, providing comprehensive solutions across a range of industries.
          Specializing in embedded systems, automation, semiconductors, mobile and web app development, robotics, microcontrollers, Linux, and IoT,
          we empower businesses to excel in the digital age.
        </p>
        <button className="bg-blue-900 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
          READ MORE
        </button>
      </div>

      <div className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            {/* <img 
              src="/images/technology-solutions.jpg" 
              alt="Innovative Technology Solutions" 
              className="w-full h-auto max-w-4xl mx-auto shadow-lg rounded-lg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
