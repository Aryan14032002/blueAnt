import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./Stats";
import ServiceSlider from "./ServiceSlider";
import Mobile from "./Mobile";
import Calculator from "./Calculator";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Youtube from "./Youtube";
import ImpactStories from "./ImpactStories";
import Footer from "./Footer";
import AboutPage from "./aboutpage"; // Import the AboutPage component
import Landing from "./Landing";
import ServicePage from "./ServicePage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/service" element={<ServicePage />} /> 
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
