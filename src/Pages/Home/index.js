import React from 'react';
import HomeContent from './HomeContent';

const HomeSection = ({id}) => {
  return (
    <section
      id={id}
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${require('../../assets/homeImg.jpeg')})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center px-4">
        <HomeContent />
      </div>
    </section>
  );
};

export default HomeSection;
