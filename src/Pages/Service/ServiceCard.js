// src/components/ServiceCard.js

import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
