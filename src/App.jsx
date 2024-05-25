//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import Disclaimer from "./pages/Disclaimer";
import Iklan from "./pages/Iklan";

function App() {
  return (
    <>
      <Router>
        <div id="menutop-wrapper">
          <div className="topmenu section" id="topmenu">
            <nav id="menutop">
              <input type="checkbox" />
              <label htmlFor="toggleMenu">
                <span>&nbsp;</span>
              </label>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                  <Link to="/sitemap">Sitemap</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
                <li>
                  <Link to="/iklan">Pasang Iklan</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iklan" element={<Iklan />} />
        </Routes>
      </Router>
      <h1>Eling Semesta Alam</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
