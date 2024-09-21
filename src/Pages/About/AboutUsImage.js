import React from 'react';
import homeImg from "../../assets/homeImg.jpeg";

const AboutUsImage = () => {
  return (
      <div className=" flext justify-center ">
        <img src={homeImg} alt="Home" className="w-full h-auto object-cover  rounded-xl" />
      </div>
  );
};

export default AboutUsImage;