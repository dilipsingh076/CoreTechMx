import AboutUsText from './AboutUsText';
import homeImg from "../../assets/homeImg.jpeg";

const AboutUsSection = ({id}) => {
  return (
    <section id={id} className="flex flex-col-reverse gap-9 lg:flex-row items-center justify-center p-10 bg-gray-900 text-white">
      <div className=" flext justify-center md:w-2/5">
        <img src={homeImg} alt="Home" className="w-full h-auto object-cover  rounded-xl" />
      </div>
      <div className="w-full lg:w-2/3 ">
        <AboutUsText />
      </div>
    </section>
  );
};

export default AboutUsSection;