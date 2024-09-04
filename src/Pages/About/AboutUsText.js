import React from "react";

const AboutUsText = () => {
  return (
    <div className="max-w-1/2 ">
      <h2 className="text-4xl md:text-64xl font-bold mb-4">
        About{" "}
        <span className="relative">
          <span className="inline-block custom-underline">US</span>
        </span>
      </h2>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed p-0 md:p-6 flex items-center text-left ">
        At CoreTechMX Solutions, we leverage over two decades of expertise in
        the embedded systems domain. Our extensive industry knowledge allows us
        to accelerate product deployment and enhance efficiency throughout the
        development cycle. With a strong track record of international
        experience, we have successfully worked with clients across diverse
        markets and adapted our solutions to meet global standards. Our team
        brings expertise in guiding projects from initial concept through to
        final implementation, ensuring seamless integration.
      </p>
    </div>
  );
};

export default AboutUsText;