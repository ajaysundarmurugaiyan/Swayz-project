import { useEffect } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CleaningHome from './pages/cleaningServices/CleaningHome';
import SwayzConstruction from './components/swayzContructionProfile/SwayzConstruction';
import Navbar from './components/shared/NavBar';
import BusinessProfile from './pages/businessProfile/BusinessProfile';
import Footer from './components/cleaningServices/Footer';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Contact from './components/contact/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cleaning-services" element={<CleaningHome />} />
        <Route path="/swayz-construction" element={<SwayzConstruction />} />
        <Route path="/security" element={<BusinessProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
