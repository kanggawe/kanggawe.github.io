//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

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
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <h1>Eling Semesta Alam</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
