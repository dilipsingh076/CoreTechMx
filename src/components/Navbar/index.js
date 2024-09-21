import React, { useEffect, useRef, useState } from 'react';
import { navItems } from '../../constant/data';
import './Navbar.css';
import {CtmxFullNameIcon} from "../../assets"

const Navbar = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                {/* <CtmxIcon className="w-12 h-12" /> */}
                <CtmxFullNameIcon className="w-18 h-12"/>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="hamburger-icon">&#9776;</span>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            onClick={closeMenu}
                            className={activeSection === item.id ? 'active' : ''}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
