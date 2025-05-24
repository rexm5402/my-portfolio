import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <div className="logo">Aryan Murugesh</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>© 2025 Aryan Murugesh</p>
      </footer>
    </Router>
  );
}

export default App;
