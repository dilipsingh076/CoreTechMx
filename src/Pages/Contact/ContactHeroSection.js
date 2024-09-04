import React from 'react';
import { ContactHeroImage } from '../../assets';
import styles from './Contact.module.css'

const ContactHeroSection = ({ id }) => {
    return (
        <section
            id={id}
            className="contact-page flex flex-col lg:flex-row bg-gray-900 py-16 lg:py-0 h-screen items-center justify-center lg:justify-between lg:px-16 overflow-hidden"
        >
            <div className="text-section text-center lg:text-left lg:w-1/2 px-0 lg:px-20">
                <h1 className="text-3xl lg:text-6xl font-bold text-[#0094E8] mb-4">
                    Contact Us
                </h1>
                <p className="text-lg lg:text-2xl text-white mb-8">
                    Let's Connect and Start Something Great!
                </p>
                {/* <p className="text-sm lg:text-lg text-white mb-8">
                    We appreciate your decision to reach out to us. Now transform your concepts into high-speed solutions that disrupt industries.
                </p> */}
                {/* <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-700">
                    Let's Get Started
                </button> */}
            </div>
            <div className={`${styles.imageSection} lg:w-2/2 flex justify-center items-center m-auto w-full lg:w-1/2 h-auto lg:h-[80vh]  overflow-hidden`}>
                <ContactHeroImage className="w-full h-[55vh] object-cover ml-12 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-16"  />
            </div>
        </section>
    );
};

export default ContactHeroSection;
