import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactHeroSection from "./ContactHeroSection";

const ContactPage = ({ id }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="contact-page bg-gray-900">
      {/* Contact Hero Section */}
      <div className="w-full">
        <ContactHeroSection />
      </div>

      {/* Contact Form Section */}
      <div className="w-full pb-28 flex items-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
