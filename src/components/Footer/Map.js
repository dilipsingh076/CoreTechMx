import React from 'react';

const Map = () => {
    return (
        <div className="map-container ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.756509034526!2d72.87996607419395!3d19.114566887065937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74cb60d19b1%3A0x1b4f5c50d68fd59a!2sA-503%2C%20Orchid%20Business%20Park%2C%20Military%20Rd%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059%2C%20India!5e0!3m2!1sen!2sus!4v1692024032102!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CoreTechMX Location"
            ></iframe>
        </div>
    );
};

export default Map;
