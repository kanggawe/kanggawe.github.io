
import "../assets/css/navbar.css";
import viteLogo from '../assets/img/eslog.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Impor faSun dan faMoon
import { Toggle } from "./Toggle";
import "../assets/css/main.css"; // Pastikan file CSS ada dan benar

function Navbar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(preference);
  const [isVisible, setIsVisible] = useState(true); // Menyimpan status visibilitas navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Menyimpan posisi scroll terakhir

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

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Ketika scroll ke bawah
        setIsVisible(false);
      } else {
        // Ketika scroll ke atas
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // Cleanup event listener ketika komponen di-unmount
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar dengan sticky behavior dan toggling visibilitas */}
      <nav
        className={`navbar navbar-expand-lg navbar-sticky ${isVisible ? "" : "navbar-hidden"} ${
          isDark ? "navbar-dark-mode" : "navbar-light-mode"
        }`}
        id="menutop-wrapper"
      >
        <div className="container">
          {/* Ganti nama brand dengan logo */}
          <Link className="navbar-brand" to="/">
            <img src={viteLogo} className="logo" alt="Vite logo" 
              style={{ width: "100px", height: "30px" }} // Atur ukuran logo
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/sitemap">
                  Sitemap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/pricing">
                 Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/iklan">
                  Pasang Iklan
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Follow DuniaKompi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="https://www.youtube.com/c/dukom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="https://www.linkedin.com/in/cbblogger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>

            </ul>
            <div data-theme={isDark ? "dark" : "light"}>
                  <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun} // Gunakan faMoon dan faSun
                    onClick={toggleMode}
                  style={{ cursor: "pointer", fontSize: "2rem", marginRight: "10px", color: "white" }}
                  />
                  <Toggle
                    isChecked={isDark}
                    handleChange={() => {
                      toggleMode();
                    }}
                  />
                </div>
          </div>
        </div>
      </nav>

      {/* Tambahkan padding-top untuk menghindari konten yang tertutup oleh navbar */}
      {/* <div style={{ paddingTop: '70px' }}> */}
        {/* Konten halaman lainnya */}
      {/* </div> */}
    </>
  );
}

export default Navbar;
