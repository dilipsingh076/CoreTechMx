import React, { useEffect } from 'react'
import HomeSection from '../Home'
import AboutUsSection from '../About'
import ServicesSection from '../Service'
import GetInTouch from '../GetInTouch'

function MainSection() {
    useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        // Handle initial hash and hash change
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
    
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);
    
  return (
    <>
      <HomeSection id="home" />
      <AboutUsSection id="about" />
      <ServicesSection id="services" />
      {/* <TestimonialsSection id="testimonials" /> */}
      <GetInTouch />
      {/* <ContactPage id="contact" /> */}
      </>
  )
}

export default MainSection