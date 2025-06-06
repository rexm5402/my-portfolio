import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import ResearchFingerprint from './pages/ResearchFingerprint';
import BugMap from './pages/BugMap';
import EdgeCloud from './pages/EdgeCloud';
import VideoGen from './pages/VideoGen';
import PricePredict from './pages/PricePredict';





import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research-fingerprint" element={<ResearchFingerprint />} />
        <Route path="/project-bugmap" element={<BugMap />} />
        <Route path="/edge-cloud" element={<EdgeCloud />} />
        <Route path="/project-videogen" element={<VideoGen />} />
        <Route path="/project-pricepredict" element={<PricePredict />} />






      </Routes>

      <footer>
        <p>© 2025 Aryan Murugesh</p>
      </footer>
    </Router>
  );
  
}

export default App;
