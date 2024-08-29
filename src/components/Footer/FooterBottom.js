import React from 'react';

const FooterBottom = () => {
    return (
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-center text-white py-4">
            <div className="company-info mb-4 md:mb-0">
                <h3 className="font-bold">CoreTechMX</h3>
                <p>Copyright © 2024 All rights reserved</p>
            </div>
            <div className="footer-nav">
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-blue-500">HOME</a></li>
                    <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
                    <li><a href="#services" className="hover:text-blue-500">SERVICES</a></li>
                    {/* <li><a href="#testimonials" className="hover:text-blue-500">TESTIMONIALS</a></li> */}
                    <li><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBottom;