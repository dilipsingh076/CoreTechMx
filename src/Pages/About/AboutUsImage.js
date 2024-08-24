import React from 'react';
import aboutUsImage from '../../assets/aboutImg.jpeg'; // Place your image in the assets folder

const AboutUsImage = () => {
  return (
    <img src={aboutUsImage} alt="About Us" className="w-full rounded-lg shadow-lg" />
  );
};

export default AboutUsImage;