import React from 'react';

const CustomButton = ({ text, type = 'primary', onClick }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-200";
  const primaryStyles = "bg-orange-500 text-white hover:bg-orange-600";
  const secondaryStyles = "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${type === 'primary' ? primaryStyles : secondaryStyles}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;