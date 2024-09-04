import React from 'react';
import HomeContent from './HomeContent';

const HomeSection = ({id}) => {
  return (
    <section
      id={id}
      className=" bg-gray-900"
    >
      <HomeContent />
    </section>
  );
};

export default HomeSection;
