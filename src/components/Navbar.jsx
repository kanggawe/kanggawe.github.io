
import "../assets/css/navbar.css";
import viteLogo from '../../public/vite.svg';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Impor faSun dan faMoon
import { Darkmode } from "./Darkmode";
import "../assets/css/main.css"; // Pastikan file CSS ada dan benar


function Navbar() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useState(preference);
  
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsDark(true);
        document.body.classList.add("dark-mode");
      } else {
        setIsDark(false);
        document.body.classList.remove("dark-mode");
      }
    }, []);
  
    const toggleMode = () => {
      if (isDark) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
      setIsDark(!isDark);
    };
  
    return (
      <>
        {/* Sticky Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-sticky ${isDark ? "navbar-dark-mode" : "navbar-light-mode"}`}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="../react.svg" alt="Your Logo" style={{ width: "50px", height: "50px" }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun}
                    onClick={toggleMode}
                    style={{ cursor: "pointer", fontSize: "1.5rem", color: "white", marginRight: "15px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        {/* Padding to ensure content is not hidden behind the navbar */}
        <div style={{ paddingTop: '80px' }}>
          {/* Your other page content */}
        </div>
      </>
    );
  }
export default Navbar;
