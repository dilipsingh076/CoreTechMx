import React from "react";
import homeImg from "../../assets/homeImg.jpeg";
const HomeContent = () => {
  return (
    <div className=" min-h-screen flex flex-col  md:flex-row z-10 text-white text-center  items-center justify-around h-full px-6 md:px-14 py-10">
      <div className="  md:text-left md:w-3/5 max-w-3xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Innovate with{" "}
          <span className="relative">
            <span className="inline-block custom-underline">
              CoreTech<span className="text-[#0094E8]">MX</span>
            </span>
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
        At CoreTechMX Solutions, we are at the forefront of technological innovation, delivering advanced, tailor-made solutions across a wide range of industries. With a specialization in embedded systems, industrial automation, robotics, IoT, microcontrollers, embedded Linux, PCB design, and seamless integration with mobile and web app development, we offer end-to-end solutions that drive progress and innovation.
        </p>
      </div>

      {/* Image Content */}
      <div className=" flext justify-center md:w-2/5">
        <img src={homeImg} alt="Home" className="w-full h-auto object-cover  rounded-xl" />
      </div>
    </div>
  );
};

export default HomeContent;
 