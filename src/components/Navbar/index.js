// import React, { useEffect, useRef, useState } from 'react';
// import { navItems } from '../../constant/data';
// import './Navbar.css';
// import { CtmxIcon } from '../../assets';

// const Navbar = () => {
//     const menuRef = useRef(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('');
   
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeMenu = () => {
//         setIsOpen(false);
//     };

//     const handleClickOutside = (event) => {
//         if (menuRef.current && !menuRef.current.contains(event.target)) {
//             closeMenu();
//         }
//     };

    
//     const handleScroll = () => {
//         const sections = navItems.map(item => document.querySelector(item.href));
//         const scrollPosition = window.scrollY + window.innerHeight / 2;
        
//         sections.forEach(section => {
//             if (
//                 section.offsetTop <= scrollPosition &&
//                 section.offsetTop + section.offsetHeight > scrollPosition
//             ) {
//                 setActiveSection(section.id);
//             }
//         });
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <nav className="navbar" ref={menuRef} >
//             <div className="logo">
//                 <CtmxIcon className="w-12 h-12" />
//             </div>
//             <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                 {/* You can replace this with an actual icon */}
//                 <span className="hamburger-icon">&#9776;</span>
//             </div>
//             <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//                 {navItems.map((item) => (
//                     <li key={item.id}>
//                         <a href={item.href} onClick={closeMenu}  className={activeSection === item.href.slice(1) ? 'active' : ''}>{item.label}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;















// // const Navbar = () => {
// //     const menuRef = useRef(null);
// //     const [isOpen, setIsOpen] = useState(false);

// //     const toggleMenu = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     const closeMenu = () => {
// //         setIsOpen(false);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (menuRef.current && !menuRef.current.contains(event.target)) {
// //             closeMenu();
// //         }
// //     };

// //     useEffect(() => {
// //         document.addEventListener('mousedown', handleClickOutside);
// //         return () => {
// //             document.removeEventListener('mousedown', handleClickOutside);
// //         };
// //     }, []);

// //     return (
// //         <nav className="navbar flex items-center justify-between p-4">
// //             <div className="logo">
// //                 <CtmxIcon className="w-12 h-12" />
// //             </div>
// //             <div className={`hamburger ${isOpen ? 'open' : ''} cursor-pointer`} onClick={toggleMenu}>
// //                 <span className="hamburger-icon text-3xl">&#9776;</span>
// //             </div>
// //             <ul
// //                 ref={menuRef}
// //                 className={`nav-links flex-col absolute right-0 top-16 bg-white shadow-md p-4 transition-transform transform ${
// //                     isOpen ? 'translate-x-0' : 'translate-x-full'
// //                 } md:static md:flex md:flex-row md:items-center md:bg-transparent md:shadow-none md:p-0`}
// //             >
// //                 {navItems.map((item) => (
// //                     <li key={item.id} className="my-2 md:my-0 md:mx-4">
// //                         <a
// //                             href={item.href}
// //                             className="text-gray-800 hover:text-blue-500"
// //                             onClick={closeMenu}
// //                         >
// //                             {item.label}
// //                         </a>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </nav>
// //     );
// // };

// // export default Navbar;








import React, { useEffect, useRef, useState } from 'react';
import { navItems } from '../../constant/data';
import './Navbar.css';
import { CtmxIcon } from '../../assets';

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
                <CtmxIcon className="w-12 h-12" />
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
