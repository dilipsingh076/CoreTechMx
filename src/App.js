import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {RoutesConfig} from "./RoutesConfig/RoutesConfig";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesConfig/>
      <Footer />
    </div>
  );
}

export default App;
