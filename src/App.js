import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import ResearchFingerprint from './pages/ResearchFingerprint';
import BugMap from './pages/BugMap';




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




      </Routes>

      <footer>
        <p>© 2025 Aryan Murugesh</p>
      </footer>
    </Router>
  );
  
}

export default App;
