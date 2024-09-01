import React from "react";
import CustomButton from "../../components/CustomButton";
import HeroCard from "../../components/Card";

const HeroSection = () => {
  const cardData = [
    {
      title: "Campaign Analytics",
      description:
        "Gain insights into the performance of your ad campaigns with in-depth analytics and reporting.",
      icon: "📊",
    },
    {
      title: "Task Management",
      description:
        "Stay organized and efficient by managing tasks, deadlines, and team assignments in one centralized platform.",
      icon: "✅",
    },
    {
      title: "Course Creation",
      description:
        "Easily create engaging and interactive online courses with our user-friendly course creation tools.",
      icon: "🎓",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor the progress of your students, track their performance, and provide personalized feedback to enhance their learning experience.",
      icon: "📈",
    },
  ];

  return (
    <div
      className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../../assets/heroSectionBg.webp")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Let us work with you.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Our solution streamlines project management for advertising agencies,
          maximizing productivity and minimizing admin time.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <CustomButton text="Get started" type="primary" />
          <CustomButton text="Book a demo" type="secondary" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <HeroCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
