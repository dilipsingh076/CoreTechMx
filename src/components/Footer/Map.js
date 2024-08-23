import React from 'react';

const Map = () => {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9436419618963!2d-73.96828548459515!3d40.78121667932616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589cadd5ed07%3A0xa4fa0f3f9a9bcdc8!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1692024032102!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manhattan Map"
            ></iframe>
        </div>
    );
};

export default Map;