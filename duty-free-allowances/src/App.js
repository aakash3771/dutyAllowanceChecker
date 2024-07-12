import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';

const App = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitCount') || '0');
    localStorage.setItem('visitCount', (count + 1).toString());
    setVisitCount(count + 1);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="vertical-strip left">
          {/* Space for Google Ads */}
        </div>
        <div className="main-content">
          <header>
            <div className="logo">Duty-Free Checker</div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer>
            <div className="footer-content">
              <p>&copy; 2024 Duty-Free Allowances Checker. All rights reserved.</p>
              <p>Disclaimer: Information provided is for reference only. Please check with local customs for the most up-to-date regulations.</p>
            </div>
            <div className="visit-counter">
              Visits: {visitCount}
            </div>
          </footer>
        </div>
        <div className="vertical-strip right">
          {/* Space for Google Ads */}
        </div>
      </div>
    </Router>
  );
};

export default App;