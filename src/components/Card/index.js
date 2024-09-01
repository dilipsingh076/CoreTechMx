import React from 'react';

const HeroCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
      <div className="text-3xl text-green-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;