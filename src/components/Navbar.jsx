import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Impor faSun dan faMoon
import "../assets/css/navbar.css"; // Pastikan file CSS ada dan benar
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useCookies } from "react-cookie";
import { Toggle } from "./Toggle";
import eLogo  from "../assets/img/eslog1.png";

function Navbar() {
    // Cek preferensi warna sistem
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Cek localStorage, jika tidak ada, gunakan preferensi sistem
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && preference);
  });

  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    // Terapkan tema saat komponen dimuat
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Event listener untuk scroll
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDark]);

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
    {/* <nav
     className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNavbar ? '' : 'd-none'}` } id='menutop-wrapper'
   > */}
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNavbar ? '' : 'hidden'}` } id='menutop-wrapper'
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* MySite */}
              <img
              src={eLogo} // Ganti dengan URL atau path logo Anda
              alt="Your Logo"
              style={{ width: "130px", height: "50px" }} // Atur ukuran logo
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
              <li className="nav-item">
                <div className="App" data-theme={isDark ? "dark" : "light"}>
                  <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun}
                    onClick={toggleMode}
                    style={{ cursor: "pointer", fontSize: "1.8rem", marginRight: "10px", color: "white", padding: "4px 10px 5px 10px" }}
                  />
                  <Toggle
                    isChecked={isDark}
                    handleChange={() => {
                      toggleMode();
                    }}
                  />
                </div>
              </li>
            </ul>
        </div>
      </div>
    </nav>
    
      <div style={{ paddingTop: '70px' }}></div>
    </>
   

  );
}

export default Navbar;
