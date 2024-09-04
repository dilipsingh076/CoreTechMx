import AboutUsImage from './AboutUsImage';
import AboutUsText from './AboutUsText';

const AboutUsSection = ({id}) => {
  return (
    <section id={id} className="flex flex-col-reverse gap-9 lg:flex-row items-center justify-center p-10 bg-gray-900 text-white">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 px-9">
        <AboutUsImage  />
      </div>
      <div className="w-full lg:w-2/3 ">
        <AboutUsText />
      </div>
    </section>
  );
};

export default AboutUsSection;