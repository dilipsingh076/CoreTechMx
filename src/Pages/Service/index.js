// src/components/ServicesSection.js

import React from "react";
import ServiceCard from "./ServiceCard";
import {servicesData} from "../../constant/serviceData";

const ServicesSection = ({id}) => {
  return (
    <section id={id} className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
