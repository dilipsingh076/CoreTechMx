import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUsSection from './Pages/About';
import ContactPage from './Pages/Contact';
import HomeSection from './Pages/Home';
import ServicesSection from './Pages/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection id="home" />
      <AboutUsSection id="about" />
      <ServicesSection id="services" />
      {/* Uncomment and create TestimonialsSection if needed */}
      {/* <TestimonialsSection id="testimonials" /> */}
      <ContactPage id="contact" />
      <Footer />
    </div>
  );
}

export default App;
