import AboutUsImage from './AboutUsImage';
import AboutUsText from './AboutUsText';

const AboutUsSection = ({id}) => {
  return (
    <section id={id} className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-900 text-white">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <AboutUsImage  />
      </div>
      <div className="w-full lg:w-1/2">
        <AboutUsText />
      </div>
    </section>
  );
};

export default AboutUsSection;