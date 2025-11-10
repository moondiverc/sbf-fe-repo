import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Contact from "./pages/Contact";
import Testimoni from "./pages/Testimoni";

export default function FitTrackApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {});

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <div className="app-container">
        {/* Navbar */}
        <nav>
          <div className="nav-container">
            <div className="logo">💪 FitTrack</div>
            <button
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul
              id="primary-navigation"
              className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/meal" onClick={closeMenu}>
                  Meal
                </Link>
              </li>
              <li>
                <Link to="/testimoni" onClick={closeMenu}>
                  Testimoni
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Kontak
                </Link>
              </li>
              <li>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {isDarkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/testimoni" element={<Testimoni />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
