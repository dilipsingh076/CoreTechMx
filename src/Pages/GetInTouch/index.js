import React from "react";
import GetInTouchArrow from "../../assets/GetInTouchArrow";
import styles from "./getInTouch.module.css";
import getInTouchImage from "../../assets/getintouchimage.webp";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contactus');
    };
  return (
    <section className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="bg-[#0E1734] text-white rounded-xl py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[70%] h-[60vh] mx-auto overflow-hidden">
        <div className="md:w-1/2  text-center md:text-left">
          <h2 className="text-4xl md:text-5xl  lg:text-6xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            We appreciate each customer and we are proud that 95% of clients
            come back to work with us again.
          </p>
          <button className={styles.contactButton} onClick={handleContactClick}>Contact Us</button>
        </div>

        {/* Arrow SVG visible only on medium screens and above */}
        <div className="hidden md:block md:w-1/2">
          <GetInTouchArrow className="w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          {/* Add the image for the chat illustration */}
          <img
            src={getInTouchImage}
            alt="Chat illustration"
             className="w-full max-w-xs md:max-w-full h-aut0 p-8"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
