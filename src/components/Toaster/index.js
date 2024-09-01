import React, { useEffect, useState } from 'react';

const Toaster = ({ message, onClose, type = 'success' }) => {
    const [style, setStyle] = useState({
        opacity: 0,
        transform: 'translateY(-20px)',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    });

    useEffect(() => {
        // Show the toaster
        setStyle({
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
        });

        // Hide the toaster after 5 seconds
        const timer = setTimeout(() => {
            setStyle({
                opacity: 0,
                transform: 'translateY(-20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
            });
            setTimeout(() => {
                if (onClose) onClose();
            }, 500); // Match this delay with the transition time
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            style={{
                position: 'fixed',
                top: '100px',
                right: '20px',
                backgroundColor: type === 'success' ? '#38a169' : '#e53e3e',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                zIndex:'9999',
                ...style
            }}
        >
            <span>{message}</span>
            <button
                onClick={() => {
                    setStyle({
                        opacity: 0,
                        transform: 'translateY(-20px)',
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                    });
                    setTimeout(() => {
                        if (onClose) onClose();
                    }, 500);
                }}
                style={{
                    marginLeft: 'auto',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer'
                }}
            >
                &times;
            </button>
        </div>
    );
};

export default Toaster;
