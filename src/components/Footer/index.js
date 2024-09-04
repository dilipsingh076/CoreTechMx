import React from "react";
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import FooterBottom from "./FooterBottom";
import Collaboration from "./Collaboration";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 p-8 text-white">
      <div className=" mt-8 mb-10 ">
        <Collaboration />
      </div>
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-auto">
          <ContactInfo />
        </div>
        <div>
          <Map />
        </div>
      </div>
      <div className=" mx-auto border-t border-gray-700 mt-8 pt-4">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
