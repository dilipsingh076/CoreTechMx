import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactPage from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>Home Content</section>
      <section id="about" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>About Content</section>
      <section id="services" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>Services Content</section>
      <section id="testimonials" style={{ height: '100vh', backgroundColor: '#c0c0c0' }}>Testimonials Content</section>
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
