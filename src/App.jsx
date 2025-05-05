import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutPage from "./Aboutpage"; // Import the AboutPage component
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
