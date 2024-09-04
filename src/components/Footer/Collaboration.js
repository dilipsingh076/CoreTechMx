import React from 'react';

import styles from "../../Pages/GetInTouch/getInTouch.module.css";
import { useNavigate } from 'react-router-dom';

const Collaboration = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contactus');
    };
    return (
        <div className="collaboration-section bg-[#0E1734] text-white py-8 px-2 md:py-16 w-full rounded-lg">
            <div className="container flex flex-col md:flex-row justify-between items-center px-4">
                <div className="w-full md:w-2/3 text-left"> {/* Adjusting the width and alignment */}
                    <h5 className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                        Collaboration
                    </h5>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Have a project <br />
                        in mind but need some guidance? <br />
                        Reach out to us!
                    </h2>
                </div>
                <div className="w-full md:w-auto mt-8 md:mt-0">
                    <button className={styles.contactButton} onClick={handleContactClick} >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;
