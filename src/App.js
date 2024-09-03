import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUsSection from "./Pages/About";
import ContactPage from "./Pages/Contact";
import GetInTouch from "./Pages/GetInTouch";
import HomeSection from "./Pages/Home";
import ServicesSection from "./Pages/Service";
import {RoutesConfig} from "./RoutesConfig/RoutesConfig";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesConfig/>
      {/* <HomeSection id="home" />
      <AboutUsSection id="about" />
      <ServicesSection id="services" /> */}
      {/* <TestimonialsSection id="testimonials" /> */}
      {/* <GetInTouch id="contact" /> */}
      {/* <ContactPage id="contact" /> */}

      <Footer />
    </div>
  );
}

export default App;
